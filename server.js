var express = require('express'),
    app = express(),
    mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/firstD3Project');

app.get('/', function (req, res) {
  res.send('Hello World!');
});


app.listen(8888, function () {
  console.log('server started on locahost:8888');
});