@airports.each do |airport|
  json.set! airport.id do
    json.extract! airport, :iata, :name
  end
end