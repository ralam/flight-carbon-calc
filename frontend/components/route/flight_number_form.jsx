import React from 'react';

class FlightNumberForm extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            flightNumbers: [''],
            inputs: [{ flightNumber: '' }]
        }
        this.add = this.add.bind(this);
        this.remove = this.remove.bind(this);
        this.updateFlightNumber = this.updateFlightNumber.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    handleSubmit() {
        console.log(this.state.flightNumbers);
        const flightNumbers = this.state.flightNumbers;
        this.props.getFlightDistances(flightNumbers);
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
                    <button onClick={ this.remove.bind(null, idx) }>-</button>
                </div>
            );
        });
        return(
            <div className='inputForm'>
                <div className='inputs'>
                    { inputs }
                </div>
                <button onClick={ this.add } className='inputButton'>+</button>
                <button onClick={ this.handleSubmit } className='inputButton'>Submit</button>
            </div>
        )
    }
}

export default FlightNumberForm;