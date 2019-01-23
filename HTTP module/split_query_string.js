
const http = require('http');
const url = require('url');

// type this (?year=2017&month=July) in the url and see the magic 
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  const q = url.parse(req.url, true).query;
  const txt = q.year + " " + q.month;
  res.end(txt);
}).listen(8080);
