class ProductsController < ApplicationController

    def home_products
        products = Product.where(category: "Home")
        render json: products 
    end
    # def lifestyle_products
    #     products = Product.where(category: "Lifestyle")
    #     render json: products 
    # end
    # def clothing_products
    #     products = Product.where(category: "Clothing")
    #     render json: products 
    # end
end
