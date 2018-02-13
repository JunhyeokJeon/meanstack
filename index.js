var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var methodoverride = require('method-override');

// Mongo DB
mongoose.connect(process.env.MONGO_DB);
var db = mongoose.connection;
db.once('open', () => {
  console.log('DB Connected');
});
db.on('error', (err) => {
  console.log('DB Error: ', err);
});

// 사용할 데이터 Schema
var contactSchema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String },
  phone: { type: String }
});
var Contact = mongoose.model('contact', contactSchema);

// Other Settings
app.use(express.static(__dirname + '/public'));
app.set("view engine", "ejs");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(methodoverride('_method'));






app.get('/', (req, res) => {
  res.redirect('/contact');
});
app.get('/contact', (req, res) => {
  Contact.find({}, (err, contacts) => {
    // Contact.find({검색조건}, (에러, 검색결과))
    //검색조건이 없을 경우 Contact 모델에 속한 모든 데이터를 검색함
    // 검색결과는 array 형태임. 그래서 contact앞에 s를 붙임.
    if(err) throw err;
    res.render('main', {contacts: contacts});
  });
});

app.get('/new', (req, res) => {
  res.render('new');
});
app.post('/create', (req, res) => {
  Contact.create(req.body, (err, contact) => {
    // Contact.create(create할 data의 object, (에러, 생성된 data))
    if(err) return res.json(err);
    res.redirect('/contact');
  });
});

app.get('/index/:id', (req, res) => {
  Contact.findOne({_id:req.params.id}, (err, contact) => {
    if(err) return res.json(err);
    res.render('show_detail', { contact: contact });
  });
});
app.get('/index/:id/edit', (req, res) => {
  Contact.findOne({_id:req.params.id}, (err, contact) => {
    if(err) return res.json(err);
    res.render('edit', {contact: contact});
  });
});
app.put('/index/:id/edit', (req, res) => {
  Contact.findOneAndUpdate({_id:req.params.id}, req.body, (err, contact) => {
    if(err) return res.json(err);
    res.redirect('/index/'+req.params.id);
  });
});

app.delete('/delete/:id', (req, res) => {
  Contact.remove({_id:req.params.id}, (err) => {
    if(err) return res.json(err);
    res.redirect('/contact');
  });
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
