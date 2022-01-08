json.currentTrail do
    json.extract! @trail, :id, :name, :description, :summary, :difficulty, :length, :elevation, :route_type, :lat, :long, :park_id
    json.parkName @trail.park.name 
end

json.nearbyTrails do
    json.array! @trails do |trail|
            json.extract! trail, :id, :name, :difficulty, :length, :park_id
    end
end
