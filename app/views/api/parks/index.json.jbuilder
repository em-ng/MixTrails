@parks.each do |park|
    json.parks do
        json.set! park.id do
            json.extract! park, :id, :name
            json.trails park.trails.each do |trail|
                json.extract! trail, :id, :park_id, :name
            end
        end
    end
end