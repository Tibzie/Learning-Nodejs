
const fs = require('fs');

// fs.unlink() method deletes the specified file

fs.unlink('mynewfile2.txt', function (err) {
  if(err) throw err;
  console.log('Deleted!');
});
