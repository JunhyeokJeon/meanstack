var express = require('express');
var router = express.Router();

var Contact = require('../models/Contact');

//update
router.get('/:id/edit', (req, res) => {
  Contact.findOne({_id:req.params.id}, (err, contact) => {
    if(err) return res.json(err);
    res.render('edit', {contact: contact});
  });
});
router.put('/:id/edit', (req, res) => {
  Contact.findOneAndUpdate({_id:req.params.id}, req.body, (err, contact) => {
    if(err) return res.json(err);
    res.redirect('/show/'+req.params.id);
  });
});
module.exports = router;
