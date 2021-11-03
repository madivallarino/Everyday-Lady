class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :description, :star_rating
  has_one :user
  has_one :product
end
