var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
app.set("view engine", "ejs");

app.get('/hello', (req, res) => {
  res.render('hello', {name: req.query.nameQuery})
});

app.get('/hello/:nameParam', (req, res) => {
  res.render('hello', {name: req.params.nameParam})
});



app.listen(4004, () => {
  console.log('Server On');
});
