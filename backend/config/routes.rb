# frozen_string_literal: true

Rails.application.routes.draw do
  root 'pages#index'

  # route through /api/v1
  namespace :api do
    namespace :v1 do
      # use url friendly slug
      resources :airlines, param: :slug
      resources :reviews, only: %i[create destroy]
    end
  end

  # route undefined routes to index
  get '*path', to: 'pages#index', via: :all
end
