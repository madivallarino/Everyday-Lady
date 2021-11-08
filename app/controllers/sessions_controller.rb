class SessionsController < ApplicationController
    skip_before_action :authorize, only: :create

    def create 
        user = User.find_by(name: params[:name])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :created
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
