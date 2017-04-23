import React from 'react';
import Select from 'react-select';

class RouteForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            origins: [],
            destinations: [],
            options: [
                {value: "IAD", label: "IAD"},
                {value: "BWI", label: "BWI"},
                {value: "DCA", label: "DCA"},
            ],
            origin: '',
            destination: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setOrigin = this.setOrigin.bind(this);
        this.setDestination = this.setDestination.bind(this);
    }

    setOrigin({value}) {
        this.setState({origin: value});
    }

    setDestination({value}) {
        this.setState({destination: value});
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Departure Airport (3-letter IATA code)
                    <Select
                        name='departure-airport'
                        value={this.state.origin}
                        options={this.state.options}
                        onChange={this.setOrigin}
                    />
                </label>
                <label>Destination Airport (3-letter IATA code)
                    <Select
                        name='departure-airport'
                        value={this.state.destination}
                        options={this.state.options}
                        onChange={this.setDestination}
                    />
                </label>
                <input type='submit' value='Submit' />
            </form>
        )
    }
}

export default RouteForm;