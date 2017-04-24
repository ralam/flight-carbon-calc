import merge from 'lodash/merge';

import { RECEIVE_ROUTE } from '../actions/route_actions';
import { calculateDistance } from '../util/route_util';

const routeReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_ROUTE:
            const route = {origin: action.routeData[0], destination: action.routeData[1]};
            const distance = Math.round(calculateDistance(route.origin, route.destination) * 10000) / 10000 ;
            return(merge({}, state, route, {distance: distance}));
        default:
            return state;
    }
}

export default routeReducer;