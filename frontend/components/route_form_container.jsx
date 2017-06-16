import { connect } from 'react-redux';

import RouteForm from './route_form';
import { getIATACodes } from '../reducers/selectors';
import { getAirports } from '../actions/airport_actions';
import { getRoute } from '../actions/route_actions';

const mapStateToProps = state => ({
    airports: state.airports,
    IATACodes: getIATACodes(state),
    route: state.route
})

const mapDispatchToProps = dispatch => ({
    getAirports: () => dispatch(getAirports()),
    getRoute: route => dispatch(getRoute(route))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RouteForm);