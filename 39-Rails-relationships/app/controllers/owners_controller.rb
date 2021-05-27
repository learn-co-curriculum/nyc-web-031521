class OwnersController < ApplicationController

    before_action :find_owner, only: [:show, :edit, :update, :destroy]

    def index
        @owners = Owner.all
        # @name = "Vidhi"
        # byebug
    end

    def show
        # byebug
        # @owner = Owner.find(params[:id])
    end

    def new
        @owner = Owner.new
    end

    def create
        @owner = Owner.create(owners_params)
        # redirect_to "/owners/#{@owner.id}"
        redirect_to @owner
        # redirect_to owner_path(@owner)

    end

    def edit
        # byebug
        # @owner = Owner.find(params[:id])
    end

    def update
        # byebug
        # @owner = Owner.find(params[:id])
        @owner.update(owners_params)
        redirect_to "/owners/#{@owner.id}"
    end

    def destroy
        # byebug
        # @owner = Owner.find(params[:id])
        @owner.destroy
        # redirect_to "/owners"
        redirect_to owners_path
    end

  
    private

    def find_owner
        @owner = Owner.find(params[:id])
    end

    def owners_params
        params.require(:owner).permit(:name, :age)
    end

end
