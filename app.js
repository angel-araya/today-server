require('dotenv').config()
const express = require('express')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const cors = require('cors')

const api = require('./routes/auth')
db.connect(`mongod://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}`)

const app = express()
app.use(cors())

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())

app.use('/api', api)

// catch 404 and forward to error handler
app.use(function (req, res) {
  res.status(404).end()
})

module.exports = app
