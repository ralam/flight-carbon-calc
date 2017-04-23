require 'csv'

namespace :db do
  desc "TODO"
  task load_airports: :environment do
    File.foreach("./airports.csv") do |csv_line|
    # CSV.foreach("./airports.csv", :headers => false) do |row|
      row = CSV.parse(csv_line.gsub('\"', '""')).first
      next if row[4] == "\\N"

      Airport.create!({
        airport_id: row[0],
        name: row[1],
        city: row[2],
        country: row[3],
        iata: row[4],
        icao: row[5],
        latitude: row[6],
        longitude: row[7],
        altitude: row[8],
        timezone: row[9],
        dst: row[10],
        tz_database_time_zone: row[11],
        airport_type: row[12],
        source: row[13]
      })
    end
  end

end
