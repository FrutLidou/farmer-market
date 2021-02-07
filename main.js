var http = require('http');
var url = require('url');
var fs = require('fs');
var userData = require('./functions');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + userData.getUserInfo().refreshDate);
  res.write("<br>");
  var urlQuery = url.parse(req.url, true).query;
  res.write(urlQuery.nom);
  res.end();
}).listen(8080);