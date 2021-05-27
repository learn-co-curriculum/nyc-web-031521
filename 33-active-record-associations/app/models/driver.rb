class Driver < ActiveRecord::Base
  has_many :rides # always plural, returns an array of ride instances
  has_many :passengers, through: :rides
  #   def rides
  #     Ride.all.select do |ride_instance|
  #       ride_instance.driver_id == self.id
  #     end
  #   end

  # def passengers
  #   self.rides.map { |ride_instance| ride_instance.passenger }
  # end
end
