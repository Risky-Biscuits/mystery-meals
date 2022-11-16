class RestaurantReviewsController < ApplicationController

  def index
    restaurant_review = RestaurantReview.all
    render json: restaurant_review
  end

  
  def create
    restaurant_review = RestaurantReview.create(restaurant_review_params)
    if restaurant_review.valid?
      render json: restaurant_review
    else
      render json: restaurant_review.errors, status: 422
    end
  end
  


  def update
    restaurant_review = RestaurantReview.find(params[:id])
    restaurant_review.update(restaurant_review_params)
    if restaurant_review.valid?
      render json: restaurant_review
    else
      render json: restaurant_review.errors, status: :unprocessable_entity
    end
  end


  def destroy
    restaurant_review = RestaurantReview.find(params[:id])
    if restaurant_review.destroy
      render json: restaurant_review
    else
      render json: restaurant_review.errors, status: 422
    end
  end


  private

  def restaurant_review_params
    params.require(:restaurant_review).permit(:review, :rating, :user_id, :restaurant_id)
  end
end

# RestaurantReview.create(review: "NICE", rating: 3, user_id: user.id, restaurant_id: restaurant.id)