import haversine from 'haversine';

export const calculateDistance = (origin, destination) => {
    const start = {latitude: origin.latitude, longitude: origin.longitude}
    const end = {latitude: destination.latitude, longitude: destination.longitude}
    return haversine(start, end, {unit: 'mile'});
}