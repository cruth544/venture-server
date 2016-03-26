var express = require('express')
var router  = new express.Router()
var YelpController = require('../controllers/YelpController')

router.route('/yelp/search')
  .post(YelpController.getVentures)

module.exports = router;
