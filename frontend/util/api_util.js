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