const express = require('express');

const app = express();

const routesUser = require("./routes/usuarios")
const routesMonitoreo = require("./routes/monitoreo")


app.use(express.json());


app.use("/usuarios", routesUser)
app.use("/monitoreo",routesMonitoreo)



const server = app.listen(3000, () =>{
    let port = server.address().port
    console.log("running in port", port)
})
