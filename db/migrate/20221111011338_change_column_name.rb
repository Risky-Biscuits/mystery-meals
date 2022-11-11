class ChangeColumnName < ActiveRecord::Migration[7.0]
  def change
    rename_column :restaurants, :restaurant_id, :restaurant_review_id
  end
end
