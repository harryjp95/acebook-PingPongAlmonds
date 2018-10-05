class ApplicationController < ActionController::API
  # acts_as_token_authentication_handler_for User
  # before_action :authenticate_user!
  include ActionController::HttpAuthentication::Token::ControllerMethods
end
