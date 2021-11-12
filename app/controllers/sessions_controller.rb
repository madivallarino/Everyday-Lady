class SessionsController < ApplicationController
    skip_before_action :authorize, only: :create

    def create 
        user = User.find_by(email: params[:email])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            user.items << session[:cart]
            byebug
            render json: {user: user, items: user.items}, status: :created
        else
            render json: {error: {login: "Invalid email or password"}}
        end
    end

    def destroy
        session.delete :user_id
        head :no_content
    end

    # def show
    #     render json: @current_user, status: :ok
    # end


end
