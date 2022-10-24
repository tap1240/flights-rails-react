# frozen_string_literal: true

class Airline < ApplicationRecord
  has_many :reviews

  before_create :set_slug

  def set_slug
    # creates url-friendly version of airline name
    self.slug = name.parameterize
  end

  def avg_score
    return 0 unless reviews.count.positive?

    reviews.average(:score).round(2).to_f
  end
end
