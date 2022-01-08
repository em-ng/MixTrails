class Api::TrailsController < ApplicationController

    def show
        @trail = Trail.find_by(id: params[:id])
        @trails = Trail
                    .where(park_id: @trail.park_id)
                    .where.not(id: @trail.id)
                    
        render :show
    end

end
