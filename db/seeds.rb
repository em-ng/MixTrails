# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require "open-uri"

User.destroy_all
demo = User.create(firstname: 'Demo', lastname: 'User', email: 'demo@user.com', password: 'password')
user1 = User.create(firstname: 'Harry', lastname: 'Potter', email: 'harry@potter.com', password: 'hogwarts')
user2 = User.create(firstname: 'Ron', lastname: 'Weasley', email: 'ron@weasley.com', password: 'hogwarts')
user3 = User.create(firstname: 'Willow', lastname: 'Granger', email: 'willow@granger.com', password: 'hogwarts')

Park.destroy_all
park1 = Park.create(name: "Franconia Notch State Park",
                    summary: "Ready for your next hike or bike ride? Looking for a more strenuous hike? We've got you covered, with trails ranging from 32 to 7,080 feet in elevation gain. Whatever you have planned for the day, you can find the perfect trail for your next trip to Franconia Notch State Park.",
                    description: "Franconia Notch State Park is located within White Mountain National Forest. On top of the forest, the Franconia Notch mountain pass, Flume Gorge and Echo Lake are also located within the park boundaries. Its amazing views and lake make it a great place to hike, swim, fly fish, bike, camp, or climb. There is also an aerial tramway that you can take at Cannon Mountain. The landscape makes it a good ski area in the winter.",
                    park_type: "State", acreage: 6693, contact: "603-823-8800",
                    lat: 44.1495093, long: -71.6867501)
park2 = Park.create(name: "Acadia National Park",
                    summary: "Ready for your next hike or bike ride? Explore one of 59 easy hiking trails in Acadia National Park that are great for the whole family. Looking for a more strenuous hike? We've got you covered, with trails ranging from 6 to 3,490 feet in elevation gain. Whatever you have planned for the day, you can find the perfect trail for your next trip to Acadia National Park.",
                    description: "Acadia National Park attracts more than two million visitors each year. With many different facilities and attractions in the park, there is something to interest everyone. Hiking and mountain biking are among the most popular activities in Acadia National Park. There are freshwater, estuary, forest, and intertidal habitats and 158 miles of hiking trails.",
                    park_type: "National", acreage: 49076, contact: "207-288-3338",
                    lat: 44.338974, long: -68.273430)

Trail.destroy_all
trail1 = Trail.create(name: "Mount Lafayette and Franconia Ridge Trail",
                      description: "This extremely popular hike in the White Mountains of New Hampshire is one of the best day hikes in the area for a variety of reasons. Beginning near the Lafayette Campground in Franconia Notch State Park, this great hike offers some of the best views in New England! As a bonus, you will ascend three peaks including the highest mountain outside the Presidential Range - Mount Lafayette",
                      summary: "Mount Lafayette and Franconia Ridge Trail Loop is a 9.3 mile heavily trafficked loop trail located near Lincoln, New Hampshire that features a waterfall and is only recommended for very experienced adventurers. The trail is primarily used for hiking and snowshoeing and is best used from April until October. Dogs are also able to use this trail.",
                      difficulty: "hard", length: 9.3, elevation: 3809, route_type: "Loop",
                      lat: 44.14216, long: -71.6812, park_id: park1.id)
trail1_photo = URI.open("https://mixtrails-seeds.s3.amazonaws.com/trail1.jpg")
trail1.photo.attach(io: trail1_photo, filename: "trail1.jpg")

trail2 = Trail.create(name: "Artist Bluff Trail",
                      description: "This family-friendly, partially-paved trail goes by multiple cascading waterfalls and deep pools that are popular for wading and swimming.",
                      summary: "Artist Bluff Trail is a 1.5 mile heavily trafficked loop trail located near Franconia, New Hampshire that features a lake and is rated as moderate. The trail is primarily used for hiking, nature trips, and bird watching and is best used from April until October. Dogs are also able to use this trail but must be kept on leash.",
                      difficulty: "moderate", length: 1.5, elevation: 436, route_type: "Loop",
                      lat: 44.17866, long: -71.70156, park_id: park1.id)
trail2_photo = URI.open("https://mixtrails-seeds.s3.amazonaws.com/trail2.jpg")
trail2.photo.attach(io: trail2_photo, filename: "trail2.jpg")

trail3 = Trail.create(name: "Flume Gorge Trail",
                      description: "The Flume is a natural gorge extending 800 feet at the base of Mount Liberty. The walls of Conway granite rise to a height of 70 to 90 feet and are 12 to 20 feet apart. The Flume Trail is a 2-mile loop starting at the check-in booths located in front of the Flume Building. The Short Trail/Rim Path is closed and the only option is to complete the full 2 mile loop. The entire loop takes approximately 1.5 hours and finishes at the Flume Building. The walk includes uphill walking and lots of stairs. The boardwalk allows you to look closely at the growth of flowers, ferns and mosses found here.",
                      summary: "The Flume Gorge Trail is a 2.2 mile heavily trafficked loop trail located near Lincoln, New Hampshire that features a waterfall and is good for all skill levels. The trail is primarily used for hiking, walking, nature trips, and snowshoeing and is best used from May until October.",
                      difficulty: "easy", length: 2.2, elevation: 488, route_type: "Loop",
                      lat: 44.0971, long: -71.67993, park_id: park1.id)
trail3_photo = URI.open("https://mixtrails-seeds.s3.amazonaws.com/trail3.jpg")
trail3.photo.attach(io: trail3_photo, filename: "trail3.jpg")

trail4 = Trail.create(name: "Little Haystack via Falling Waters Trail",
                      description: "A challenging hike in any season, but particularly so in winter. Haystack is the third highest peak in New York State. From Little Haystack you can begin to see Haystack, but before the final gentle ascent to Haystack, there is a serious step down to the Haystack ridge trail. This step is about 20 feet and very exposed, especially in winter, as the terrain drops away quickly into the valley to the east. In winter this area is very icy and requires some competence with an ice axe and crampons.",
                      summary: "Little Haystack via Falling Waters Trail is a 5.6 mile heavily trafficked out and back trail located near Lincoln, New Hampshire that features a waterfall and is rated as difficult. The trail is primarily used for hiking and snowshoeing and is accessible year-round. Dogs are also able to use this trail.",
                      difficulty: "hard", length: 5.6, elevation: 3034, route_type: "Out & back",
                      lat: 44.14221, long: -71.68146, park_id: park1.id)
trail4_photo = URI.open("https://mixtrails-seeds.s3.amazonaws.com/trail4.jpg")
trail4.photo.attach(io: trail4_photo, filename: "trail4.jpg")
                      
                      
trail5 = Trail.create(name: "Beehive Loop Trail",
                      description: "The Beehive Trail Loop is a must-do hike for all visitors to Acadia National Park. This popular loop offers incredible views, with some challenging rung and ladder sections. Although the loop could technically be done in either direction, the counterclockwise way is highly recommended. Going counterclockwise, you go up the rungs and ladders, which is much easier than going down them.",
                      summary: "The Beehive Loop Trail is a 1.5 mile heavily trafficked loop trail located near Bar Harbor, Maine that features a lake and is rated as difficult. The trail is primarily used for hiking and is best used from May until October.",
                      difficulty: "hard", length: 1.5, elevation: 508, route_type: "Loop",
                      lat: 44.33039, long: -68.18449, park_id: park2.id)
trail5_photo = URI.open("https://mixtrails-seeds.s3.amazonaws.com/trail5.jpg")
trail5.photo.attach(io: trail5_photo, filename: "trail5.jpg")

trail6 = Trail.create(name: "Cadillac South Ridge Trail",
                      description: "The Cadillac South Ridge Trail is a gradual climb that does not meet Cadillac Summit Road until the very end. The trail briefly descends to a small pond called The Featherbed, where there is a wooden bench for taking a break and enjoying the pond. On the return, descend back down the Cadillac South Ridge Trail.",
                      summary: "Cadillac South Ridge Trail is a 6.7 mile heavily trafficked out and back trail located near Mount Desert, Maine that features a waterfall and is rated as moderate. The trail is primarily used for hiking and running and is best used from May until October. Dogs are also able to use this trail but must be kept on leash.",
                      difficulty: "moderate", length: 6.7, elevation: 1548, route_type: "Out & back",
                      lat: 44.31297, long: -68.21501, park_id: park2.id)
trail6_photo = URI.open("https://mixtrails-seeds.s3.amazonaws.com/trail6.jpg")
trail6.photo.attach(io: trail6_photo, filename: "trail6.jpg")

trail7 = Trail.create(name: "Gorham Mountain Loop",
                      description: "The Gorham Mountain Loop is a wonderful hike that will take users over mountain ledges, along the shore of the Atlantic, and the iconic Sand Beach. Even in winter, this is an absolutely gorgeous hike, with some of the prettiest views to be seen. From the Gorham Mountain Trailhead users will go up and over the ledges of Gorham Mountain while taking in ocean views.",
                      summary: "Gorham Mountain Loop is a 3 mile heavily trafficked loop trail located near Bar Harbor, Maine that features a lake and is rated as moderate. The trail is primarily used for hiking. Dogs are also able to use this trail but must be kept on leash.",
                      difficulty: "moderate", length: 3.0, elevation: 583, route_type: "Loop",
                      lat: 44.31658, long: -68.19169, park_id: park2.id)
trail7_photo = URI.open("https://mixtrails-seeds.s3.amazonaws.com/trail7.jpg")
trail7.photo.attach(io: trail7_photo, filename: "trail7.jpg")

trail8 = Trail.create(name: "Ocean Path Trail",
                      description: "The easy 2.2 mile mostly flat one-way Ocean Path trail parallels the loop road all the way to Otter Point.  The path offers scenic views and numerous access points to outcroppings above the rocky shore, including major attractions like Thunder Hole and Otter Cliff. This is definitely a hike for the books!",
                      summary: "Ocean Path Trail is a 4.5 mile heavily trafficked out and back trail located near Bar Harbor, Maine that features beautiful wild flowers and is good for all skill levels. The trail is primarily used for walking, running, and bird watching and is accessible year-round. Dogs are also able to use this trail but must be kept on leash.",
                      difficulty: "easy", length: 4.5, elevation: 374, route_type: "Out & back",
                      lat: 44.32985, long: -68.18432, park_id: park2.id)
trail8_photo = URI.open("https://mixtrails-seeds.s3.amazonaws.com/trail8.jpg")
trail8.photo.attach(io: trail8_photo, filename: "trail8.jpg")

Review.destroy_all
review1 = Review.create(rating: 5, review_text: "Difficult, but worth every second", activity_date: "2021-10-05", user_id: user2.id, trail_id: trail1.id)
review2 = Review.create(rating: 3, review_text: "Tough hike, not for the weak minded", activity_date: "2021-08-17", user_id: user1.id, trail_id: trail1.id)
review3 = Review.create(rating: 5, review_text: "Great hike, recommend doing this hike counter clockwise", activity_date: "2021-06-12", user_id: user3.id, trail_id: trail1.id)

review4 = Review.create(rating: 4, review_text: "Easy hike, very dog friendly", activity_date: "2022-01-12", user_id: user3.id, trail_id: trail2.id)
review5 = Review.create(rating: 5, review_text: "Beautiful fall foliage", activity_date: "2021-11-12", user_id: user1.id, trail_id: trail2.id)
review6 = Review.create(rating: 5, review_text: "Breathtaking views, my whole family enjoyed the hike a lot.", activity_date: "2021-07-04", user_id: user2.id, trail_id: trail2.id)

review7 = Review.create(rating: 4, review_text: "Easy hike, very dog friendly", activity_date: "2022-01-12", user_id: user3.id, trail_id: trail3.id)
review8 = Review.create(rating: 5, review_text: "Beautiful fall foliage", activity_date: "2021-11-12", user_id: user1.id, trail_id: trail3.id)
review9 = Review.create(rating: 5, review_text: "Breathtaking views, my whole family enjoyed the hike a lot.", activity_date: "2021-07-04", user_id: user2.id, trail_id: trail3.id)

review10 = Review.create(rating: 4, review_text: "Easy hike, suitable for all ages", activity_date: "2022-01-11", user_id: user3.id, trail_id: trail4.id)
review11 = Review.create(rating: 2, review_text: "Roads were icy and hard to walk on. Slip and fell a few times", activity_date: "2021-03-12", user_id: user1.id, trail_id: trail4.id)
review12 = Review.create(rating: 5, review_text: "Beautiful waterfalls, definitely recommend coming during warmer months", activity_date: "2021-10-04", user_id: user2.id, trail_id: trail4.id)

review13 = Review.create(rating: 4, review_text: "Wish I did this hike during the summer, too chilly in the winter.", activity_date: "2021-12-03", user_id: user3.id, trail_id: trail5.id)
review14 = Review.create(rating: 5, review_text: "10/10 recommend this hike, good vibes, good company.", activity_date: "2021-10-12", user_id: user1.id, trail_id: trail5.id)
review15 = Review.create(rating: 5, review_text: "Love this hike, been wanting to come here since forever. Will definitely try to make a organize a camping trip just to come back.", activity_date: "2021-06-24", user_id: user2.id, trail_id: trail5.id)

review16 = Review.create(rating: 2, review_text: "Very rocky, not dog friendly at all", activity_date: "2022-02-05", user_id: user2.id, trail_id: trail6.id)
review17 = Review.create(rating: 3, review_text: "Make sure to wear long pants, lots of sharp rocks and prickly bushes along the way", activity_date: "2021-08-17", user_id: user1.id, trail_id: trail6.id)
review18 = Review.create(rating: 5, review_text: "Nice scenery, the weather was perfect for the hike", activity_date: "2021-07-12", user_id: user3.id, trail_id: trail6.id)

review19 = Review.create(rating: 5, review_text: "Nice scramble to the top", activity_date: "2021-05-23", user_id: user2.id, trail_id: trail7.id)
review20 = Review.create(rating: 4, review_text: "Very enjoyable hike, a bit steep but lots of fun nonetheless", activity_date: "2021-04-17", user_id: user1.id, trail_id: trail7.id)
review21 = Review.create(rating: 3, review_text: "My dog almost fell off the cliff, make sure to buy some paw wax!!", activity_date: "2021-03-12", user_id: user3.id, trail_id: trail7.id)

review22 = Review.create(rating: 5, review_text: "Nice breeze from the ocean as you're walking along the trail", activity_date: "2021-11-25", user_id: user2.id, trail_id: trail8.id)
review23 = Review.create(rating: 4, review_text: "Beautiful scenery, probably better to come during warmer months", activity_date: "2021-11-01", user_id: user1.id, trail_id: trail8.id)
review24 = Review.create(rating: 5, review_text: "Soothing hike as you hear the waves crash against the shore", activity_date: "2021-09-13", user_id: user3.id, trail_id: trail8.id)