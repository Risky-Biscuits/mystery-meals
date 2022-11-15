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


  #--- Delete ---  
  describe "DELETE /destroy" do
    it "deletes an restaurant" do
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
        state: "GA",        
        )

      delete restaurant_path(1)
      expect(response).to have_http_status(200)
    end
  end

  
  # VALIDATIONS
  it 'should have a valid name' do
    restaurant = Restaurant.create(
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
    expect(restaurant.errors[:name]).to include "can't be blank"
  end

  it 'should have a valid food_type' do
    restaurant = Restaurant.create(
      name: "Furry Tacos",
      image: "https://pbs.twimg.com/profile_images/535195288093200384/gNY6HIXg_400x400.jpeg",
      price: "$$",
      phone_number: "404-555-5555",
      website: "https://fuzzystacoshop.com/",
      zip: 30315,
      city: "Atlanta",
      street: "124 making biscuits lane",
      state: "GA"
    )
    expect(restaurant.errors[:food_type]).to include "can't be blank"
  end

  it 'should have a valid image' do
    restaurant = Restaurant.create(
      name: "Furry Tacos",
      food_type: "Mexican",
      price: "$$",
      phone_number: "404-555-5555",
      website: "https://fuzzystacoshop.com/",
      zip: 30315,
      city: "Atlanta",
      street: "124 making biscuits lane",
      state: "GA"
    )
    expect(restaurant.errors[:image]).to include "can't be blank"
  end

  it 'should have a valid price' do
    restaurant = Restaurant.create(
      name: "Furry Tacos",
      food_type: "Mexican",
      image: "https://pbs.twimg.com/profile_images/535195288093200384/gNY6HIXg_400x400.jpeg",
      phone_number: "404-555-5555",
      website: "https://fuzzystacoshop.com/",
      zip: 30315,
      city: "Atlanta",
      street: "124 making biscuits lane",
      state: "GA"
    )
    expect(restaurant.errors[:price]).to include "can't be blank"
  end

  it 'should have a valid phone_number' do
    restaurant = Restaurant.create(
      name: "Furry Tacos",
      food_type: "Mexican",
      image: "https://pbs.twimg.com/profile_images/535195288093200384/gNY6HIXg_400x400.jpeg",
      price: "$$",
      website: "https://fuzzystacoshop.com/",
      zip: 30315,
      city: "Atlanta",
      street: "124 making biscuits lane",
      state: "GA"
    )
    expect(restaurant.errors[:phone_number]).to include "can't be blank"
  end

  it 'should have a valid website' do
    restaurant = Restaurant.create(
      name: "Furry Tacos",
      food_type: "Mexican",
      image: "https://pbs.twimg.com/profile_images/535195288093200384/gNY6HIXg_400x400.jpeg",
      price: "$$",
      phone_number: "404-555-5555",
      zip: 30315,
      city: "Atlanta",
      street: "124 making biscuits lane",
      state: "GA"
    )
    expect(restaurant.errors[:website]).to include "can't be blank"
  end

  it 'should have a valid zip' do
    restaurant = Restaurant.create(
      name: "Furry Tacos",
      food_type: "Mexican",
      image: "https://pbs.twimg.com/profile_images/535195288093200384/gNY6HIXg_400x400.jpeg",
      price: "$$",
      phone_number: "404-555-5555",
      website: "https://fuzzystacoshop.com/",
      city: "Atlanta",
      street: "124 making biscuits lane",
      state: "GA"
    )
    expect(restaurant.errors[:zip]).to include "can't be blank"
  end

  it 'should have a valid city' do
    restaurant = Restaurant.create(
      name: "Furry Tacos",
      food_type: "Mexican",
      image: "https://pbs.twimg.com/profile_images/535195288093200384/gNY6HIXg_400x400.jpeg",
      price: "$$",
      phone_number: "404-555-5555",
      website: "https://fuzzystacoshop.com/",
      zip: 30315,
      street: "124 making biscuits lane",
      state: "GA"
    )
    expect(restaurant.errors[:city]).to include "can't be blank"
  end

  it 'should have a valid street' do
    restaurant = Restaurant.create(
      name: "Furry Tacos",
      food_type: "Mexican",
      image: "https://pbs.twimg.com/profile_images/535195288093200384/gNY6HIXg_400x400.jpeg",
      price: "$$",
      phone_number: "404-555-5555",
      website: "https://fuzzystacoshop.com/",
      zip: 30315,
      city: "Atlanta",
      state: "GA"
    )
    expect(restaurant.errors[:street]).to include "can't be blank"
  end

  it 'should have a valid state' do
    restaurant = Restaurant.create(
      name: "Furry Tacos",
      food_type: "Mexican",
      image: "https://pbs.twimg.com/profile_images/535195288093200384/gNY6HIXg_400x400.jpeg",
      price: "$$",
      phone_number: "404-555-5555",
      website: "https://fuzzystacoshop.com/",
      zip: 30315,
      city: "Atlanta",
      street: "124 making biscuits lane",
    )
    expect(restaurant.errors[:state]).to include "can't be blank"
  end

  it 'should have a valid user_id' do
    restaurant = Restaurant.create(
      name: "Furry Tacos",
      food_type: "Mexican",
      image: "https://pbs.twimg.com/profile_images/535195288093200384/gNY6HIXg_400x400.jpeg",
      price: "$$",
      phone_number: "404-555-5555",
      website: "https://fuzzystacoshop.com/",
      zip: 30315,
      city: "Atlanta",
      street: "124 making biscuits lane",
    )
    expect(restaurant.errors[:user_id]).to include "can't be blank"
  end

  it 'should have a valid :restaurant_review_id' do
    restaurant = Restaurant.create(
      name: "Furry Tacos",
      food_type: "Mexican",
      image: "https://pbs.twimg.com/profile_images/535195288093200384/gNY6HIXg_400x400.jpeg",
      price: "$$",
      phone_number: "404-555-5555",
      website: "https://fuzzystacoshop.com/",
      zip: 30315,
      city: "Atlanta",
      street: "124 making biscuits lane",
    )
    expect(restaurant.errors[:restaurant_review_id]).to include "can't be blank"
  end
end