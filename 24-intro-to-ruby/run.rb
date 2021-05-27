require "pry"

RAFFY = "cool" # this is a constant, but we can techincally re-assign this variable (DON'T DO IT)

is_cool = false

this_is_a_integer = 5
this_is_float = 5.5

sym = :raffy

my_hash = { name: "raffy" } # {:name => "raffy"}
# another_hash[:name]
another_hash = { "spring" => "warm" } # for string keys, must use rocket hash
# another_hash['spring']

no_val_var = nil

def say_cheese(cheese_name)
  "#{cheese_name} !!!!!"
end

# def say_cheese cheese_name
#   "#{cheese_name} !!!!!"
# end

def say_hello
  "Hello, World!"
  "Hello is a friendly word"
end

binding.pry
