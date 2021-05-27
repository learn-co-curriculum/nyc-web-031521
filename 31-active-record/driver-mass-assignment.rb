require "pry"

class Driver
  # attr_accessor :name, :rating
  @@all = []

  def initialize(args)
    # @name = args[:name]
    # @rating = args[:rating]

    args.each do |key, value|
      # create the attr_accessor for each key
      Driver.attr_accessor(key)
      # assign instance variables the appropriate values
      self.send("#{key}=", value)
      # name= "Raffy"
      # rating= 5
    end

    @@all << self
  end

  def self.all
    @@all
  end
end

d1 = Driver.new({name: "Raffy", rating: 5})
d2 = Driver.new({name: "Raffy", rating: 5, age: 5})

binding.pr
