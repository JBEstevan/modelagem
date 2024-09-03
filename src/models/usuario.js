let nextId = 1;

const model = (body, id = nextId++) => {
    if (
        body.email != undefined &&
        body.senha != undefined &&
        body.email != "" &&
        body.senha != "" &&
        body.senha.length > 4
    ) {
        return {
            id,
            email: body.email,
            senha: body.senha
        }
    }
}

module.exports = model