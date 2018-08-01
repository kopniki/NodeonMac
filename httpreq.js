const yargs =require('yargs');
const geocode =require('./geocode');

var argv =yargs.argv;

geocode.getgeocode(argv.address);
