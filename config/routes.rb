Rails.application.routes.draw do
  resources :reviews
  resources :products
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "/home", to: "products#home_products"
  get "/clothing", to: "products#clothing_products"
  get "/lifestyle", to: "products#lifestyle_products"
  get "/allproducts", to: "products#index"
  get '/cart', to: "products#load_cart"
  post "/login", to: "sessions#create"
  post "/signup", to: "users#create"
  post "/products/add_to_cart/:id", to: 'products#add_to_cart'
  delete '/products/remove_from_cart/:id', to: 'products#remove_from_cart'
  delete '/products/clear_cart', to: 'products#complete_payment'
  patch "/quantity/:id", to: 'products#quantity'
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"
  # get "/lifestyle", to: "products#lifestyle_products"
  # get "/clothing", to: "products#clothing_products"
end
