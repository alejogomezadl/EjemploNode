const express = require('express');

const app = express();

const routesUser = require("./routes/usuarios")


app.use("/usuarios", routesUser)



const server = app.listen(3000, () =>{
    let port = server.address().port
    console.log("running in port", port)
})
