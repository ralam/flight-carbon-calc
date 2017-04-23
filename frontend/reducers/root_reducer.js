import { combineReducers } from 'redux';

import routeReducer from './route_reducer';

const rootReducer = combineReducers({
    routes: routeReducer
});

export default rootReducer;