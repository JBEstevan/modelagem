const express = require("express")
const cep_endereco = require("./middlewares/cep_endereco.js")
const atendimento_controller = require("./controllers/atendimento.js")
const barbearia_controller = require("./controllers/barbearia.js")
const barbeiro_controller = require("./controllers/barbeiro.js")
const cliente_controller = require("./controllers/cliente.js")
const franquia_controller = require("./controllers/franquia.js")
const servico_controller = require("./controllers/servico.js")
const usuario_controller = require("./controllers/usuario.js")
const app = express()
const port = 5600

app.use(express.json())
//MIDDLEWARE GLOBAL
app.use(cep_endereco)

//atendimento

app.get("/atendimento", (req, res) => {
    res.json(atendimento_controller.index())
})

app.get("/atendimento/:id", (req, res) => {
    res.json(atendimento_controller.show(req.params.id))
})

app.post("/atendimento", (req, res) => {
    const code = atendimento_controller.store(req.body)
    res.status(code).json()
})

app.put("/atendimento/:id", (req, res) => {
    const code = atendimento_controller.update(req.body, req.params.id)
    res.status(code).json()
})

app.delete("/atendimento/:id", (req, res) => {
    cliente_controller.destroy(req.params.id)
    res.json()
})

//barbearia

app.get("/barbearia"), (req, res) => {
    res.json(barbearia_controller.index())
}

app.get("/barbearia/:id"), (req, res) => {
    res.json(barbearia_controller.show(req.params.id))
}

app.post("/barbearia"), (req, res) => {
    const code = barbearia_controller.store(req.body)
    res.status(code).json
}

app.put("/barbearia/:id", (req, res) => {
    const code = barbearia_controller.update(req.body, req.params.id)
    res.status(code).json()
})

app.delete("/barbearia/:id", (req, res) => {
    barbearia_controller.destroy(req.params.id)
    res.json()
})

//barbeiro

app.get("/barbeiro"), (req, res) => {
    res.json(barbeiro_controller.index())
}

app.get("/barbeiro/:id", (req, res) => {
    res.json(barbeiro_controller.show(req.params.id))
})

app.post("/barbeiro", (req, res) => {
    const code = barbeiro_controller.store(req.body)
    res.status(code).json()
})

app.put("/barbeiro/:id", (req, res) => {
    const code = barbeiro_controller.update(req.body, req.params.id)
    res.status(code).json()
})

app.delete("/barbeiro/:id", (req, res) => {
    barbeiro_controller.destroy(req.params.id)
    res.json()
})

//cliente

app.get("/cliente", (req, res) => {
    res.json(cliente_controller.index())
})

app.get("/cliente/:id", (req, res) => {
    res.json(cliente_controller.show(req.params.id))
})

app.post("/cliente", (req, res) => {
    const code = cliente_controller.store(req.body)
    res.status(code).json()
})

app.put("/cliente/:id", (req, res) => {
    const code = cliente_controller.update(req.body, req.params.id)
    res.status(code).json()
})

app.delete("/cliente/:id", (req, res) => {
    cliente_controller.destroy(req.params.id)
    res.json()
})

//franquia

app.get("/franquia", (req, res) => {
    res.json(franquia_controller.index())
})

app.get("/franquia/:id", (req, res) => {
    res.json(franquia_controller.show(req.params.id))
})

app.post("/franquia", (req, res) => {
    const code = franquia_controller.store(req.body)
    res.status(code).json()
})

app.put("/franquia/:id", (req, res) => {
    const code = franquia_controller.update(req.body, req.params.id)
    res.status(code).json()
})

app.delete("/franquia/:id", (req, res) => {
    franquia_controller.destroy(req.params.id)
    res.json()
})

//servico

app.get("/servico", (req, res) => {
    res.json(servico_controller.index())
})

app.get("/servico/:id", (req, res) => {
    res.json(servico_controller.show(req.params.id))
})

app.post("/servico", (req, res) => {
    const code = servico_controller.store(req.body)
    res.status(code).json()
})

app.put("/servico/:id", (req, res) => {
    const code = servico_controller.update(req.body, req.params.id)
    res.status(code).json()
})

app.delete("/servico/:id", (req, res) => {
    servico_controller.destroy(req.params.id)
    res.json()
})

//usuario

app.get("/usuario", (req, res) => {
    res.json(usuario_controller.index())
})

app.get("/usuario/:id", (req, res) => {
    res.json(usuario_controller.show(req.params.id))
})

app.post("/usuario", (req, res) => {
    const code = usuario_controller.store(req.body)
    res.status(code).json()
})

app.put("/usuario/:id", (req, res) => {
    const code = usuario_controller.update(req.body, req.params.id)
    res.status(code).json()
})

app.delete("/usuario/:id", (req, res) => {
    usuario_controller.destroy(req.params.id)
    res.json()
})

app.listen(port, () => {
    console.log("Server is running in " + port + "")
})