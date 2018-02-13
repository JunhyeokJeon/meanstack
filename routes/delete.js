var express = require('express');
var router = express.Router();

var Contact = require('../models/Contact');

//delete
router.delete('/:id', (req, res) => {
  Contact.remove({_id:req.params.id}, (err) => {
    if(err) return res.json(err);
    res.redirect('/show');
  });
});

module.exports = router;
