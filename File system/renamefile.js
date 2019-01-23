
const fs = require('fs');

// fs.rename() method renames the specified file.

fs.rename('mynewfile1.txt', 'myrenamedfile1.txt', function(err) {
  if(err) throw err;
  console.log('Renamed!');
});
