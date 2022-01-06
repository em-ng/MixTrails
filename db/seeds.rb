# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
demo = User.create(firstname: 'Demo', lastname: 'User', email: 'demo@user.com', password: 'password')
user1 = User.create(firstname: 'Harry', lastname: 'Potter', email: 'harry@potter.com', password: 'hogwarts')
user2 = User.create(firstname: 'Ron', lastname: 'Weasley', email: 'ron@weasley.com', password: 'hogwarts')
user3 = User.create(firstname: 'Willow', lastname: 'Granger', email: 'willow@granger.com', password: 'hogwarts')