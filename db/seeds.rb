# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

user = User.where(email: "test@example.com", first_name: "Ricky", last_name: "Biscuits").first_or_create(password: "password", password_confirmation: "password")

restaurant_seeds = [
  {
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
  },
  {
    name: "Raging Burritos",
    food_type: "Mexican",
    image: "https://www.thespruceeats.com/thmb/vequ4du_9ahBCvjuNErPtixsHsY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/vegetarian-bean-and-rice-burrito-recipe-3378550-hero-01-40ecbc08fcc84e80b8be853c1b779a13.jpg",
    price: "$$$",
    phone_number: "770-134-5325",
    website: "Raging Burrito",
    zip: 30315,
    city: "Atlanta",
    street: "111  the bisquicks street",
    state: "GA"
  },
  {
    name: "Phở Cue",
    food_type: "Viatmenese",
    image: "https://www.inspiredtaste.net/wp-content/uploads/2016/06/Vietnamese-Pho-Soup-Recipe-1.jpg",
    price: "$$$",
    phone_number: "757-333-1234",
    website: "https://www.eatphocue.com/",
    zip: 30315,
    city: "Atlanta",
    street: "443 pho you lane",
    state: "GA"
  }
]

restaurant_seeds.each do |restaurant|
  user.restaurants.create(restaurant)
  p "creating: #{restaurant}"
end

restaurant_review_seeds = [
  {
    review: "Greatest food ever",
    rating: 5,
  },
  {
    review: "I wouldn't eat here if you paid me",
    rating: 1,
  },
  {
    review: "Its ok, nothing special",
    rating: 3,
  }
]

restaurant_review_seeds.each do |restaurant_review|
  user.restaurant_reviews.create(restaurant_review)
  p "creating: #{restaurant_review}"
end