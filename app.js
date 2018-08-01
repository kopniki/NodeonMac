

const fs= require('fs');
const os= require('os');
const notes= require('./note.js');
const yargs = require ('yargs');

var argv = yargs.argv;
var cmd = argv._[0];


//var note =notes.friends();
if(cmd === 'add'){
  console.log('adding note');
  notes.addNote(argv.title, argv.body);
}
