class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :steps, :image_url
end
