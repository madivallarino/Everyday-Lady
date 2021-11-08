class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :index]
    # validate :email, uniqueness: true, on: :create


    def create 
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end
    def index
        render json: User.all, status: :ok
    end

    def show
        render json: @current_user, status: :ok
    end
    

    private

    def user_params
        params.permit(:name, :email, :password, :password_confirmation)
    end

    def unprocessable_entity_response(invalid)
        render json: {error: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end
