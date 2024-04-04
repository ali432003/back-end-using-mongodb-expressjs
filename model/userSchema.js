// const { Password } = require("@mui/icons-material")
const { type } = require("express/lib/response")
const mongoose = require("mongoose")

// how to structure a document in a collection a/c to signUp UI

const userSchema = new mongoose.Schema({
    name:{
        type : String,
        require:true
    },
    email:{
        type : String ,
        require : true
    },
    password : {
        type : String,
        require : true
    }
})

const Users = mongoose.model('USERS',userSchema)  // (collecName,Schema) 
module.exports = Users