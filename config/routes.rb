Rails.application.routes.draw do
  resources :reviews
  resources :products
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "/home", to: "products#home_products"
  # get "/lifestyle", to: "products#lifestyle_products"
  # get "/clothing", to: "products#clothing_products"
end
