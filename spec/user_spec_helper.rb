def clear_user_table
  User.destroy_all
end

def clear_post_table
  Post.destroy_all
end

def create_users
  user = User.create(email:"test1@test.com", password:"password")
  user = User.create(email:"test2@test.com", password:"password")
  user = User.create(email:"test3@test.com", password:"password")
  user = User.create(email:"test4@test.com", password:"password")
end

def create_posts
  Post.create(message:"here is a post", user_id: User.last.id)
  Post.create(message:"here is a post", user_id: User.last.id)
end

# My problem is that the user ID 1 will not exist 