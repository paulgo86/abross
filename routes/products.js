var express = require('express');
var router = express.Router();
var mongo = require('mongojs');
var db = mongo('node',['products']);
/* GET home page. */
router.get('/', function(req, res, next) {
  db.products.find(function(error,data){
    res.render('products',{
      title: 'Products',
      pData: data
    });
  });
});

module.exports = router;
