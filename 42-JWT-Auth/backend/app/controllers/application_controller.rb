class ApplicationController < ActionController::API
    before_action :logged_In?

    def encode_token(payload)
        JWT.encode(payload, "Flatiron", "HS256")
        # 3rd arg is optional if you want to use HS256 algo
        # payload is a hash/ an obj
    end

    def logged_In?
        # byebug

        headers = request.headers["Authorization"]
        token = headers.split(" ")[1]

        begin
            user_id = JWT.decode(token, "Flatiron", "HS256")[0]["user_id"]
            user = User.find(user_id)
        rescue 
            # user is not found because token is not provided
            user = nil
        end

        # if user
        # else
        #     render json: {error: "Please LogIn!"}
        # end

        unless user
            render json: {error: "Please LogIn!"}
        end

        # render json: {error: "Please LogIn!"} unless user

    end
end
