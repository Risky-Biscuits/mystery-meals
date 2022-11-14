class AddColumns < ActiveRecord::Migration[7.0]
  def change
    add_column :restaurant_reviews, :restaurant_id, :integer
    add_column :restaurant_reviews, :user_id, :integer
  end
end
