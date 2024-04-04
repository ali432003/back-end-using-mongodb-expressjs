const dotenv = require("dotenv")
const mongoose = require("mongoose")
const express = require('express')
const app = express()
const port = 5173

dotenv.config({ path: "./config.env" })
require("./db/conn")

// used to covert data into json
app.use(express.json())

// Link our router file to make routing easy using middleware
app.use(require("./routes/auth"));

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// app.post('/register', (req, res) => {
//     console.log(req.body)
//     res.json({ message: req.body })
//     // res.send("registar wala pagee agiya bhaiii")
// })

app.listen(port, () => {
    console.log(`sucessfully running server on port ${port}`)
})