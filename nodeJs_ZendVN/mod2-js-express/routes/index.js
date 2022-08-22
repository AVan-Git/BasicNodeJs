var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
router.get('/dashboard', function(req, res, next) {
    res.render('pages/dashboard/dashboard', { title: 'dashboard' , titlePage:'Dashboard Page'});
  });

module.exports = router;
