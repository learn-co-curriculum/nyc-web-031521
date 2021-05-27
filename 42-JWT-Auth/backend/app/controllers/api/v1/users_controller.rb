class Api::V1::UsersController < ApplicationController
    skip_before_action :logged_In?, only: [:create, :login]

    def create
        # byebug
        user = User.new(user_params)

        if user.valid?
            user.save
            render json: user
        else
            render json: {error: "Not able to create a user"}
        end
    end

    def login
        # byebug
        user = User.find_by(username: params[:username])
        
        if user && user.authenticate(params[:password])
            render json: {username: user.username, token: encode_token({user_id: user.id})}
        else
            render json: {message: "wrong username or password"}
        end
    end


    private
    def user_params
        params.permit(:username, :password)
    end
end
