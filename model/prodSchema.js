// const { Password } = require("@mui/icons-material")
const { type } = require("express/lib/response")
const mongoose = require("mongoose")

// how to structure a document in a collection a/c to sellProd UI

const prodSchema = new mongoose.Schema({
    prod_name: {
        type : String,
        required: true
    },
    cate: {
        type: String,
        required:true
    },
    price: {
        type : String,
        require: true
    },
    thumbnail: {
        type : String,
        require:true
    },
    desc: {
        type:String,
        require:true
    },
    images: {
        type : [String],
        require : true

    },
})

const Userprods = mongoose.model('USER PRODUCTS',prodSchema)  // (collecName,Schema) 
module.exports = Userprods