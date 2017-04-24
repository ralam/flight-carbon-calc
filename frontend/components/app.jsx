import React from 'react';

import RouteFormContainer from './route/route_form_container';
import RouteInfoContainer from './route/route_info_container';

const App = () => (
    <div className="app">
        <h1>Carbon Calculator</h1>
        <RouteFormContainer />
        <RouteInfoContainer />
    </div>
);

export default App;