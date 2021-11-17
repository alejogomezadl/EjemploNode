const express = require("express");

const routes = express.Router();


routes.route("/consultar/:numero/:nombre").get((req, resp, next) => {


        resp.json({
            "nombre":req.params.nombre,
            "documento": req.params.numero,
            "apellido":"perez",
            "count":count
        })



})

module.exports= routes
