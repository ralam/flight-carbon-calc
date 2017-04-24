export const getIATACodes = ({ airports }) => {
    let iataCodes = {}
    Object.keys(airports).forEach(id => {
        iataCodes[airports[id].iata] = {id: id, name: airports[id].name};
    });

    return iataCodes;
}
