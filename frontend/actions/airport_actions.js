import * as APIUtil from '../util/api_util';

export const RECEIVE_AIRPORTS = 'RECEIVE_AIRPORTS';

export const receiveAirports = airports => ({
    type: RECEIVE_AIRPORTS,
    airports
})

export const getAirports = () => dispatch => (
    APIUtil.getAirports()
        .then(airports => dispatch(receiveAirports(airports)))
)