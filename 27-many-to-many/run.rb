require "pry"
require_relative "models/ride"
require_relative "models/passenger"
require_relative "models/driver"

erin = Driver.new("Erin", 4)
danny = Driver.new("danny", 5)
adam = Driver.new("adam", 3)
jon = Driver.new("jon", 4)

geddy = Passenger.new("Geddy", 5)
sabella = Passenger.new("Isabella", 4)
rianna = Passenger.new("rianna", 5)
paul = Passenger.new("paul", 3)

r1 = Ride.new("here", "there", 400, erin, geddy)
r2 = Ride.new("NYC", "Denver", 9000, danny, geddy)
r3 = Ride.new("over there", "here", 10, adam, sabella)
r4 = Ride.new("NJ", "Kansas", 900, jon, paul)
r5 = Ride.new("Kansas", "California", 78900, jon, sabella)

binding.pry
