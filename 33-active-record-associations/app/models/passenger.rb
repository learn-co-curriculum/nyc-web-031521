class Passenger < ActiveRecord::Base
  has_many :rides
  has_many :drivers, through: :rides

  #   def drivers
  #     self.rides.map { |ride_instance| ride_instance.driver }
  #   end

  def most_expensive_ride
    self.rides.order("price DESC").first
  end
end
