const express = require('express')
const app = express()
const port = 3000

// localhost:3000/
app.get('/', (req, res) => {
  res.send('Hello World!!!!!!!')
})

// localhost:3000/users
app.get('/users', (req, res) => {
  res.send('Listado de usuarios')
})

app.listen(port, () => {
  console.log(`The server is running on port ${port}`)
})

// Nodemon
// Fat Arrow Function
// Regular functions vs fat arrow functions
// ES6
// localhost:3000