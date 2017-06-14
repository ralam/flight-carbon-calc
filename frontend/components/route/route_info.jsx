import React from 'react';

class RouteInfo extends React.Component{
    render() {
        console.log(this.props.distances)
        let distance = <div></div>;
        if (this.props.distances) {
            distance = <div>Distance: {this.props.distances.reduce((pv, cv) => pv + cv, 0)}</div>
        }
        return(
            <div>
                { distance }
            </div>
        )
    }
}

export default RouteInfo;