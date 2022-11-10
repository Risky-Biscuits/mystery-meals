class CreateRestaurants < ActiveRecord::Migration[7.0]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :food_type
      t.string :image
      t.string :price
      t.string :phone_number
      t.string :website
      t.integer :zip
      t.string :city
      t.string :street
      t.string :state
      t.integer :user_id
      t.integer :restaurant_id

      t.timestamps
    end
  end
end
