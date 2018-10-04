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
        if @post.save
          render 'new'
        else
          render 'fail'
        end
      end

      private
      def post_params
        params.require(:post).permit(:message).merge(user_id: 2)
      end
    end
  end
end
