const express = require('express')
const mongoose = require('mongoose')
const http = require('http')
const cors = require('cors')
const bodyParser = require('body-parser')
const dbConfig = require('./connection/database')

const app = express()

// Schemas
let jewelSchema = require('./models/jewel')

// Express Route
const index = require('../server/routes/index')
const jewelsRoute = require('../server/routes/jewel')

// PORT
const port = process.env.PORT || 4000
const server = http.createServer(app)

// Connecting mongoDB Database
mongoose.Promise = global.Promise
mongoose.connect(dbConfig.db, {
  useNewUrlParser: true
}).then(() => {
  console.log('Database sucessfully connected!')
},
  error => {
    console.log('Could not connect to database : ' + error)
  }
)

server.listen(port)
console.log("Servidor rodando na porta ", port)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors())
app.use('/', index)
app.use('/jewels', jewelsRoute)

// 404 Error
app.use((req, res, next) => {
  next(createError(404))
})

module.exports = app