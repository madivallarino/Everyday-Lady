class ProductsController < ApplicationController
    skip_before_action :authorize, only: [:home_products, :show, :clothing_products, :lifestyle_products, :load_cart, :add_to_cart, :remove_from_cart]
    before_action :initialize_session 
    # before_action :load_cart
    def index 
        products = Product.all
        render json: products
    end

    def home_products
        products = Product.where(category: "Home")
        render json: products
    end

    def show 
        product = Product.find_by(id: params[:id])
        if product
            render json: product, status: :ok
        else 
            render json: {error: "product not found"}, status: :not_found
        end
    end
    def lifestyle_products
        products = Product.where(category: "Lifestyle")
        render json: products 
    end
    
    def clothing_products
        products = Product.where(category: "Clothing")
        render json: products 
    end


    def add_to_cart
        id = params[:id]
        session[:cart] << id unless session[:cart].include?(id)
        # byebug
        #THIS REDIRECT NEEDS TO BE SOMETHING DIFFERENT 
        redirect_to
        # byebug
    end

    def load_cart 
        
        items = Product.find(session[:cart])
       render json: items
        
    end
    # user = User.find_by(email: params[:email])
    #     if user 
    #        byebug
    #     elsif 
    #         items = Product.find(session[:cart])
    #     render json: items
    #     end

def remove_from_cart
    id = params[:id]
    session[:cart].delete(id)
end

def complete_payment
    byebug
    session[:cart] = []
end


def quantity
    # byebug
product = Product.find_by(id: params[:id])
if product 
    product.update(number: params[:number])
    render json: product
else
    render json: {error: "Item not found"}, status: :not_found
end
end


    def initialize_session 
        # session.delete(:cart)
        session[:cart] ||= []
        # byebug
    end


end
