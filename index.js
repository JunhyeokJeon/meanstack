var express = require('express');
var app = express();
var mongoose = require('mongoose');

// Mongo DB
mongoose.connect(process.env.MONGO_DB);
var db = mongoose.connection;
db.once('open', () => {
  console.log('DB Connected');
});
db.on('error', (err) => {
  console.log('DB Error: ', err);
});

// ejs 뷰 엔진
app.use(express.static(__dirname + '/public'));
app.set("view engine", "ejs");

app.get('/main', (req, res) => {
  res.render('main');
});



// app.get('/hello', (req, res) => {
//   res.render('hello', {name: req.query.nameQuery})
// });
// app.get('/hello/:nameParam', (req, res) => {
//   res.render('hello', {name: req.params.nameParam})
// });


app.listen(4004, () => {
  console.log('Server On');
});
