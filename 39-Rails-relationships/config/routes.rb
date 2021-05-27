Rails.application.routes.draw do
  # get 'dogs/index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html



  # http_verb  url or path, where?
#   get "/owners", to: 'owners#index'

#  # create an owner
#  get "/owners/new", to: "owners#new"
#  post "/owners", to: "owners#create"

#  # show => profile page for an owner
#  get "/owners/:id", to: "owners#show", as: "owner" # as to get rid of edit form error

# #edit an owner
#   get "/owners/:id/edit", to: "owners#edit"
#   patch "/owners/:id", to: "owners#update"

# #delete an owner
#   delete "/owners/:id", to: "owners#destroy"

  resources :owners

  # get "/dogs", to: "dogs#index"
  resources :dogs, only: [:index, :new, :create, :show, :edit, :update]

  resources :patients, only: [:show, :new, :create]
end
