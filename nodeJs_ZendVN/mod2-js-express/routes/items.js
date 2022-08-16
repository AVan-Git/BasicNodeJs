var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('items/list', { title: 'list page' });
    });
router.get('/add', function(req, res, next) {
    res.render('items/add', { title: 'add Page' });
    }); 


module.exports = router;
