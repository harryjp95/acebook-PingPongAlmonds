module Api    
  module V1
    class PostsController < ApplicationController
      
      def index
        @posts = Post.all
        render json: @posts
      end

      def create
        if current_user == nil
          head :unauthorized
        else
          @post = Post.create(post_params)
          if @post.save
            render json: post_info(@post), status: :created
          else
            render 'fail'
          end
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

      def post_info(post)
        post.as_json(only: [:message, :authentication_token])
      end 
    end
  end
end
