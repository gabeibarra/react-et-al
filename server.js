var express = require('express');
var app = express();
var path = require('path');
var d3_obj = require('./src/nonreact/server_side_d3');

// Serve react_js app in public
app.use(express.static(
  path.join( __dirname + '/dist' )
));

app.get('/hello', function(req, res){
  res.send(d3_obj());
  //res.send( 'Hello World' );
});

app.get('/', function(req, res){
  res.sendFile(
    path.join( __dirname + '/src/index.html' )
  );
});

app.listen(3000, function() {
  console.log('App server is running. Ctrl+C to exit');
});
