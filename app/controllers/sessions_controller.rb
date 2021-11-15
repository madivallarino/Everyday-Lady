class SessionsController < ApplicationController
    skip_before_action :authorize, only: [:create, :delete_cart]

    def create 
        user = User.find_by(email: params[:email])
        
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            user.items = (session[:cart])
            user.save
            render json: user, status: :created
        else
            render json: {error: {login: "Invalid email or password"}}
        end
    end

    def delete_cart
       
        session.delete(:cart)
    
    end

    def destroy
        user = User.find(session[:user_id])
        user.orders = user.items
        user.save
        session.delete :user_id
        head :no_content
    end

    # def show
    #     render json: @current_user, status: :ok
    # end


end
