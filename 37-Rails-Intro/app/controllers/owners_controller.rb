class OwnersController < ApplicationController

    def index
        @owners = Owner.all
        @name = "Vidhi"
        # byebug
    end

end
