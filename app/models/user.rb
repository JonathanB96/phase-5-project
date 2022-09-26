class User < ApplicationRecord
    validates :username, presence: true
    has_many :recipes
    has_many :categories, through: :recipes
    has_one :profile
    has_secure_password
end
