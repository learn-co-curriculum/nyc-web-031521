class UsersController < ApplicationController

    def show
        @user = User.find(params[:id])
        render json: @user
    end

    def checkout
        @user = User.find(params[:id])
        @order = Order.create(user: @user)
        params[:burger_ids].each do |burg_id|
            BurgerOrder.create(order: @order, burger_id: burg_id)
        end
        render json: @order
    end

end
