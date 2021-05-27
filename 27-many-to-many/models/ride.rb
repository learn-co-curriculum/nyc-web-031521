# Ride >- Driver ✅
# Ride >- Passenger ✅

# Driver -< Ride >- Passenger

class Ride
  attr_reader :driver, :passenger
  @@all = []

  def initialize(pick_up, destination, cost, driver, passenger)
    @pick_up = pick_up
    @destination = destination
    @cost = cost

    # ⭐️ a ride belongs to a driver
    @driver = driver
    # ⭐️ a ride belongs to a passenger
    @passenger = passenger

    # ⭐️ Single Source of Truth for Rides
    @@all << self
  end

  def self.all
    @@all
  end
end # Ride class
