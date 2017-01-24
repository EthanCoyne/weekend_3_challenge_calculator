var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();


app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
  res.sendFile(path.resolve('public/views/index.html'));
});

app.listen(3000, function() {
  console.log('server handshake');
});

app.post('/calculate', function(req, res) {
  console.log('calculate post has: ', req.body);
  switch(req.body.type) {
    case "+":
    var result = Number(req.body.x) + Number(req.body.y);
    break;
    case "-":
    var result = Number(req.body.x) - Number(req.body.y);
    break;
    case "*":
    var result = Number(req.body.x) * Number(req.body.y);
    break;
    case "/":
    var result = Number(req.body.x) / Number(req.body.y);
    break;
  } // end switch
  var finalAnswer = {
    number: result
  };
  res.send(finalAnswer);
}); // end calculate post
