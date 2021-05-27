class CreateRides < ActiveRecord::Migration[6.1]
  def change
    create_table :rides do |t|
      t.decimal :price
      t.string :pick_up
      t.string :drop_off
      t.integer :driver_id # foreigh key; name should be name_of_column_id
    end
  end
end
