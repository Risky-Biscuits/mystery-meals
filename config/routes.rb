Rails.application.routes.draw do
  resources :restaurant_reviews
  resources :restaurants
  devise_for :users
  get "*path", to: "home#index", constraints: ->(request) { request.format.html? }
  root "home#index"
end
