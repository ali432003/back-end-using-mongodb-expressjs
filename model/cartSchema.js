// const { Password } = require("@mui/icons-material")
const { type } = require("express/lib/response")
const mongoose = require("mongoose")

// how to structure a document in a collection a/c to addToCart UI

const cartSchema = new mongoose.Schema({
    prodName:{
        type : String,
        require:true
    },
    price:{
        type : String ,
        require : true
    },
    thumbnail_img : {
        type : String,
        require : true
    }
})


const Cart = mongoose.model('Cart',cartSchema)  // (collecName,Schema) 
module.exports = Cart