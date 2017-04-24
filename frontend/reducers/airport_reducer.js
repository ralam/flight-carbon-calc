import merge from 'lodash/merge';

import { RECEIVE_AIRPORTS } from '../actions/airport_actions.js';

const airportReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_AIRPORTS:
            return merge({}, state, action.airports);
        default:
            return state;
    }
}

export default airportReducer;
