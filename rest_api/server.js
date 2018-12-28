const express = require("express")
const morgan = require("morgan")

// Instantiate express 
const app = express()

// Middleware
app.use(morgan("dev"))

// Testing server
app.get("/", (req, res) => {
  res.send("Testing")
})

// Instantiating port number in a variable
const port = 3000
app.listen(port)