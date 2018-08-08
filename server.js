var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var Q = require('q');
var pug = require('pug');
var fs = require('fs');
var app = express();

var mailer = require('./lib/mailer');

app.use(cors());
app.use(bodyParser.json({ extended: false }));
app.use(express.static(__dirname + "/public/assets"));

app.set('views', './public/views');
app.set('view engine', 'pug');

app.get('/', function(req, res){
	var imgFiles = getFiles('./public/assets/images')
	res.render('index', {imgFiles});
});

var router = express.Router();
app.use('/sayHello', router);
router.post('/', mailer.sayHello);

// var jsonParser = bodyParser.json()
//
// app.post('/sayHello', function(req, res){
// 		console.log("POST sayHello", req.body)
// 		console.log(req)
// });



app.listen(3000, () => console.log('listening on 3000 '))


function getFiles (dir, files_){
    files_ = files_ || [];
    var files = fs.readdirSync(dir);
    for (var i in files){
        var name = dir + '/' + files[i];
        if (fs.statSync(name).isDirectory()){
            getFiles(name, files_);
        } else if(!files[i].startsWith('.')) {
						var cleanName = name.replace('./public/assets/', ' ')
            files_.push(cleanName);
        }
    }
    return files_;
}
