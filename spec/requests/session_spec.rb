require 'rails_helper'

RSpec.describe 'sessions API', type: :request do
  before(:each) do
    clear_user_table
    create_users
  end
  
  let(:valid_attributes) {{email: "test1@test.com", password: "password"}}
  let(:non_existant_user) {{email: "Dontexist@gmail.com", password: "password"}}
  let(:wrong_password) {{email: "test1@test.com", password: "wrongpassword"}}
  
  describe 'post /sessions' do
    context 'valid credentials' do
      before { post '/api/v1/sessions', params: valid_attributes }

      it 'returns an authentication token' do
        expect(json['authentication_token']).not_to be_empty
      end
      it 'returns status code 201' do
        expect(response).to have_http_status(201)
      end
    end

    context "user doesn't exist" do
      before { post '/api/v1/sessions', params: non_existant_user }
      it 'returns a status code of 401' do
        expect(response).to have_http_status(401)
      end
    end

    context "password is wrong" do
      before { post '/api/v1/sessions', params: wrong_password }
      it 'returns a status code of 401' do
        expect(response).to have_http_status(401)
      end
    end
  end

  describe 'delete /sessions' do
    context 'auth token is valid' do
      it 'returns a status code of 200' do
        post '/api/v1/sessions', params: {email: "test1@test.com", password: "password"}
        headers = { "AUTHORIZATION": "Token #{json['authentication_token']}"}
        delete '/api/v1/sessions', params: {}, headers: headers
        expect(response).to have_http_status(200)
      end
    end
    
    context 'auth token is invalid' do
      it 'returns a status code of 401' do
        delete '/api/v1/sessions', params: {}, headers: { "AUTHORIZATION": "Token not_a_real_token" }
        expect(response).to have_http_status(401)
      end
    end
  end

end