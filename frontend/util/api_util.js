export const getAirportFromCode = code => {
    return $.ajax({
        method: 'GET',
        url: '/',
        data: code
    });
};

export const getRoute = (originCode, destinationCode) => {
    return Promise.all([getAirportFromCode(originCode), getAirportFromCode(destinationCode)]);
}

