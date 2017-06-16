import React from 'react';

class ErrorList extends React.Component{
    constructor(props) {
        super(props);
        this.listErrors = this.listErrors.bind(this);
    }

    listErrors() {
        return this.props.errors.map((error, idx) => {
            return <li className='error' key={ idx }>{ error }</li>
        });
    }

    render() {
        let errors;
        if (this.props.errors.length > 0) {
            errors = <div className='container-error'><p>Please correct the following errors:</p><ul>{ this.listErrors() }</ul></div>
        }
        return(
            <div>
                { errors }
            </div>
        )
    }
}

export default ErrorList;