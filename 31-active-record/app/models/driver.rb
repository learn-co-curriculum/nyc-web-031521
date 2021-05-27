class Driver < ActiveRecord::Base
  def get_highest_rating
    Driver.maximum("rating")
  end

  def self.get_all_drivers
    Driver.all
  end
end

# GET /drivers
# GET /drivers/average_rating

# CREATE

# Driver#new(hash) -> only create a Ruby instance, doesn't save it to the DB
# Driver#save -> saves the instance to the DB, assigns it an ID
# Driver.create -> new + save

# READ

# Driver.all -> returns array of all driver instances
# Driver.first/second/..../last -> returns first/second/.../last instance
# Driver.find(id) -> returns instance with that ID
# Driver.find_by(hash) -> returns instance/row that meets the specified attributes
# Driver.where(condition) -> returns instances/rows that meet specified condition
# Driver.minimum("column_name") -> returns the minimum value in the table for that column
# Driver.maximum("column_name") -> returns the maximum value in the table for that column
# Driver.average("column_name") -> return the average value of a column
# Driver.order("column_name DESC") -> returns an array of the instances in descending order by the column_name
# Driver.order("column_name ASC") -> returns an array of the instances in ascending order by the column_name

# UPDATE

# Driver#attribute_name = "new value" -> update the instance in Ruby's memory (NOT IN THE DB)
# Driver#save -> actually going to update the instance in the DB / save the updates in the DB
# Driver#update(hash) -> updates the instance's/row's attributes that we specify
# Driver.update(hash) -> updates all the instances'/rows' attribute/s that we specify

# DELETE

# Driver#destroy -> destroy one row from table in DB
# Driver.destroy_all -> deletes all rows from the table in DB
