import { connect } from 'react-redux';

import flightNumberForm from './flight_number_form';
import { getFlightDistances } from '../actions/route_actions';
import { receiveErrors } from '../actions/error_actions';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    getFlightDistances: flightNumbers => dispatch(getFlightDistances(flightNumbers)),
    receiveErrors: errors => dispatch(receiveErrors(errors))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(flightNumberForm);