import React from 'react';

class RouteInfo extends React.Component{
    render() {
        return(
            <div>
                <div>Distance: {this.props.distances ? this.props.distances.reduce((pv, cv) => pv + cv, 0) : 0} miles</div>
            </div>
        )
    }
}

export default RouteInfo;