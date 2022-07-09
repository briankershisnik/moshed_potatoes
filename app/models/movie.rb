class Movie < ApplicationRecord

  validates :title, :desc, :mlink, presence: true
  
end
