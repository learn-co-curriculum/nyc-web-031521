require "pry"
require_relative "models/user"
require_relative "models/tweet"

adam = User.new("doctor jellybeans", 'hey guys, I\'m a real doctor. Jerks.')
jon = User.new("2004snob", "Butterfly effect rules.")

t1 = Tweet.new("I love coconut water with pineapple!!!", jon)
t1 = Tweet.new("Mike's Hard Lemondade is good", adam)
t1 = Tweet.new("I don't like MHL", jon)
t1 = Tweet.new("I don't like coconut water", adam)
t1 = Tweet.new("Ruby is cool", jon)
binding.pry
