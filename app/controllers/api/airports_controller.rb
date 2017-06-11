class Api::AirportsController < ApplicationController
  def show
    @airport = Airport.find({iata: params[:id]})
    if @airport
      render :show
    else 
      render json: ["No airport found"], status: 404
    end
  end

  def index
    @airports = Airport.all
  end
end
