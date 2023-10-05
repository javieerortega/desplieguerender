const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.sendFile('cv.html')
})

app.listen(3000)