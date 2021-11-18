const express = require("express");

const routes = express.Router();


routes.route("/consultar/:numero/:nombre").get((req, resp, next) => {
        resp.json({
            "nombre":req.params.nombre,
            "documento": req.params.numero,
            "apellido":"perez"
        })

})

routes.route("/listar").get((req, resp, next) => {
console.log("documento:", req.query.documento)
console.log("nombre:", req.query.Nombre)
    resp.json({
        "nombre":req.query.Nombre,
        "documento": parseInt(req.query.documento),
    })

})







module.exports= routes
