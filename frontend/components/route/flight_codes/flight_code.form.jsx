class FlightNumberForm extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            inputs: [{ flightNumber: '' }]
        }
        this.add = this.add.bind(this);
        this.remove = this.remove.bind(this);
        this.updateFlightNumber = this.updateFlightNumber.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateFlightNumber(idx, e) {
        const newInputs = this.state.inputs.map((input, _idx) => {
            if(idx !== _idx) return input;
            return { flightNumber: e.currentTarget.value };
        });
        
        this.setState({ inputs: newInputs });
    }

    add() {
        const inputs = this.state.inputs.concat({ flightNumber: '' });
        this.setState({ inputs });
    }

    remove(idx) {
        this.setState({ inputs: this.state.inputs.filter((el, _idx) => _idx !== idx) });
    }

    handleSubmit() {
        console.log(this.state.inputs);
        const flightNumberOne = this.state.inputs[0].flightNumber;
        $.ajax({
            url: `https://iatacodes.org/api/v6/routes?api_key=&flight_number=${flightNumberOne}`,
            success: (res) => console.log(res),
            error: (jqXHR, exception) => console.log(exception)
        })
    }

    render() {
        const inputs = this.state.inputs.map((flight, idx) => {
            return(
                <div key={idx}>
                    <input
                        type='text'
                        value={ flight.flightNumber }
                        onChange={ this.updateFlightNumber.bind(null, idx) }
                    />
                    <button onClick={ this.remove.bind(null, idx) }>-</button>
                </div>
            );
        });
        return(
            <div>
                <div className='inputs'>
                    { inputs }
                </div>
                <button onClick={ this.add }>+</button>
                <button onClick={ this.handleSubmit }>Submit</button>
            </div>
        )
    }
}
