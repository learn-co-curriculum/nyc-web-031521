class Tweet
  attr_reader :message, :user

  @@all = [] # single source of truth for Tweets

  def initialize(message, user)
    @message = message
    @user = user # reference to whoever the tweet belongs to

    @@all << self
  end

  def self.all
    @@all
  end

  def username
    self.user.username
  end
end
