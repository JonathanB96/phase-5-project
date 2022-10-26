
Rails.application.routes.draw do
  
  # get 'pages/preview'
  resources :recipes
  resources :categories, only: [:index]
  resources :cuisines, only: [:index]
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  post '/:id/:recipe_id', to: 'users#create_favorite'
  delete '/:id/:recipe_id', to: 'users#destroy_favorite'
  get 'pages/download', to: 'pages#download'
  
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end