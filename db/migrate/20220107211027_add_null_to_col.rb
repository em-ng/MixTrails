class AddNullToCol < ActiveRecord::Migration[6.1]
  def change
    change_column_null(:trails, :name, false)
    change_column_null(:trails, :description, false)
    change_column_null(:trails, :summary, false)
    change_column_null(:trails, :difficulty, false)
    change_column_null(:trails, :length, false)
    change_column_null(:trails, :elevation, false)
    change_column_null(:trails, :route_type, false)
    change_column_null(:trails, :lat, false)
    change_column_null(:trails, :long, false)
    change_column_null(:trails, :park_id, false)
  end
end
