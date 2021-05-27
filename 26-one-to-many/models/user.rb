class User
  attr_reader :username, :tweet_collection

  def initialize(username, bio)
    @username = username
    @bio = bio
    # @tweet_collection = [] # no good
  end

  def post_tweet(message)
    # create a new tweet
    new_tweet = Tweet.new(message, self)
  end

  def tweets
    Tweet.all.select do |tweet_instance|
      tweet_instance.user == self
      # tweet_instance.user.username == self.username
    end
  end
end
