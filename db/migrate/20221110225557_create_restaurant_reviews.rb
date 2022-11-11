class CreateRestaurantReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :restaurant_reviews do |t|
      t.text :review
      t.integer :rating

      t.timestamps
    end
  end
end
