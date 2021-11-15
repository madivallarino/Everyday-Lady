class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :index, :show]
    # before_action :orders
    # validate :email, uniqueness: true, on: :create


    def create 
        user = User.create!(user_params)
        
        if user
        session[:user_id] = user.id
        user.items = session[:cart]
        user.save
        render json: user, status: :created
        
        else 
        render json: {error: "not valid input"}
        end
    end
    
    def index
        render json: User.all, status: :ok
    end

    def orders
        user = User.find_by(id: session[:user_id])
       
        render json: user, include: :items, status: :ok
    
    end
    def show
       
        user = User.find_by(id: session[:user_id])
      
        if user 
            render json: user, status: :ok
        
        else
            render json: {error: "Not logged in"}, status: :unauthorized
        end
        
    end
    
    def update
        byebug
    end

    # def update
    #     user = User.find_by(id: session[:user_id])
    #     items = Product.find(session[:cart])
      
    #     user.items << items
    #     user.save
    #     session[:cart] = []
    #     # session[:cart].destroy
    #     byebug
    # end

    private

    def user_params
        params.permit(:name, :email, :password, :password_confirmation, :items, :orders)
    end

    def unprocessable_entity_response(invalid)
        render json: {error: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end
