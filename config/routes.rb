Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create]

    resources :trails, only: [:show]

    resources :parks, only: [:show] do
      resources :trails, only: [:index]
    end
    
  end

end