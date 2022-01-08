json.park do
    json.extract! @park, :id, :name, :description, :summary, :park_type, :acreage, :contact, :lat, :long
end

# shows all trails(trail index)
json.trails do
    json.array! @trails do |trail|
        json.set! trail.id do
            json.extract! trail, :name, :description, :difficulty, :length
            json.parkName trail.park.name 
        end
    end
end
