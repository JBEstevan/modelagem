const barbearia_controller = require("../controllers/barbearia.js")

let nextId = 1;

const model = (body, id = nextId++) => {
    if (
        body.nome != undefined &&
        body.bio != undefined &&
        body.foto != undefined &&
        body.nome != "" &&
        body.bio != "" &&
        body.foto != "" &&
        barbearia_controller.show(body.barbearia_id)
    ) {
        return {
            id,
            nome: body.nome,
            bio: body.bio,
            foto: body.foto,
            barbearia_id: body.barbearia_id
        }
    }
}

module.exports = model