var express = require('express');
var app = express();
 

app.use(express.static(__dirname + '/templates'));
app.use('/styles', express.static(__dirname + '/css'));
app.use('/images', express.static(__dirname + '/images'));

app.get('/', function (req, res) {
  res.sendFile('index.html');
});



var server = app.listen(3000, function () {
 
  var host = server.address().address;
  var port = server.address().port;
 
  console.log('Example app listening at http://%s:%s', host, port);
 
});