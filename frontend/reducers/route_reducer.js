import { RECEIVE_ROUTE } from '../actions/route_actions';

const routeReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_ROUTE:
            let route = {origin: action.route[0], destination: action.route[1]};
            return(merge({}, state, {route: route}));
        default:
            return state;
    }
}

export default routeReducer;