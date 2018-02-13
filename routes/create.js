var express = require('express');
var router = express.Router();

var Contact = require('../models/Contact');

//create
router.get('/', (req, res) => {
  res.render('create');
});
router.post('/', (req, res) => {
  Contact.create(req.body, (err, contact) => {
    // Contact.create(create할 data의 object, (에러, 생성된 data))
    if(err) return res.json(err);
    res.redirect('/show');
  });
});
module.exports = router;
