import React from 'react';
import Select from 'react-select';

class RouteForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            origin: '',
            destination: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setOrigin = this.setOrigin.bind(this);
        this.setDestination = this.setDestination.bind(this);
    }

    componentDidMount() {
        this.props.getAirports();
    }

    setOrigin({value}) {
        this.setState({origin: value});
    }

    setDestination({value}) {
        this.setState({destination: value});
    }

    handleSubmit(e) {
        e.preventDefault();
        const originId = this.props.IATACodes[this.state.origin].id;
        const destinationId = this.props.IATACodes[this.state.destination].id
        const routeIds = {
            originId: originId,
            destinationId: destinationId
        }
        this.props.getRoute(routeIds);
    }

    render() {
        let options = [];
        const { IATACodes } = this.props;
        Object.keys(IATACodes).forEach(code => {
            const codeLabel = `${code} (${IATACodes[code].name})`
            options.push({value: code, label: codeLabel});
        });
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Departure Airport
                    <Select
                        name='departure-airport'
                        value={this.state.origin}
                        options={options}
                        onChange={this.setOrigin}
                    />
                </label>
                <label>Destination Airport
                    <Select
                        name='departure-airport'
                        value={this.state.destination}
                        options={options}
                        onChange={this.setDestination}
                    />
                </label>
                <input type='submit' value='Submit' />
            </form>
        )
    }
}

export default RouteForm;