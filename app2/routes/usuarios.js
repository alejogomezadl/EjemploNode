const { response } = require("express");
const express = require("express");

const mgs = require("mongoose");

const db = require("../model/db");

const user = require("../model/user");

const routes = express.Router();

routes.route("/guardar").post((req, resp, next) => {
    if (req.body.name.length < 2) {
        resp.status(400)
        resp.json(
            {
                "error": "nombre invalido"
            })

    } else {
        mgs.model("users").create({
            "name": req.body.name,
            "lastName": req.body.lastName,
            "document": req.body.document,
            "edad": req.body.edad
        }, (err, user) => {
            console.log(user)
            resp.json(user)
        })
    }
})



routes.route("/listar").get((req, resp, next) => {


            mgs.model("users").find({},(err, users)=>{
                resp.json(users)
            })

})


routes.route("/findByDocument/:document").get((req, resp, next) => {


    mgs.model("users").find({"document":req.params.document},(err, users)=>{
        resp.json(users)
    })

})







routes.route("/consultar/:numero/:nombre").get((req, resp, next) => {
    resp.json({
        "nombre": req.params.nombre,
        "documento": req.params.numero,
        "apellido": "perez"
    })

})

routes.route("/ejemplo").get((req, resp, next) => {
    console.log("documento:", req.query.documento)
    console.log("nombre:", req.query.Nombre)
    resp.json({
        "nombre": req.query.Nombre,
        "documento": parseInt(req.query.documento),
    })

})



module.exports = routes
