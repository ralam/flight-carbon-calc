import { connect } from 'react-redux';

import RouteInfo from './route_info';

const mapStateToProps = (state) => ({
    distances: state.route.distances
});

export default connect(
    mapStateToProps
)(RouteInfo);