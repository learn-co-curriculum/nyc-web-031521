# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Owner.destroy_all
Dog.destroy_all

o1 = Owner.create(name: "Josh")

Dog.create(name: "Baloo", age: 6 , breed: "mutt" ,owner_id: o1.id)
Dog.create(name: "Michael", age: 8 , breed:"pug"  ,owner_id: o1.id)
