const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Trabquilidad, Mente Fría')
})

app.listen(3000)