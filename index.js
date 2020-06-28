const express = require('express')
const app = express()

const cors = require('cors')

app.use(express.static('build'))

app.use(cors)

app.get('/', (req, res) => {
  res.send('<h1>boo</h1>')
})

const PORT = process.env.PORT || 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)