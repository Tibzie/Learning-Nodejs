
const fs = require('fs');


// fs.appendFile() method append a specified content to a file.
// If the file doesn't exist, a file will be created.
fs.appendFile('mynewfile1.txt', 'Something here...', function (err){
  if(err) throw err;
  console.log('Saved');
});
