class Recipe < ApplicationRecord
    validates :name, :steps, :image_url, presence: true
    belongs_to :user
    belongs_to :category
    belongs_to :favorite
end
