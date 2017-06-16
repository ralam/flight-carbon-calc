import React from 'react';

class RouteInfo extends React.Component{
    constructor(props) {
        super(props);
    }

    calculateCO2(miles) {
        let co2Factor;
        if(miles < 300) {
            co2Factor = 0.251;
        } else if(miles < 2300) {
            co2Factor = 0.143;
        } else {
            co2Factor = 0.167;
        }

        return Math.round(co2Factor * miles) / 1000;
    }

    render() {
        let info = <div></div>;
        if (this.props.distances) {
            let distance = this.props.distances.reduce((pv, cv) => pv + cv, 0);
            info = <div>
                <p>You're flying about { Math.round(distance * 100) / 100 } miles.</p>
                <p>One economy ticket creates about { this.calculateCO2(distance) } metric tons of CO2.</p>
            </div>
        }
        return(
            <div>
                { info }
            </div>
        )
    }
}

export default RouteInfo;