var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!1');
});
app.get('/hello2', function (req, res) {
  res.send('Hello World!2');
});
app.get('/hello3', function (req, res) {
  res.send('Hello World!3');
});

var server = app.listen(4000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
