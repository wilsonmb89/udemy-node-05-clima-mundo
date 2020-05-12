const { getSimple } = require('../axios/axios');

const getClima = async (lat, lon) => {
  const clima = await getSimple(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=es&units=metric&appid=31fecf3fcad40451f34854e20e148237`
  ).catch(err => {console.log(err)});
  if (!!clima && !!clima.main) {
    return clima.main.temp;
  } 
};

module.exports = { getClima };
