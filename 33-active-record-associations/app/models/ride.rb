class Ride < ActiveRecord::Base
  belongs_to :driver # singular, returns one instance of a driver
  belongs_to :passenger
  #   def driver
  #     Driver.find(self.driver_id)
  #   end
end
