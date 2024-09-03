const franquia_controller = require("../controllers/franquia.js")

let nextId = 1;

const model = (body, id = nextId++) => {
    if (
        body.nome != undefined &&
        body.fotos != undefined &&
        body.nome != "" &&
        Array.isArray(body.fotos) &&
        body.fotos.every(el => el != "") &&
        franquia_controller.show(body.franquia_id)
    ) {
        return {
            id,
            nome: body.nome,
            fotos: body.fotos,
            endereco: body.endereco,
            franquia_id: body.franquia_id
        }
    }
}

module.exports = model