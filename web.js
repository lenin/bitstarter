var express = require('express'),
    fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  buffer = fs.readFileSync('index.html');
  response.send(buffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
