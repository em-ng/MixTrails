class Api::ReviewsController < ApplicationController
    before_action :ensure_logged_in

    def create
        @review = Review.new(review_params)

        if @review.save
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def update
        @review = Review.find_by(id: params[:id])
        if current_user.id == @review.user_id && @review.update(review_params)
            render :show        
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def destroy
        @review = current_user.reviews.find_by(id: params[:id])
        if @review
            @review.destroy
            render json: @review.trail_id
        end
    end

    private

    def review_params
        params.require(:review).permit(:rating, :activity_date, :review_text, :user_id, :trail_id)
    end
end
