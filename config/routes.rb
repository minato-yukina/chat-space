Rails.application.routes.draw do
  root 'messages#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users, only: [:index, :edit, :update]
  resources :groups, only: [:index, :new, :create, :edit, :update] do
    resources :messages, only: [:index, :create]

    namespace :api do
      resources :messages, only: :index, defaults: { format: 'json' }
    end
  end
end