class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  
  # Using the AR macros tells the UserSerializer to call on the OrderSerializer
  has_many :orders
end
