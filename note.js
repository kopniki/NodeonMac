const fs = require('fs');

module.exports.friends = () =>{
  console.log('sneha ,vicky, punam, punam,anand ,sanket ,shivani');
};

var addNote =(title , body) =>{


  var note ={
    title ,
    body
  } ;

  var prevnotes =fs.readFileSync('message.json');

var notes =  JSON.parse(prevnotes);
notes.push(note);

fs.writeFileSync('message.json',JSON.stringify(notes));

};


module.exports ={
  addNote
};
