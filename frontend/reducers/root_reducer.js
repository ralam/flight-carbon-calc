import { combineReducers } from 'redux';

import routeReducer from './route_reducer';
import airportReducer from './airport_reducer';
import errorReducer from './error_reducer';

const rootReducer = combineReducers({
    route: routeReducer,
    airports: airportReducer,
    errors: errorReducer
});

export default rootReducer;