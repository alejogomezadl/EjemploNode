const mgs = require("mongoose")

const userSchema = new mgs.Schema(
    {
        name:String,
        lastName:String,
        document:String,
        edad:Number
    }
)

mgs.model("users",userSchema)