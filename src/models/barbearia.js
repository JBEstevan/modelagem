const franquia_controller = require("../controllers/franquia.js")

let nextId = 1;

const model = (body, id = nextId++) => {
    if (
        franquia_controller.show(body.franquia_id)
    ) {
        
    }
}