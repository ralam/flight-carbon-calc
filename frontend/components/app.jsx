import React from 'react';

import RouteFormContainer from './route_form_container';
import RouteInfoContainer from './route_info_container';
import FlightNumberFormContainer from './flight_number_form_container';
import ErrorListContainer from './error_list_container';

const App = () => (
    <div className="app">
        <h1>Carbon Calculator</h1>
        {/*<RouteFormContainer />*/}
        <FlightNumberFormContainer />
        <ErrorListContainer />
        <RouteInfoContainer />
    </div>
);

export default App;