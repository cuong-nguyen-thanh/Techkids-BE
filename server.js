'use strict';

// Setup server
var express = require('express');
var path = require('path');

var app = express();
app.use(express.static(__dirname + '/client'))
app.route('/*')
    .get((req, res) => {
      res.sendFile(path.join(__dirname, '/client/index.html'));
    });

app.listen(1337, function () {
  console.log('Example app listening on port 1337!');
});
