require 'rails_helper'


RSpec.describe Restaurant, type: :model do
  let(:user) { User.create email: 'test@example.com', first_name: "Ricky", last_name: "Biscuits", password: 'password', password_confirmation: 'password' }


RSpec.describe Restaurant, type: :model do
  it "should validate name" do
    restaurant = Restaurant.create
    expect(restaurant.errors[:name]).to_not be_empty
  end
end