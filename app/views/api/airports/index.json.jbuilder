@airports.each do |airport|
  json.set! airport.id do
    json.partial! "api/airports/airport", airport: airport
  end
end