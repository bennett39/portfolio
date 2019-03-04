var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Bennett Garner: Python Full Stack Developer'
  });
});

/* GET home page. */
router.get('/about', function(req, res, next) {
  res.render('about', {
    title: 'About Bennett Garner: Python Full Stack Developer'
  });
});

module.exports = router;
