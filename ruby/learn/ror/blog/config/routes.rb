Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  root 'posts#index', as: 'home'

  get 'about' => 'pages#about', as: 'about'
  get 'contacts' => 'pages#contacts', as: 'contacts'

  resources :posts

end
