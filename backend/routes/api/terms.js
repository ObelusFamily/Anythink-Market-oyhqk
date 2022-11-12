var router = require('express').Router();
var mongoose = require('mongoose');
var Item = mongoose.model('Item');

// return a list of terms
router.get('/', function(req, res, next) {
  Item.find().distinct('termList').then(function(tags){
    return res.json({terms: terms});
  }).catch(next);
});

module.exports = router;
