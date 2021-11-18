class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :image, :color, :category, :back_image, :description, :number, :subclass, :size
end
