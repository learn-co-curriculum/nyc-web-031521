class DogsController < ApplicationController

    def index
        # @dogs = Dog.all
        @dogs = Dog.sort_by_employees_count
    end

    def show #"/dogs/:id"
        @dog = Dog.find(params[:id])
    end
end
