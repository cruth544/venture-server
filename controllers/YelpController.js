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
    var body = JSON.parse(Object.keys(req.body)[0])
    var searchParams = {
      term: body.term,
      category: body.category,
      location: body.location,
      limit: body.limit,
      offset: '0',
      sort: '0'
    }

    console.log("Search params: ", searchParams)

    yelp.search(searchParams)
      .then(function (data) {
        var ventures = {}
        console.log("Yelp Data: ", data)


        res.json(ventures)
      }, function (err) {
        console.log(err)
      })
    // res.json({success: true})
  }
}
