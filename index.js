const express = require('express')
const app = express()

const cors = require('cors')

const methods = require('./methods')

app.use(cors())
app.use(express.static('build'))

app.get('/api/ping', (req, res) => {
  res.send('<h1>pong </h1>')
})

app.get('/api/methods/:id', (req, res) => {
  const id = req.params.id
  const method = methods.find(m => m.name === id)
  res.json(method)
})

app.get('/api/methods', (req, res) => {
  res.json(methods)
})

const PORT = process.env.PORT || 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)