import { connect } from 'react-redux';

import ErrorList from './error_list';

const mapStateToProps = state => ({ errors: state.errors });

export default connect(
    mapStateToProps
)(ErrorList);