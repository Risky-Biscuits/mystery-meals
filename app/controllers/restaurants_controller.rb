class RestaurantsController < ApplicationController

  def create
    restaurant = Restaurant.create(restaurant_params)
    if restaurant.valid?
      render json: restaurant
    else
      render json: restaurant.errors, status: 422
    end
  
  end

  private
  def restaurant_params
    params.require(:restaurant).permit(:name, :food_type, :image, :price, :phone_number, :website, :zip, :city, :street, :state, :user_id, :restaurant_review_id)
  end
end
