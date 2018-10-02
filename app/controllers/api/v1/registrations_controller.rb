module Api    
  module V1
    class RegistrationsController < ApplicationController
      def new
        @user = User.new
        render json: @user
      end

      def index
        @users = User.all
        render json: @users
      end
      
      def show
        @user = User.find(params[:id])
      end

      def create
        @user = User.new(user_params)
        if @user.save
          render json: @user, status: :created, location: @user
        else
          render json: @user.errors
        end
      end

      private
      def user_params
        params.require(:user).permit(:email, :password)
      end
    end
  end
end
