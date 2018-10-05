module Api
  module V1
    class SessionsController < ApplicationController
      acts_as_token_authentication_handler_for User, fallback_to_devise: false
      def create
        @user = User.where(email: params[:email]).first
        if @user&.valid_password?(params[:password])
          @user.save
          render json: session_info(@user), status: :created
        else
          head :unauthorized
        end
      end
    
      def destroy
        if current_user == nil
          head :unauthorized
        else
          current_user.reset_authentication_token!
          head :ok
        end
      end

      private
      
      def current_user
        authenticate_with_http_token do |token, options|
          User.find_by(authentication_token: token)
        end
      end
        
      def session_info(user)
        user.as_json(only: [:email, :authentication_token])
      end
    end
  end
end
