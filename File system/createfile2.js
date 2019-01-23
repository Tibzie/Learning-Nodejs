

const fs = require('fs');


// fs.open() method takes a "flag" as the second argument
// if the flag is "w" for "writing", the specified file is
// opened for writing. If the file doesn't exist
// an empty file is create
fs.open('mynewfile2.txt', 'w', function(err, file) {
  if(err) throw err;
  console.log('Saved!');
});
