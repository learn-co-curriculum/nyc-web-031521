Ride.destroy_all
Driver.destroy_all
Passenger.destroy_all

puts "Creating drivers!!"

20.times do
  Driver.create({ name: Faker::Name.name,
                  rating: rand(1...5),
                  car_type: Faker::Vehicle.manufacture,
                  car_model: Faker::Vehicle.make_and_model })
end

puts "Creating passengers!!"

20.times do
  Passenger.create(name: Faker::FunnyName.name, rating: rand(1...5))
end

puts "Creating rides!!"

60.times do
  Ride.create({ pick_up: Faker::Address.full_address,
                drop_off: Faker::Address.full_address,
                price: rand(1...2000),
                driver_id: Driver.all.sample.id,
                passenger_id: Passenger.all.sample.id }) # show alternative way
end
