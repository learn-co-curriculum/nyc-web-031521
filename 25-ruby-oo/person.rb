require "pry"

# Person#buy_house
# Private method Person#increase_networth

class Person

  # attribute macros
  attr_reader :first_name, :number_of_people, :networth # gives us a getter/reader method
  attr_writer :age
  attr_accessor :last_name

  @@number_of_people = 0 # @@ => class variable
  @@all = [] # class variable, will hold all instances of a Person

  def initialize(first_name, last_name, age, networth, ssn)
    @first_name = first_name
    @last_name = last_name
    @age = age
    @networth = networth
    @SSN = ssn

    @@number_of_people += 1
    @@all << self
  end

  def self.number_of_people # class method because we define the method name with self.name_of_method
    @@number_of_people
  end

  def self.all
    @@all
  end

  def buy_house
    self.networth = (self.networth + 100) # explicit self
    # self.networth = (networth + 100) # implicit self
    "#{self.first_name} bought a house!"
  end

  def greeting
    # inside of an instance method, SELF is always going to be the instance/object that invoked that method
    "Hello, my name is #{self.first_name} #{self.last_name}"
  end

  private # any method after this keyword will be private

  def networth=(amount)
    # increase the networth by the amount passed in
    puts "Increasing networth!!!"
    @networth += amount
  end
end

p1 = Person.new("Raffy", "Rafferty", 10, 9999999, 12345678) # in Ruby, an object is an instance of a class
p2 = Person.new("Adam", "Schwartz", 10, 990990090099, 87654321)
p3 = Person.new("Peter", "Crawford", 10, 87659809, 9876543)
p4 = Person.new("Jon", "Brundage Jr.", 11, 9876543, 23456789)
p5 = Person.new("Erin", "Sellers", 12, 4567898765, 76543213)

p1.buy_house

binding.pry
