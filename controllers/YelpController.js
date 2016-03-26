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
    console.log("Req: ", req.body)
    var body = JSON.parse(Object.keys(req.body)[0])
    console.log("Body: ", body)
    var searchParams = {
      term: req.body.term,
      category: req.body.category,
      location: req.body.location,
      limit: req.body.limit,
      offset: '0',
      sort: '0'
    }

    console.log("Search params: ", searchParams)

    // yelp.search(searchParams)
    //   .then(function (data) {
    //     var ventures = {}


    //     res.json(ventures)
    //   }, function (err) {
    //     console.log(err)
    //   })
    res.json({success: true})
  }
}
