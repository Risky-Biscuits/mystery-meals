require 'rails_helper'

RSpec.describe "Restaurants", type: :request do
  let(:user) { User.create email: 'test@example.com', first_name: "Ricky", last_name: "Biscuits", password: 'password', password_confirmation: 'password' }
  let(:restaurant_review) {RestaurantReview.create review: "This was awesome!", rating: 5}

  # -----create-----
  describe "POST /create" do
    it "creates a restaurant" do
      restaurant_params = {
        restaurant: {
          name: "Furry Tacos",
          food_type: "Mexican",
          image: "https://pbs.twimg.com/profile_images/535195288093200384/gNY6HIXg_400x400.jpeg",
          price: "$$",
          phone_number: "404-555-5555",
          website: "https://fuzzystacoshop.com/",
          zip: 30315,
          city: "Atlanta",
          street: "124 making biscuits lane",
          state: "GA",
          user_id: user.id,
          restaurant_review_id: restaurant_review.id,
        }
      }

      post "/restaurants", params: restaurant_params
      JSON.parse(response.body)
      restaurant = Restaurant.first
      expect(response).to have_http_status(200)
      expect(restaurant.name).to eq "Furry Tacos"
      expect(restaurant.food_type).to eq "Mexican"
      expect(restaurant.image).to eq "https://pbs.twimg.com/profile_images/535195288093200384/gNY6HIXg_400x400.jpeg"
      expect(restaurant.price).to eq "$$"
      expect(restaurant.phone_number).to eq "404-555-5555"
      expect(restaurant.website).to eq "https://fuzzystacoshop.com/"
      expect(restaurant.zip).to eq 30315
      expect(restaurant.city).to eq "Atlanta"
      expect(restaurant.street).to eq "124 making biscuits lane"
      expect(restaurant.state).to eq "GA"
    end
  end
end