export const RECIEVE_FLIGHTS = 'RECIEVE_FLIGHTS';
export const RECIEVE_FLIGHT = 'RECEIVE_FLIGHT';

import * as APIUtil from '../util/api_util';

export const receiveFlight = flightNumber => ({
    type: RECIEVE_FLIGHT,
    flightNumber
});

export const receiveFlights = flightNumbers => ({
    type: RECEIVE_FLIGHTS,
    flightNumbers
});

export const getFlightDistances = flightNumbers => dispatch => ({
    APIUtil.getFlightDistances(flightNumbers)
        .then(distances => dispatch(receiveRouteDistances(distances)))
})