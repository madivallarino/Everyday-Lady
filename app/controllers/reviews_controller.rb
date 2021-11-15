class ReviewsController < ApplicationController
    skip_before_action :authorize, only: [:index]

    def index
        render json: Review.all
    end

    def create 
        review = Review.create!(review_params)
        render json: review, status: :created
    end

def show
    review = Review.find(id: params[:id])
end

def destroy
    review = Review.find(id params[:id])
    review.destroy
end

    private 

    def review_params
        params.permit(:description, :star_rating, :product_id, :user_id)
    end
end
