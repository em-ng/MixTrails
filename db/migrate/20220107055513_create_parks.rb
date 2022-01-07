class CreateParks < ActiveRecord::Migration[6.1]
  def change
    create_table :parks do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.text :summary, null: false
      t.string :park_type, null: false
      t.integer :acreage, null: false
      t.string :contact, null: false
      t.float :lat, null: false
      t.float :long, null: false

      t.timestamps
    end
    add_index :parks, :name
  end
end
