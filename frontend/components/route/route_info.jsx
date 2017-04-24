import React from 'react';

class RouteInfo extends React.Component{
    render() {
        console.log('info render')
        console.log(this.props.route)
        return(
            <div>
                <div>Distance: {this.props.route ? this.props.route.distance : 0} miles</div>
            </div>
        )
    }
}

export default RouteInfo;