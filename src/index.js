const express = require("express")
const cep_endereco = require("./middlewares/cep_endereco.js")
const app = express()
const port = 5600

app.use(express.json())

//MIDDLEWARE GLOBAL
app.use((req, res, next) => {
    console.log("middleware 2")
    next()
})

app.post("/", (req, res) => {
    console.log("middleware 3")
    res.json()
})

app.post("/barbearia", (req, res) => {
    console.log("POST barbearia")
    res.json()
})

app.listen(port, () => {
    console.log("Server is running in " + port + "")
})