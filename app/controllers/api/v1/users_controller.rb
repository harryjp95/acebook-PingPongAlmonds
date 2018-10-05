module Api
  module V1
    class UsersController < ApplicationController
      
      def create
        @user = User.new(user_params)
        if @user.save
          json_response(@user, :created) 
        else
          json_response(@user.errors, :unprocessable_entity)
        end
      end

      private
      def user_params
        params.require(:user).permit(:email, :password)
      end

      def json_response(object, status = :ok)
        render json: object, status: status
      end
    end
  end
end
