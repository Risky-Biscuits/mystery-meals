require 'rails_helper'

RSpec.describe Restaurant, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end


 #--- Validations ---  
 RSpec.describe Restaurant, type: :model do
  it "should validate name" do
    cat = Restaurant.create
    expect(restaurant.errors[:name]).to_not be_empty
  end
end