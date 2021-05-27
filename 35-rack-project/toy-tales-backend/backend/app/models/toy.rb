class Toy < ActiveRecord::Base
    # has_many :PLURALWORD -> []
    has_many :leases
    has_many :cars, through: :leases


end