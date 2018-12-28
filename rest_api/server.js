const express = require("express")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const errorHandler = require("errorhandler")

// Instantiate express 
const app = express()

// Middleware
app.use(morgan("dev"))
app.use(bodyParser.json())
app.use(errorHandler)

// Testing server
app.get("/", (req, res) => {
  res.send("Testing")
})

// Instantiating port number in a variable
const port = 3000
app.listen(port)