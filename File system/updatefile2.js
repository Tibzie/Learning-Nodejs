

const fs = require('fs');

// fs.writeFile() method replaces the specified
// file and content.

fs.writeFile('mynewFile3.txt', 'changed with writeFile.', function(err) {
  if(err) throw err;
  console.log('Replaced!');
})
