var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log("I am going to send the response by the next routing function");
  next();
}, function (req, res, next) {
  res.render('hello', { msg: "Greeting page!", name: "mr. Who"});
});

module.exports = router;
