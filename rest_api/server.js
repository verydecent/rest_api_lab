const express = require("express")
const logger = require("morgan")
const bodyParser = require("body-parser")
// const errorHandler = require("errorhandler")

// Instantiate express 
const app = express()

let store = {}
store.accounts = []

// Middleware
app.use(logger("dev"))
// app.use(errorHandler)
app.use(bodyParser.json())

// Testing server
app.get("/", (req, res) => {
  res.send("Testing")
})

// Route handlers
app.get('/accounts', (req, res) => {
  res.status(200).send(store.accounts)
})

app.post('/accounts', (req, res) => {
  if(!req.body.username || !req.body.password) {
    return res.sendStatus(400)
  }
  let newAccount = {
    username: req.body.username,
    password: req.body.password
  }
  store.accounts.push(newAccount)
  let id = store.accounts.length
  res.status(201).send({ id: id })
})

app.put('/accounts/:id', (req, res) => {
  store.accounts[req.params.id] = req.body
  res.status(200).send(store.accounts[req.params.id])
})

app.delete('/accounts/:id', (req, res) => {
  store.accounts.splice(req.params.id, 1)
  res.status(204).send()
})

// Instantiating port number in a variable
const port = 3000
app.listen(port)