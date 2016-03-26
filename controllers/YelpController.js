'use strict'
var Yelp = require('yelp')

module.exports = {
  getVentures: function (req, res, next) {
    var yelp = new Yelp({
      consumer_key: process.env.YELP_CONSUMER_KEY,
      consumer_secret: process.env.YELP_CONSUMER_SECRET,
      token: process.env.YELP_TOKEN_KEY,
      token_secret: process.env.YELP_TOKEN_SECRET
    })

    var searchParams = {
      term: req.body.term,
      location: req.body.location,
      limit: req.body.limit,
      offset: '0',
      sort: '0'
    }

    yelp.search(searchParams)
      .then(function (data) {
        var ventures = {}


        res.json(ventures)
      }, function (err) {
        console.log(err)
      })
  }
}
