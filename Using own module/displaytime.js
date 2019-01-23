

const http = require('http');
const dayTime = require('./mymodule');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The current date and time are: " + dayTime.myDateTime());
  res.end();
}).listen(8080);
