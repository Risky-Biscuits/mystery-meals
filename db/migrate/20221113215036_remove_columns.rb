class RemoveColumns < ActiveRecord::Migration[7.0]
  def change
    remove_column :restaurants, :restaurant_review_id
    remove_column :restaurants, :user_id
  end
end
