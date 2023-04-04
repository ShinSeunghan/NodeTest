const express = require('express')
const app = express()

app.get('/person/:id', function (req, res) {
  const p = req.params;
  console.log(p)
  res.json({'name' : p.id})
})

app.listen(3000)