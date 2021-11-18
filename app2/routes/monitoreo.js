const express = require("express");

const routes = express.Router();

const monitoreoService = require("../service/calidadAire")

routes.route("/porcentajes").get((req, resp, next) => {

    let maxPM10 = req.query.maxpm10;
    let actualPM10 = req.query.actualpm10;
    let maxPM30 = req.query.maxpm30;
    let actualPM30 = req.query.actualpm30;


    let resultado = monitoreoService.calcularPorcentaje(maxPM10, actualPM10, maxPM30, actualPM30);

    resp.json(resultado)

})


module.exports = routes