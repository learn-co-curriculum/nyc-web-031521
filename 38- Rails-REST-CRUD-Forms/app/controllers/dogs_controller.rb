class DogsController < ApplicationController

  def index
    # byebug
    @dogs = Dog.all
  end

end


