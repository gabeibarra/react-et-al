var express = require('express');
var app = express();
var path = require('path');

// Serve react_js app that template needs, but in public static files dir?
app.use(express.static(
  path.join( __dirname + '/dist/build' )
));

app.get('/hello', function(req, res){
  res.send( 'Hello World' );
});

app.get('/', function(req, res){
  res.sendFile(
    path.join( __dirname + '/src/index.html' )
  );
});

app.listen(3000, function() {
  console.log('App server is running. Ctrl+C to exit');
});
