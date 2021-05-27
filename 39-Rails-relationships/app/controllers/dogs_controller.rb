class DogsController < ApplicationController

  def index
    # byebug
    @dogs = Dog.all
  end

  def show
    @dog = Dog.find(params[:id])
  end

  def new
   @dog = Dog.new
   @owners = Owner.all
  end

  def create
    # byebug
    @dog = Dog.create(dog_params)
    redirect_to @dog
  end

  def edit #"/dogs/:id/edit"
    @dog = Dog.find(params[:id])
    @owners = Owner.all
  end
  
  def update
    # byebug
    @dog = Dog.find(params[:id])
    @dog.update(dog_params)
    redirect_to @dog
  end

  private

  def dog_params
    params.require(:dog).permit(:name, :age, :breed, :owner_id)
  end

end


