import { combineReducers } from 'redux';

import routeReducer from './route_reducer';
import airportReducer from './airport_reducer';

const rootReducer = combineReducers({
    route: routeReducer,
    airports: airportReducer
});

export default rootReducer;