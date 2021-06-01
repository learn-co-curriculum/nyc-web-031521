Rails.application.routes.draw do
  # VERB "/URL", to: "controller#action"
  post "/users/:id/checkout", to: "users#checkout"
  
  resources :burger_orders
  resources :orders
  resources :users
  resources :burgers
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
