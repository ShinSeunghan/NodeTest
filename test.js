const express = require('express')
const app = express()

app.get('/main/:id', function (req, res) {
  const p = req.params;
  console.log(p)
  const q = req.query;
  console.log(q)
})

app.listen(3000)