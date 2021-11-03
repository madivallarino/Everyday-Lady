class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :image, :color
end
