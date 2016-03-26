'use strict'

require('dotenv').load()
var express = require('express')

var app           = express()
var cors          = require('cors')
var Promise       = require('bluebird')
var path          = require('path')
var logger        = require('morgan')
var cookieParser  = require('cookie-parser')
var bodyParser    = require('body-parser')

app.use(cors())

// Set View Engine to EJS
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))
app.use(cookieParser())
app.use('/public', express.static('public'));

app.use( require('cookie-parser')(credentials.cookieSecret))

var routes = require('./config/routes')
app.use('/api', routes)

// use db connection string based on whether the environment is development or production
// switch(app.get('env')){
//   case 'development':
//       // mongoose.connect(dbConfig.mongo.dev.conn, dbConfig.mongo.options);
//       mongoose.connect(dbConfig.mongo.dev.conn, function (err) {
//           if (err) console.log(err)
//           else
//             console.log("Connected to MongoDB!")
//       })
//       console.log('connecting to mongo dev.')
//       console.log(dbConfig.mongo.dev.conn)
//       break;
//   case 'production':
//       mongoose.connect(dbConfig.mongo.prod.conn, dbConfig.mongo.options);
//       console.log('connecting to mongo prod.')
//       console.log(dbConfig.mongo.prod.conn)
//       break;
//   default:
//       console.log('connecting nowhere')
//       throw new Error('Unknown execution environment: ' + app.get('env'));
// }

var PORT = process.env.PORT || 8000
app.listen(PORT)
console.log("Server starting...go to localhost:" + PORT)
