var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('pages/items/list', { title: 'list-item page ' , titlePage:'Item-list Page'});
    });
router.get('/add', function(req, res, next) {
    res.render('pages/items/add', { title: 'add-item Page' , titlePage:'add-item Page' });
    }); 


module.exports = router;
