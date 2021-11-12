class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :password_digest, :items, :orders
end
