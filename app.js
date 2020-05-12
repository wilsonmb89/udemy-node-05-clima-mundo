const { argv } = require('./config/yargs');
const coordenadas = require('./coordenadas/coordenadas');
const clima = require('./clima/clima');

const busquedaClima = encodeURI(argv.buscar);

const getClima = async () => {
  const coordsData = await coordenadas.getCoordsData(busquedaClima);
  if (!!coordsData) {
    const climaActual = await clima.getClima(coordsData.lat,coordsData.lon);
    if (!!climaActual) {
      console.log(`El clima en ${coordsData.direccion} es ${climaActual} grados.`);
    }
  } else {
    console.log('No fue posible encontrar la ubicación');
  }
};

getClima();