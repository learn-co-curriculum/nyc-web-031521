class OrderSerializer < ActiveModel::Serializer
  attributes :id
  has_many :burgers 
  # has_many :burger_orders
end
