require "pry"

def game_hash
  {
    home: {
      team_name: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: [
        {
          player_name: "Alan Anderson",
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slam_dunks: 1,
        },
        {
          player_name: "Reggie Evans",
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slam_dunks: 7,
        },
        {
          player_name: "Brook Lopez",
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slam_dunks: 15,
        },
        {
          player_name: "Mason Plumlee",
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slam_dunks: 5,
        },
        {
          player_name: "Jason Terry",
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slam_dunks: 1,
        },
      ],
    },
    away: {
      team_name: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: [
        {
          player_name: "Jeff Adrien",
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slam_dunks: 2,
        },
        {
          player_name: "Bismak Biyombo",
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slam_dunks: 10,
        },
        {
          player_name: "DeSagna Diop",
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slam_dunks: 5,
        },
        {
          player_name: "Ben Gordon",
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slam_dunks: 0,
        },
        {
          player_name: "Brendan Haywood",
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slam_dunks: 12,
        },
      ],
    },
  }
end

def home_hash
  game_hash[:home]
end

def home_players
  # game_hash.home.players (JS)
  # game_hash[:home][:players]
  home_hash[:players]
end

def all_players
  home_players + game_hash[:away][:players]
end

def find_team(team_name)
  game_hash.values.find do |team|
    team[:team_name] == team_name
  end
end

def find_player(name)
  #find the hash of the player
  player = all_players.find do |player_hash|
    player_hash[:player_name] == name
  end
end

def num_points_scored(name)
  # find the number of points scored by that player
  find_player(name)[:points]
end

def shoe_size(name)
  # return the shoe size of that player
  find_player(name)[:shoe]
end

def team_colors(team_name)
  find_team(team_name)[:colors]
end

def team_names
  team_names_arr = game_hash.values.map { |team| team[:team_name] }
end

def player_numbers(team_name)
  # find the team
  team = find_team(team_name)
  # find all of the players from that team
  players = team[:players]
  # return all of the players jersey numbers
  players.map { |player| player[:number] }

  # find_team(team_name)[:players].map { |player| player[:number] }
end

def player_stats(name)
  # find the player
  player = find_player(name)
  player.delete(:player_name)
  player
end

def big_shoe_rebounds
  player = all_players.max_by { |player| player[:shoe] }
  player[:rebounds]
end

# binding.pry
