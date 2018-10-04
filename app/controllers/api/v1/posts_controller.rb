module Api    
  module V1
    class PostsController < ApplicationController
      
      def index
        @posts = Post.all
        render json: @posts
      end
      
      def new
        @post = Post.new
      end

      def create
        @post = Post.create(post_params)
        
        p 'hello world'
        p current_user.id
        if @post.save
          render 'new'
        else
          render 'fail'
        end
      end

      private
      def post_params
        params.require(:post).permit(:message).merge(user_id: current_user.id)
      end

      def current_user
        authenticate_with_http_token do |token, options|
          User.find_by(authentication_token: token)
        end
      end  
    end
  end
end
