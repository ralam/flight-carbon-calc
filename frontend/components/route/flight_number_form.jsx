import React from 'react';

class FlightNumberForm extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            flightNumbers: [''],
            errors: [],
        }
        this.add = this.add.bind(this);
        this.remove = this.remove.bind(this);
        this.updateFlightNumber = this.updateFlightNumber.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.createRemoveButton = this.createRemoveButton.bind(this);
    }

    updateFlightNumber(idx, e) {
        const newInputs = this.state.flightNumbers.map((flightNumber, _idx) => {
            if(idx !== _idx) return flightNumber;
            return e.currentTarget.value;
        });
        
        this.setState({ flightNumbers: newInputs });
    }

    add() {
        const flightNumbers = this.state.flightNumbers.concat(['']);
        this.setState({ flightNumbers });
    }

    remove(idx) {
        this.setState({ flightNumbers: this.state.flightNumbers.filter((el, _idx) => _idx !== idx) });
    }

    createRemoveButton(idx) {
        if (idx === 0) {
            return;
        } else {
            return <button onClick={ this.remove.bind(null, idx) }>-</button>
        }
    }

    handleSubmit() {
        const flightNumbers = this.state.flightNumbers;
        if(flightNumbers.filter((number) => number === '').length > 0) {
            this.setState({ errors: ['One or more flight number fields are blank']});
        } else {
            this.props.getFlightDistances(flightNumbers);
            this.setState({ errors: []});
        }
    }

    render() {
        const inputs = this.state.flightNumbers.map((flightNumber, idx) => {
            return(
                <div key={idx} className='input'>
                    <input
                        type='text'
                        value={ flightNumber }
                        onChange={ this.updateFlightNumber.bind(null, idx) }
                    />
                    { this.createRemoveButton(idx) }
                </div>
            );
        });
        const errors = this.state.errors.map((error, idx) => { return(<div key={ idx }>{ error }</div>) });
        return(
            <div>
                <div>
                    Flight Number
                    { inputs }
                </div>
                <div>
                    <button onClick={ this.add } className='inputButton'>+</button>
                    <button onClick={ this.handleSubmit } className='inputButton'>Calculate</button>
                </div>
                <div>
                    { errors }
                </div>
            </div>
        )
    }
}

export default FlightNumberForm;