class Game
  attr_accessor :id, :title, :genre, :price

  # TODO replace with database!
  # @@all = []

  def initialize(id, title, genre, price)
    @id = id
    @title = title
    @genre = genre
    @price = price

    # TODO replace with database!
    # @@all << self
  end

  def save
    sql = "INSERT INTO games(title, genre, price) VALUES (?, ?, ?)"
    DB[:conn].execute(sql, self.title, self.genre, self.genre)
  end

  # TODO replace with database!
  def self.all
    # self is the class itself!
    # @@all
    sql = "SELECT * FROM games;"
    results = DB[:conn].execute(sql) # returns an array of hashes

    results.map do |game_row_hash|
      Game.new(game_row_hash["id"], game_row_hash["title"], game_row_hash["genre"], game_row_hash["price"])
      # self.new(game_row_hash["id"], game_row_hash["title"], game_row_hash["genre"], game_row_hash["price"])
    end
  end
end
