
Rails.application.routes.draw do

  resources :recipes
  resources :categories, only: [:index]
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  post '/add_favorite', to: 'users#create_favorite'
  delete '/delete_favorite', to: 'users#destroy_favorite'
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end