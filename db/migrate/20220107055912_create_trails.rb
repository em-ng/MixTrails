class CreateTrails < ActiveRecord::Migration[6.1]
  def change
    create_table :trails do |t|
      t.string :name
      t.text :description
      t.text :summary
      t.string :difficulty
      t.float :length
      t.integer :elevation
      t.string :route_type
      t.float :lat
      t.float :long
      t.integer :park_id

      t.timestamps
    end
    add_index :trails, :name
    add_index :trails, :park_id
  end
end
