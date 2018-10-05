require 'rails_helper'

RSpec.describe 'posts API', type: :request do

  before(:each) do
    clear_user_table
    clear_post_table
    create_users
    create_posts
  end

  describe 'Get /posts' do
    context 'there are posts' do 
      before { get '/api/v1/posts' }
        it 'returns posts' do
          expect(json.count).to eq 2
        end
    end
  end

  describe 'Post /posts' do
    context 'valid token' do
      it 'creates a post' do
        post '/api/v1/sessions', params: {email: "test1@test.com", password: "password"}
        headers = { "AUTHORIZATION": "Token #{json['authentication_token']}"}
        post '/api/v1/posts', params: {post: {message: "here is a test message"}}, headers: headers
          expect(json['message']).to eq "here is a test message"
          expect(response).to have_http_status(201)
      end
    end
    context 'invalid token' do
      let(:invalid_token) {{ "AUTHORIZATION": "Token not_a_real_token" }}
      before { post '/api/v1/posts', params: {post: {message: "here is a test message"}}, headers: invalid_token }
      it 'returns an error' do
        expect(response).to have_http_status(401)
      end
    end
        
  end
end


