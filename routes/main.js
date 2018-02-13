var express = require('express');
var router = express.Router();

var Contact = require('../models/Contact');

//main
router.get('/', (req, res) => {
  res.redirect('/show');
});
router.get('/show', (req, res) => {
  Contact.find({}, (err, contacts) => {
    // Contact.find({검색조건}, (에러, 검색결과))
    //검색조건이 없을 경우 Contact 모델에 속한 모든 데이터를 검색함
    // 검색결과는 array 형태임. 그래서 contact앞에 s를 붙임.
    if(err) throw err;
    res.render('main', {contacts: contacts});
  });
});

module.exports = router;
