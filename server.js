'use strict';

// Khoi tao
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

//Cau hinh
app.use(bodyParser());
app.use(express.static(__dirname + '/client'));

var girls = [
  {
    name: "Dzung",
    age: 21,
    facebook: "Dzung",
    password: "bananhtung"
  }, {
    name: "Ha",
    age: 22,
    facebook: "Ha San",
    password: "bananhtung1"
  }];

app.route('/api/hot-girl')
   .get(function(request, response){
     response.json(girls);
   })
   .post(function(request, response){
     if (request.body.girl) {
       girls.push(request.body.girl);
     }
     response.end("success");
   })
   .put(function(request, response){
     if (request.body.girl) {
       console.log("PUT");
       console.log(request.body.girl);
     }
     response.end("success");
   })
   .delete(function(request, response){
     if (request.query.id) {
       console.log("Delete");
       console.log(request.query.id);
     }
     response.end("success");
   });

app.route('/*')
    .get(function(req, res) {
      res.sendFile(path.join(__dirname, '/client/index.html'));
    });

//Start Server
app.listen(3000, function(){
  console.log("Server started at port 3000!");
});
