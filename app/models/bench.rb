class Bench < ActiveRecord::Base
  validates :description, :lat, :lng, presence: true

  def self.in_bounds(bounds)
    Bench.find_by_sql(<<-SQL)
      SELECT
        *
      FROM
        benches
      WHERE
        lat > #{bounds['southWest']['lat']}
        AND lat < #{bounds['northEast']['lat']}
        AND lng < #{bounds['northEast']['lng']}
        AND lng > #{bounds['southWest']['lng']}
    SQL
  end
end
