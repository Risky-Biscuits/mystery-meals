require "rails_helper"

RSpec.describe "Restaurants", type: :request do
  let(:user) { User.create email: "test@example.com", first_name: "Ricky", last_name: "Biscuits", password: "password", password_confirmation: "password" }

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
          state: "GA"
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

  # -----update-----
  describe "PATCH /update" do
    it("updates an restaurant listing") do
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
          state: "GA"
        }
      }

      post "/restaurants", params: restaurant_params
      restaurant = Restaurant.first
      JSON.parse(response.body)

      update_params = {
        restaurant: {
          name: "TEST Tacos",
          food_type: "TEST Mexican",
          image: "https://pbs.twimg.com/profile_images/535195288093200384/gNY6HIXg_400x400.jpeg",
          price: "$$",
          phone_number: "404-555-5555",
          website: "https://fuzzystacoshop.com/",
          zip: 30315,
          city: "Atlanta",
          street: "124 making biscuits lane",
          state: "TX"
        }
      }
          
      patch "/restaurants/#{restaurant.id}", params: update_params
      restaurant = Restaurant.first
      expect(response).to have_http_status(200)
      expect(restaurant.name).to eq "TEST Tacos"
      expect(restaurant.food_type).to eq "TEST Mexican"
      expect(restaurant.image).to eq "https://pbs.twimg.com/profile_images/535195288093200384/gNY6HIXg_400x400.jpeg"
      expect(restaurant.price).to eq "$$"
      expect(restaurant.phone_number).to eq "404-555-5555"
      expect(restaurant.website).to eq "https://fuzzystacoshop.com/"
      expect(restaurant.zip).to eq 30315
      expect(restaurant.city).to eq "Atlanta"
      expect(restaurant.street).to eq "124 making biscuits lane"
      expect(restaurant.state).to eq "TX"
    end
  end
  
  # -----index-----
  describe "GET /index" do
    it "gets a list of restaurants" do
      Restaurant.create(
        name: "Furry Tacos",
        food_type: "Mexican",
        image: "https://pbs.twimg.com/profile_images/535195288093200384/gNY6HIXg_400x400.jpeg",
        price: "$$",
        phone_number: "404-555-5555",
        website: "https://fuzzystacoshop.com/",
        zip: 30315,
        city: "Atlanta",
        street: "124 making biscuits lane",
        state: "GA"        
        )
  
        # Make a request
        get '/restaurants'
  
        restaurant = JSON.parse(response.body)
        expect(response).to have_http_status(200)
        expect(restaurant.length).to eq 1
      end
    end
    
  end    









