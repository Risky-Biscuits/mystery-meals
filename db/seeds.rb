
# =========================================================================================================
# =========================================================================================================
# === === === === === ===  Create First User and Restaurant_Review For Restaurant === === === === === === 
user = User.where(email: "test@example.com", first_name: "Ricky", last_name: "Biscuits").first_or_create(password: "password", password_confirmation: "password")

restaurant_review = RestaurantReview.create(review: "Review of this restaurant", rating: 5) 
p restaurant_review


# === === === === === ===  Rstaurant Seed Data === === === === === === 
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
    state: "GA",
    user_id: user.id,
    restaurant_review_id: restaurant_review.id,
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
    state: "GA",
    user_id: user.id,
    restaurant_review_id: restaurant_review.id,
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
    state: "GA",
    user_id: user.id,
    restaurant_review_id: restaurant_review.id,
  }
]

# === === === === === ===  Restaurant Create Method for Seed Data === === === === === === 
restaurant_seeds.each do |each_restaurant|
  user.restaurants.create(each_restaurant)
  p "creating: #{each_restaurant}"
end



# =========================================================================================================
# =========================================================================================================
# === === === === === ===  Create Second User and Restaurant_Review For Restaurant === === === === === === 
user = User.where(email: "jeremy@example.com", first_name: "jeremy", last_name: "duncan").first_or_create(password: "password2", password_confirmation: "password2")

restaurant_review = RestaurantReview.create(review: "Here are my thoughts...", rating: 5) 
p restaurant_review


# === === === === === ===  Rstaurant Seed Data === === === === === === 
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
    state: "GA",
    user_id: user.id,
    restaurant_review_id: restaurant_review.id,
  },
  {
    name: "Best Tacos",
    food_type: "Mexican",
    image: "BEST TACOS IMAGE",
    price: "$$",
    phone_number: "222-222-2222",
    website: "BEST TACOS URL",
    zip: 30325,
    city: "Atlanta",
    street: "124 making best TACOS",
    state: "GA",
    user_id: user.id,
    restaurant_review_id: restaurant_review.id,
  },
  {
    name: "Best Burritos",
    food_type: "Mexican",
    image: "https://www.thespruceeats.com/thmb/vequ4du_9ahBCvjuNErPtixsHsY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/vegetarian-bean-and-rice-burrito-recipe-3378550-hero-01-40ecbc08fcc84e80b8be853c1b779a13.jpg",
    price: "$$$",
    phone_number: "770-134-5325",
    website: "Raging Burrito",
    zip: 30315,
    city: "Atlanta",
    street: "111  the bisquicks street",
    state: "GA",
    user_id: user.id,
    restaurant_review_id: restaurant_review.id,
  },
  {
    name: "Best Phở",
    food_type: "Viatmenese",
    image: "https://www.inspiredtaste.net/wp-content/uploads/2016/06/Vietnamese-Pho-Soup-Recipe-1.jpg",
    price: "$$$",
    phone_number: "757-333-1234",
    website: "https://www.eatphocue.com/",
    zip: 30315,
    city: "Atlanta",
    street: "443 pho you lane",
    state: "GA",
    user_id: user.id,
    restaurant_review_id: restaurant_review.id,
  }
]

# === === === === === ===  Restaurant Create Method for Seed Data === === === === === === 
restaurant_seeds.each do |each_restaurant|
  user.restaurants.create(each_restaurant)
  p "creating: #{each_restaurant}"
end