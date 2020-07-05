var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Bennett Garner: Python Full Stack Developer'
  });
});

router.get('/about', function(req, res, next) {
  res.render('about', {
    title: 'About Bennett Garner: Python Full Stack Developer'
  });
});

router.get('/books', function(req, res, next) {
  res.render('books', {
    title: 'Books by Bennett Garner'
  });
});

router.get('/solutions', function(req, res, next) {
  res.render('solutions', {
      title: 'SOLUTIONS: Use Code to Solve Real Problems by Bennett Garner'
  });
});

router.get('/buy_solutions', function(req, res, next) {
  res.render('buy_solutions', {
      title: 'SOLUTIONS: Use Code to Solve Real Problems by Bennett Garner'
  });
});

module.exports = router;
