json.extract! @trail, :id, :name, :description, :summary, :difficulty, :length, :elevation, :route_type, :lat, :long, :park_id, :park
# json.parkName @trail.park.name
json.photoURL url_for(@trail.photo)

# json.array! @trail.reviews do |review|
#     json.extract! review, :id, :rating, :review_text, :activity_date, :activity_date, :trail_id, :user_id, :reviewer
# end

json.reviews @trail.reviews.map{ |review| review.id}



json.nearbyTrails do
    json.array! @trails do |trail|
            json.extract! trail, :id, :name, :difficulty, :length, :park
            json.photoURL url_for(trail.photo)
    end
end
