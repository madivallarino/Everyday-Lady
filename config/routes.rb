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
  post '/reviews', to: "reviews#create"
  post "/products/add_to_cart/:id", to: 'products#add_to_cart'
  delete '/products/remove_from_cart/:id', to: 'products#remove_from_cart'
  patch '/users/cart:id', to: 'users#update'
  delete '/empty_cart', to: 'sessions#delete_cart'
  patch "/quantity/:id", to: 'products#quantity'
  get "/me", to: "users#show"
  get "/me/orders", to: "users#orders"
  delete "/logout", to: "sessions#destroy"
  # get "/lifestyle", to: "products#lifestyle_products"
  # get "/clothing", to: "products#clothing_products"
end
