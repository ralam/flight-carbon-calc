class Api::AirportsController < ApplicationController
  def show
    puts params
    @airport = Airport.find(airport_params[:id])
    if @airport
      render :show
    else 
      render json: ["No airport found with that IATA code"], status: 404
    end
  end

  def index
    @airports = Airport.all
  end

  def airport_params
    params.permit(:id)
  end
end
