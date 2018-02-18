var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  name: { type: String, default: "Noname" },
  age: { type: Number, index: true },
  email: { type: String, match: /[a-zA-Z0-9.@_-]/, unique: true },
  date: { type: Date },
  blog: { type: String }
});

var User = mongoose.model('User', userSchema);
mongoose.connect('mongodb://localhost/my_db');
module.exports = User;
