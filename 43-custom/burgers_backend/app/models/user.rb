class User < ApplicationRecord
    has_secure_password
        # password -> password_digest
        # authenticate()

    has_many :orders

    # has_many :burger_orders, through: :orders
    # has_many :burgers, through: :burger_orders
end
