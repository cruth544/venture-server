var express = require('express')
var router  = new express.Router()
var YelpController = require('../controllers/YelpSearchController')

router.route('/yelp/search')
  .get(YelpController.getVentures)

module.exports = router;
