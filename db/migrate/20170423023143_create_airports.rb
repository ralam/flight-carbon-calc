class CreateAirports < ActiveRecord::Migration[5.0]
  def change
    create_table :airports do |t|
      t.integer :airport_id
      t.string :name
      t.string :city
      t.string :country
      t.string :iata
      t.string :icao
      t.decimal :latitude, precision: 18, scale: 15
      t.decimal :longitude, precision: 18, scale: 15
      t.integer :altitude
      t.string :timezone
      t.string :dst
      t.string :tz_database_time_zone
      t.string :type
      t.string :source
      t.timestamps
    end

    add_index :airports, :iata, unique: true
  end
end
