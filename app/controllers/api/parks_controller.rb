class Api::ParksController < ApplicationController

    def show
        @park = Park.find_by(id: params[:id])
    end
end
