Rails.application.routes.draw do
  get 'posts/index'
  get 'stopwatch/show' => 'stopwatch#show'
  # root to: redirect('/')
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
end
