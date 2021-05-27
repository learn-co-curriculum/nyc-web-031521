# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_05_04_154324) do

  create_table "drivers", force: :cascade do |t|
    t.string "name"
    t.integer "rating"
    t.string "car_type"
    t.string "car_model"
  end

  create_table "passengers", force: :cascade do |t|
    t.string "name"
    t.integer "rating"
  end

  create_table "rides", force: :cascade do |t|
    t.decimal "price"
    t.string "pick_up"
    t.string "drop_off"
    t.integer "driver_id"
    t.integer "passenger_id"
  end

end
