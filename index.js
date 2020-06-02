const express = require('express')
const app = express()
const port = 3000
const knex = require('./utils').knex

// localhost:3000/
app.get('/', (req, res) => {
  res.send('Not Allowed')
})

// - ACTUALIZAR A MYSQL
// - ruta que devuelva un solo usuario (por id)
// /users/:id localhost:3000/users/1
// - runta que cree usarios
// /users (POST) (name, email, password)
// HACER COMMIT
// HACER PUSH

// localhost:3000/users   ASYNC/AWAIT
app.get('/users', async (req, res) => {
  try {
    const users = await knex.select().from('users')
    res.json({
      users: users
    })
  } catch (error) {
    res.status(500).json({ error: 'Error getting information from database' })
  }
})

app.listen(port, () => {
  console.log(`The server is running on port ${port}`)
})

// Nodemon
// Fat Arrow Function
// Regular functions vs fat arrow functions
// ES6
// localhost:3000