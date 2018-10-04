require 'rails_helper'
require 'user_spec_helper'

RSpec.describe 'users API', type: :request do
  before(:each) do
    clear_user_table
    create_users
  end


  describe 'Post /users' do
    context 'valid user' do
      let(:valid_attributes) {{user: {email: "test@test.com", password: "testing"}}}
      before { post '/api/v1/users', params: valid_attributes }
        it 'creates a user' do
          expect(json['email']).to eq "test@test.com"
        end
        it 'returns status code 201' do
          expect(response).to have_http_status(201)
        end
      end
    context 'invalid user' do
    let(:invalid_attributes) {{user: {email:"", password:""}}}
    before { post '/api/v1/users', params: invalid_attributes }
      it 'returns an error message' do
        expect(json['email'].join).to eq "can't be blank"
        expect(json['password'].join).to eq "can't be blank"
      end
      it 'returns an error status' do
        expect(response).to have_http_status(422)
      end
    end
  end
end

