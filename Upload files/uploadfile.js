
// 'formidable' is a good package(module) for working
// with file uploads

const http = require('http');

// formidable is able to parse the uploaded file once it reaches the server
const formidable = require('formidable');

// using file system module to rename the file
const fs = require('fs');

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    const form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
      const oldpath = files.filetoupload.path;
      const newpath = 'C:/Users/name_of_your_pc/' + files.filetoupload.name;
      fs.rename(oldpath, newpath, function(err) {
        if(err) throw err;
        res.write('File Uploaded and Moved!');
        res.end();
        // message on Terminal
        console.log('Successfully uploaded and moved.');
      });
    });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    // message on Terminal
    console.log('In progress');
    return res.end('');

  }
}).listen(8080);
