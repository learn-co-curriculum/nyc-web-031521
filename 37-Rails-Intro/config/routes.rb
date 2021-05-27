Rails.application.routes.draw do
  # get 'dogs/index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # http_verb  url or path, where?
  get "/owners", to: 'owners#index'

  get "/dogs", to: "dogs#index"
end
