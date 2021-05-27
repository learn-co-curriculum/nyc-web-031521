# Driver -< Ride >- Passenger

# Driver -< Ride

# Driver#rides - tells us a driver has many rides

class Driver
  def initialize(name, rating)
    @name = name
    @rating = rating
  end

  # ⭐️ a driver has many rides
  def rides
    # get all of the rides
    # filter them to get only the rides of
    #the driver who called this method (self)
    Ride.all.select do |ride_instance|
      ride_instance.driver == self
    end
  end

  # ⭐️ a driver has many passengers (through rides)
  def passengers
    self.rides.map do |ride_instance|
      ride_instance.passenger
    end
  end
end # Driver class
