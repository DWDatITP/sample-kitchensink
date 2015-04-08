var express = require('express');
var app = express();
var port = process.env.PORT || 5000;
var bodyParser = require('body-parser');

// makes it so `res.render` uses ejs to do its rendering
app.set('view engine', 'ejs');

// makes it so that files that are found in public/ are served
// before checking any of the other routes
app.use(express.static('public'));

// makes it so that forms that are POSTed will have
// the form data available as req.body
app.use(bodyParser.urlencoded());

app.get('/', function(req, res){

  // renders views/index.ejs
  res.render('index');
});

app.get('/dynamic/:value', function(req, res){

  // This will be whatever was after the "/dynamic/" in the url.
  // Example if the url is /dynamic/route, the value will be "route"
  var value = req.params.value;

  res.render('dynamic-route', {value:value});
});

app.listen(port, function(){
  console.log('listening on ',port);
});
