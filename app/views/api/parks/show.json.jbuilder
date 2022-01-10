# json.set! @park.id do
json.extract! @park, :id, :name, :description, :summary, :park_type, :acreage, :contact, :lat, :long, :trails

# json.array! @trails do |trail|
   
#     json.photoURL url_for(trail.photo)
# end


# shows all trails(trail index)
# json.photoURL do
#     json.array! @trails do |trail|
#         # json.set! trail.id do
#             json.extract! trail, :photo
#             # json.parkName trail.park.name 
#         # end
#     end
# # end
