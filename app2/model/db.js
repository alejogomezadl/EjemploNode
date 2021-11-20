const conn = require("mongoose");

conn.connect("mongodb://localhost:27017/misiontic2", (err, db) => {

    if (err) {
        throw err
    }

    console.log("base de datos conectada")

})


module.exports = conn;