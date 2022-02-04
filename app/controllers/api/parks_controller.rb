class Api::ParksController < ApplicationController

    def index
        @parks = Park.all.includes(:trails)
        render :index
    end

    def show
        @park = Park.find_by(id: params[:id])
        @trails = @park.trails
        render :show
    end
end
