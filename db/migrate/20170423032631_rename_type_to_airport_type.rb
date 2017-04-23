class RenameTypeToAirportType < ActiveRecord::Migration[5.0]
  def change
    rename_column :airports, :type, :airport_type
  end
end
