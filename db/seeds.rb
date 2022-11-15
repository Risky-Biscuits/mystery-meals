# =========================================================================================================
# =========================================================================================================
# === === === === === ===  Create First User and Restaurant_Review For Restaurant === === === === === ===
user = User.where(email: "test@example.com", first_name: "Ricky", last_name: "Biscuits").first_or_create(password: "password", password_confirmation: "password")

# === === === === === ===  Restaurant Seed Data === === === === === ===
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

review_seeds = [
  {
    review: "not bad for east coast tacos",
    rating: 4,
    restaurant_id: 1,
    user_id: 1
  },
  {
    review: "meh.. id rather have taco bell",
    rating: 1,
    restaurant_id: 2,
    user_id: 1
  },
  {
    review: "best soup ever!",
    rating: 4,
    restaurant_id: 2,
    user_id: 1
  }

]

# === === === === === ===  Restaurant Create Method for Seed Data === === === === === ===
restaurant_seeds.each do |each_restaurant|
  user.restaurants.create(each_restaurant)
  p "creating: #{each_restaurant}"
end

review_seeds.each do |each_review|
  user.restaurant_reviews.create(each_review)
  p "creating: #{each_review}"
end
