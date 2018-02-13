var mongoose = require('mongoose');

// 사용할 데이터 Schema
var contactSchema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String },
  phone: { type: String }
});
var Contact = mongoose.model('contact', contactSchema);

module.exports = Contact;
