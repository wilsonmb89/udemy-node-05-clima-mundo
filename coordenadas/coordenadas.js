/**
 * Get coordenadas
 */
const { getHeadersHttp } = require('../axios/axios');

const getCoordsData = async (busquedaClima) => {
  const coorsRs = await getHeadersHttp(
    `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${busquedaClima}`,
    {'x-rapidapi-key': 'b818abce80msh7a7776f2e796c94p185370jsn2b8e8f397d0c'}
  ).catch(err => { console.log(err); });
  const results = coorsRs.data.Results;
  if (!!results && results.length > 0) {
    const { name: direccion, lat, lon } = results[0];
    return { direccion, lat, lon };    
  }
};

module.exports = { getCoordsData };