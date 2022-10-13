class Category < ApplicationRecord
    has_many :recipes 
    has_many :users, through: :recipes
    has_many :cuisines, through: :recipes
end
