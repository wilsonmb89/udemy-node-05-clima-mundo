/**
 * Yargs config file
 */
const argv = require('yargs')
  .options(
    {
      buscar: {
        demand: true,
        alias: 'b',
        desc: 'Ciudad y país separados por espacio'
      }
    }
  ).help().argv;

module.exports = { argv };