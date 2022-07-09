Movie.all.delete_all
User.all.delete_all 

@i = 1 
@subjects = ['Health', 'Diet', 'Play', 'Other']

5.times do
  @user = User.create(
    email: "test#{@i}@test.com",
    password: "password",
    first: "test#{@i}",
    last: "testing#{@i}",
    image: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80"
  )
  @i += 1

  10.times do
    @Movie = Movie.create(
      title: Faker::Movie.title,
      desc: Faker::Movie.quote,
      mlink: Faker::LoremFlickr.image
    )

  end

end

puts 'Done Seeding'

