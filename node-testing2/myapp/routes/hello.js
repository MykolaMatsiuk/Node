var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('hello', { msg: "Greeting page!", name: "Johny"});
});

module.exports = router;
