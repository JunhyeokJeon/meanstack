var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var methodoverride = require('method-override');

// Mongo DB
mongoose.connect('mongodb://inamorfati:newlife4829@ds131258.mlab.com:31258/inamorfati_1');
var db = mongoose.connection;
db.once('open', () => {
  console.log('DB Connected');
});
db.on('error', (err) => {
  console.log('DB Error: ', err);
});

// Other Settings
app.use(express.static(__dirname + '/public'));
app.set("view engine", "ejs");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(methodoverride('_method'));


//Routes
app.use('/', require('./routes/main'));
app.use('/create', require('./routes/create'));
app.use('/show', require('./routes/show'));
app.use('/update', require('./routes/update'));
app.use('/delete', require('./routes/delete'));













// app.get('/hello', (req, res) => {
//   res.render('hello', {name: req.query.nameQuery})
// });
// app.get('/hello/:nameParam', (req, res) => {
//   res.render('hello', {name: req.params.nameParam})
// });


app.listen(4004, () => {
  console.log('Server On');
});
