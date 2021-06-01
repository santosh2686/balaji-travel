const app = require('express')()

app.get('/login', (req, res) => {
  res.end('Login API')
})

module.exports = app