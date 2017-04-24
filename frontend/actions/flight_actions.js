export const RECIEVE_FLIGHTS = 'RECIEVE_FLIGHTS';
export const RECIEVE_FLIGHT = 'RECEIVE_FLIGHT';

import * as IATAAPIUtil from '../util/iata_api_util';

export const receiveFlight = flightCode => ({
    type: RECIEVE_FLIGHT,
    flightCode
});

export const recieveFlights = flightCodes => ({
    type: RECEIVE_FLIGHTS,
    flightCodes
});