class Api::TrailsController < ApplicationController
    def index
        @trails = Trail
                    .includes(photo_attachment: :blob)
                    .where(park_id: params[:park_id])
        render :index   
    end

    def show
        @trail = Trail.find_by(id: params[:id])
        @trails = Trail
                    .where(park_id: @trail.park_id)
                    .where.not(id: @trail.id)
                    
        render :show
    end

end
