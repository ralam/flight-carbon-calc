class Api::AirportsController < ApplicationController
  def show
    puts params
    @airport = Airport.find(params[:id])
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
