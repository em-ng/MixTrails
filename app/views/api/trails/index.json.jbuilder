json.array! @trails do |trail| 
    json.extract! trail, :id, :name, :description, :difficulty, :length, :park
    json.photoURL url_for(trail.photo)
    json.reviews trail.reviews.map do |review|
    end
end