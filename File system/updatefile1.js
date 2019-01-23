

// fs.appendFile() method appends the specified content
// at the end of the specified file.

const fs = require('fs');

fs.appendFile('mynewfile1.txt', 'changed with append.', function (err) {
  if (err) throw err;
  console.log('Updated');
});
