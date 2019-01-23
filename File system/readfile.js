

const http = require('http');
const fs = require('fs'); // fs = fileserver


// fs.readFile() method is used to read files on your computer.
http.createServer(function (req, res) {
  fs.readFile('readfile.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(8080);
