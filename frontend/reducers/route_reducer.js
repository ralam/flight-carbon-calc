import merge from 'lodash/merge';

import { RECEIVE_ROUTE, RECEIVE_ROUTE_DISTANCES, CLEAR_ROUTE_DISTANCES } from '../actions/route_actions';
// import { calculateDistance } from '../util/route_util';

const routeReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        // case RECEIVE_ROUTE:
        //     const route = {origin: action.routeData[0], destination: action.routeData[1]};
        //     const distance = Math.round(calculateDistance(route.origin, route.destination) * 10000) / 10000 ;
        //     return(merge({}, state, route, {distance: distance}));
        case RECEIVE_ROUTE_DISTANCES:
            const distances = action.distances.map((distance) => (distance.distance));
            return(merge({}, state, { distances: distances }));
        case CLEAR_ROUTE_DISTANCES:
            let newState = merge({}, state, { distances: [] });
            return(merge({}, state, { distances: [] }));
        default:
            return state;
    }
}

export default routeReducer;