json.array! @trails do |trail| 
    json.extract! trail, :id, :name, :description, :difficulty, :length, :park
    json.photoURL url_for(trail.photo)
    json.reviews trail.reviews.map do |review|
        json.extract! review, :id, :rating, :review_text, :activity_date, :activity_date, :trail_id, :user_id, :reviewer
    end
end