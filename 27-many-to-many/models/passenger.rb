# Passenger -< Ride

# Passenger#rides - tells us a passenger has many rides

class Passenger
  def initialize(name, rating)
    @name = name
    @rating = rating
  end

  # ⭐️ a passenger has many rides
  def rides
    Ride.all.select { |ride_instance| ride_instance.passenger == self }
  end

  # ⭐️ Passenger has many drivers (through the rides)
  def drivers
    # get all of the passenger's drivers
    self.rides.map do |ride_instance|
      ride_instance.driver
    end
  end
end # Passenger class
