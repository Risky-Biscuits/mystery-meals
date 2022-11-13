class RestaurantsController < ApplicationController

  def create
    restaurant = Restaurant.create(Restaurant_params)
    if restaurant.valid?
      render json: restaurant
    else
      render json: restaurant.errors, status: 422
    end
  
  end

  private
  def restaurant_params
    params.require(:restaurant).permit(:name, :food_type, :image, :price, :phone_number, :website, :zip, :city, :street, :state, :restaurant_id, :user_id)
  end
end
