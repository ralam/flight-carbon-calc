import * as APIUtil from '../util/api_util';

export const RECEIVE_ROUTE = 'RECEIVE_AIRPORT';

export const receiveRouteData = routeData => ({
    type: RECEIVE_ROUTE,
    routeData
});


export const getRoute = ({originId, destinationId}) => dispatch => (
    APIUtil.getRoute(originId, destinationId)
        .then(routeData => dispatch(receiveRouteData(routeData)))
);