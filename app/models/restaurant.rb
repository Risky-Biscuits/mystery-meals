class Restaurant < ApplicationRecord
  has_many :reviews
  has_many :users, through: :reviews
  validates :name, presence: true
  validates :food_type, presence: true
  validates :image, presence: true
  validates :price, presence: true
  validates :phone_number, presence: true
  validates :website, presence: true
  validates :zip, presence: true
  validates :city, presence: true
  validates :street, presence: true
  validates :state, presence: true
end




