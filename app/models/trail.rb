class Trail < ApplicationRecord

    validates :name, :description, :summary, :length, :elevation, :lat, :long, presence: true
    validates :difficulty, inclusion: %w(easy moderate hard)
    validates :route_type, inclusion: ["Loop", "Out & back", "Point to point"]

    belongs_to :park,
    primary_key: :id,
    foreign_key: :park_id,
    class_name: :Park

    has_one_attached :photo
end
