class Review < ApplicationRecord
    validates :rating, :activity_date, :review_text, presence: true

    belongs_to :reviewer,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

    belongs_to :trail,
    primary_key: :id,
    foreign_key: :trail_id,
    class_name: :Trail

end
