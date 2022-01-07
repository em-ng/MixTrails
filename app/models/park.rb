class Park < ApplicationRecord
    
    validates :name, :description, :summary, :acreage, :contact, :lat, :long, presence: true
    validates :park_type, inclusion: %w(National State Regional Local)

    has_many :trails,
    primary_key: :id,
    foreign_key: :park_id,
    class_name: :Trail

end
