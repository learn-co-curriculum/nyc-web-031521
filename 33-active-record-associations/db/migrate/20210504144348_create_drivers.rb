class CreateDrivers < ActiveRecord::Migration[6.1]
  def change
    create_table :drivers do |t|
      t.string :name
      t.integer :rating
      t.string :car_type
      t.string :car_model
    end
  end
end
