require 'net/http'
require 'haversine'

class Api::FlightsController < ApplicationController
  def show
    flight_number = params[:id]
    uri = URI.parse("http://iatacodes.org/api/v6/routes?api_key=#{Figaro.env.iata_api_key}&flight_number=#{flight_number}")
    res = Net::HTTP.get(uri)
    res = JSON.parse(res)["response"]
    if res.length > 0
      origin = Airport.find_by({iata: res[0]["departure"]})
      destination = Airport.find_by({iata: res[0]["arrival"]})
      distance = Haversine.distance(
        origin["latitude"],
        origin["longitude"],
        destination["latitude"],
        destination["longitude"])
      
      render json: {distance: distance.to_miles.round(2)}
    else
      render json: ["No flight found with flight number #{flight_number}"], status: 404
    end
  end
end
