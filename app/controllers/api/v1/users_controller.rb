module Api
  module V1
    class UsersController < ApplicationController
      
      def show
        @user = User.find_by(id: params[:id])
        json_response(@user, :created)
      end

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
        params.require(:user).permit(:email, :password, :first_name, :surname)
      end

      def json_response(object, status = :ok)
        render json: object, status: status
      end
    end
  end
end
