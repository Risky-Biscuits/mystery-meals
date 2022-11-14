# require 'rails_helper'

# RSpec.describe Restaurant, type: :model do
#   let(:user) { User.create email: 'test@example.com', first_name: "Ricky", last_name: "Biscuits", password: 'password', password_confirmation: 'password' }

#   it 'should have a valid name' do
#     restaurant = Restaurant.create(
#       food_type: "Mexican",
#       image: "https://pbs.twimg.com/profile_images/535195288093200384/gNY6HIXg_400x400.jpeg",
#       price: "$$",
#       phone_number: "404-555-5555",
#       website: "https://fuzzystacoshop.com/",
#       zip: 30315,
#       city: "Atlanta",
#       street: "124 making biscuits lane",
#       state: "GA"
#     )
#     expect(restaurant.errors[:name]).to include "can't be blank"
#   end

#   it 'should have a valid food_type' do
#     restaurant = Restaurant.create(
#       name: "Furry Tacos",
#       image: "https://pbs.twimg.com/profile_images/535195288093200384/gNY6HIXg_400x400.jpeg",
#       price: "$$",
#       phone_number: "404-555-5555",
#       website: "https://fuzzystacoshop.com/",
#       zip: 30315,
#       city: "Atlanta",
#       street: "124 making biscuits lane",
#       state: "GA"
#     )
#     expect(restaurant.errors[:food_type]).to include "can't be blank"
#   end

#   it 'should have a valid image' do
#     restaurant = Restaurant.create(
#       name: "Furry Tacos",
#       food_type: "Mexican",
#       price: "$$",
#       phone_number: "404-555-5555",
#       website: "https://fuzzystacoshop.com/",
#       zip: 30315,
#       city: "Atlanta",
#       street: "124 making biscuits lane",
#       state: "GA"
#     )
#     expect(restaurant.errors[:image]).to include "can't be blank"
#   end

#   it 'should have a valid price' do
#     restaurant = Restaurant.create(
#       name: "Furry Tacos",
#       food_type: "Mexican",
#       image: "https://pbs.twimg.com/profile_images/535195288093200384/gNY6HIXg_400x400.jpeg",
#       phone_number: "404-555-5555",
#       website: "https://fuzzystacoshop.com/",
#       zip: 30315,
#       city: "Atlanta",
#       street: "124 making biscuits lane",
#       state: "GA"
#     )
#     expect(restaurant.errors[:price]).to include "can't be blank"
#   end

#   it 'should have a valid phone_number' do
#     restaurant = Restaurant.create(
#       name: "Furry Tacos",
#       food_type: "Mexican",
#       image: "https://pbs.twimg.com/profile_images/535195288093200384/gNY6HIXg_400x400.jpeg",
#       price: "$$",
#       website: "https://fuzzystacoshop.com/",
#       zip: 30315,
#       city: "Atlanta",
#       street: "124 making biscuits lane",
#       state: "GA"
#     )
#     expect(restaurant.errors[:phone_number]).to include "can't be blank"
#   end

#   it 'should have a valid website' do
#     restaurant = Restaurant.create(
#       name: "Furry Tacos",
#       food_type: "Mexican",
#       image: "https://pbs.twimg.com/profile_images/535195288093200384/gNY6HIXg_400x400.jpeg",
#       price: "$$",
#       phone_number: "404-555-5555",
#       zip: 30315,
#       city: "Atlanta",
#       street: "124 making biscuits lane",
#       state: "GA"
#     )
#     expect(restaurant.errors[:website]).to include "can't be blank"
#   end

#   it 'should have a valid zip' do
#     restaurant = Restaurant.create(
#       name: "Furry Tacos",
#       food_type: "Mexican",
#       image: "https://pbs.twimg.com/profile_images/535195288093200384/gNY6HIXg_400x400.jpeg",
#       price: "$$",
#       phone_number: "404-555-5555",
#       website: "https://fuzzystacoshop.com/",
#       city: "Atlanta",
#       street: "124 making biscuits lane",
#       state: "GA"
#     )
#     expect(restaurant.errors[:zip]).to include "can't be blank"
#   end

#   it 'should have a valid city' do
#     restaurant = Restaurant.create(
#       name: "Furry Tacos",
#       food_type: "Mexican",
#       image: "https://pbs.twimg.com/profile_images/535195288093200384/gNY6HIXg_400x400.jpeg",
#       price: "$$",
#       phone_number: "404-555-5555",
#       website: "https://fuzzystacoshop.com/",
#       zip: 30315,
#       street: "124 making biscuits lane",
#       state: "GA"
#     )
#     expect(restaurant.errors[:city]).to include "can't be blank"
#   end

#   it 'should have a valid street' do
#     restaurant = Restaurant.create(
#       name: "Furry Tacos",
#       food_type: "Mexican",
#       image: "https://pbs.twimg.com/profile_images/535195288093200384/gNY6HIXg_400x400.jpeg",
#       price: "$$",
#       phone_number: "404-555-5555",
#       website: "https://fuzzystacoshop.com/",
#       zip: 30315,
#       city: "Atlanta",
#       state: "GA"
#     )
#     expect(restaurant.errors[:street]).to include "can't be blank"
#   end

#   it 'should have a valid state' do
#     restaurant = Restaurant.create(
#       name: "Furry Tacos",
#       food_type: "Mexican",
#       image: "https://pbs.twimg.com/profile_images/535195288093200384/gNY6HIXg_400x400.jpeg",
#       price: "$$",
#       phone_number: "404-555-5555",
#       website: "https://fuzzystacoshop.com/",
#       zip: 30315,
#       city: "Atlanta",
#       street: "124 making biscuits lane",
#     )
#     expect(restaurant.errors[:state]).to include "can't be blank"
#   end

#   it 'should have a valid user_id' do
#     restaurant = Restaurant.create(
#       name: "Furry Tacos",
#       food_type: "Mexican",
#       image: "https://pbs.twimg.com/profile_images/535195288093200384/gNY6HIXg_400x400.jpeg",
#       price: "$$",
#       phone_number: "404-555-5555",
#       website: "https://fuzzystacoshop.com/",
#       zip: 30315,
#       city: "Atlanta",
#       street: "124 making biscuits lane",
#     )
#     expect(restaurant.errors[:user_id]).to include "can't be blank"
#   end

#   it 'should have a valid :restaurant_review_id' do
#     restaurant = Restaurant.create(
#       name: "Furry Tacos",
#       food_type: "Mexican",
#       image: "https://pbs.twimg.com/profile_images/535195288093200384/gNY6HIXg_400x400.jpeg",
#       price: "$$",
#       phone_number: "404-555-5555",
#       website: "https://fuzzystacoshop.com/",
#       zip: 30315,
#       city: "Atlanta",
#       street: "124 making biscuits lane",
#     )
#     expect(restaurant.errors[:restaurant_review_id]).to include "can't be blank"
#   end
# end
