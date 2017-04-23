import React from 'react';

class FlightCodeForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            flightCodes: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault;
        console.log(this.state.flightCodes);
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Flight Code
                    <input type='text' />
                </label>
            </form>
        )
    }
}