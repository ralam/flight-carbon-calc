import React from 'react';

import RouteFormContainer from './route/route_form_container';
import RouteInfoContainer from './route/route_info_container';
import FlightNumberForm from './route/flight_number_form';
import FlightNumberFormContainer from './route/flight_number_form_container';

const App = () => (
    <div className="app">
        <h1>Carbon Calculator</h1>
        {/*<RouteFormContainer />*/}
        <FlightNumberFormContainer />
        <RouteInfoContainer />
    </div>
);

export default App;