const mongoose = require("mongoose")
const DB = process.env.DATABASE

mongoose.connect(DB).then(() => {
    console.log("Connection sucessfull")
}).catch((err) => {
    console.log("error Occured", err)
})