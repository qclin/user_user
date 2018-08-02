var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var Q = require('q');
var pug = require('pug');

var app = express();

app.use(cors());
app.use(bodyParser.json({ extended: false }));
app.use(express.static(__dirname + "/public/assets"));

app.set('views', './public/views');
app.set('view engine', 'pug');

app.get('/', function(req, res){
	res.render('index');
});


app.listen(3000, () => console.log('listening on 3000 '))
