import { connect } from 'react-redux';

import RouteInfo from './route_info';

const mapStateToProps = (state) => ({
    route: state.route
});

export default connect(
    mapStateToProps
)(RouteInfo);