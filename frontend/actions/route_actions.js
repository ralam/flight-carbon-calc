import * as APIUtil from '../util/api_util';
import { receiveErrors, clearErrors } from './error_actions';

export const RECEIVE_ROUTE = 'RECEIVE_AIRPORT';
export const RECEIVE_ROUTE_DISTANCES = 'RECEIVE_ROUTE_DISTANCES';
export const CLEAR_ROUTE_DISTANCES = 'CLEAR_ROUTE_DISTANCES';

export const receiveRouteData = routeData => ({
    type: RECEIVE_ROUTE,
    routeData
});

export const receiveRouteDistances = distances => ({
    type: RECEIVE_ROUTE_DISTANCES,
    distances
});

export const clearRouteDistances = () => ({
    type: CLEAR_ROUTE_DISTANCES
});

export const getRoute = ({originId, destinationId}) => dispatch => (
    APIUtil.getRoute(originId, destinationId)
        .then(routeData => dispatch(receiveRouteData(routeData)))
);

export const getFlightDistances = flightNumbers => dispatch => (
    APIUtil.getFlightDistances(flightNumbers)
        .then(distances => { dispatch(receiveRouteDistances(distances)); dispatch(clearErrors()) })
        .catch(err => { dispatch(clearRouteDistances()); dispatch(receiveErrors(err.responseJSON)) })
)