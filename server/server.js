const express = require('express')
const app = express()
const webRoutes = require('./routes/web.js')
const pug = require('pug')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
require('dotenv').config()

app.use(express.static('client/public'))
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, '../client/src/views'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(methodOverride('_method'))

var myDB = 'mongodb://localhost/portfolio'

mongoose.connect(myDB, function() {
  if (mongoose.connection.readyState == 1) {
    console.log('connected to mongoDB')
    console.log('on ' + myDB)
  } else {
    console.log('problems connecting to mongoDB mongoose connection state is: ' + mongoose.connection.readyState)
  }
})


app.use(webRoutes)

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running on http://localhost:3000/ to stop server press control + c ')
})
