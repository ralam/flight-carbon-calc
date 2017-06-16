export const getRoute = (originId, destinationId) => {
    return Promise.all([getAirport(originId), getAirport(destinationId)]);
}

export const getAirports = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/airports'
    });
};

export const getAirport = id => {
    return $.ajax({
        method: 'GET',
        url: `/api/airports/${id}`
    });
};

export const getFlightDistances = flightNumbers => {
    return Promise.all(flightNumbers.map(flightNumber => getFlightDistance(flightNumber)));
};

export const getFlightDistance = flightNumber => {
    return $.ajax({
        method: 'GET',
        url: `/api/flights/${flightNumber}`
    });
};
