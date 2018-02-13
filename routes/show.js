var express = require('express');
var router = express.Router();

var Contact = require('../models/Contact');

//show
router.get('/:id', (req, res) => {
  Contact.findOne({_id:req.params.id}, (err, contact) => {
    if(err) return res.json(err);
    res.render('show_detail', { contact: contact });
  });
});

module.exports = router;
