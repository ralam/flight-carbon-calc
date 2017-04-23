import * as APIUtil from '../util/api_util';

export const RECEIVE_ROUTE = 'RECEIVE_AIRPORT';

export const receiveAirport = route => ({
    type: RECEIVE_AIRPORT,
    route
});


export const getRoute = ({origin, destination}) => dispatch => (
    APIUtil.getRoute(origin, destination)
        .then(route => dispatch(receiveAirport(route)))
);