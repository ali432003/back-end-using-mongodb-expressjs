const express = require('express')
const Router = express.Router()

require("../db/conn")
const User = require("../model/userSchema")
const Userprod = require("../model/prodSchema")
const Cart = require("../model/cartSchema")


Router.get('/', (req, res) => {
    res.send('Hello World! from home of router')
})

Router.get('/about',(req,res)=>{
    res.send("Hello world from about page of router")
})





// using Promises
Router.post('/register', (req, res) => {
    // console.log(req.body)
    // res.json({ message: req.body })
    // res.send("registar wala pagee agiya bhaiii")

    const { name, email, password } = req.body;

    User.findOne({ email: email }).then((userExist) => {
        if (userExist) {
            res.status(422).json({ error: "User is already exist same email occured" })
            return
        }

        const user = new User({ name, email, password })
        user.save().then(() => {
            res.status(201).json({ mesaage: "Data is succesfly uploaded in DB" })
        }).catch((err) => { res.status(500).json({ error: "failed To registered" }) })

    }).catch((e) => { console.log(e) })

})

Router.post('/registerOfCart', (req, res) => {
    // console.log(req.body)
    // res.json({ message: req.body })
    // res.send("registar wala pagee agiya bhaiii")

    const { prodName, price, thumbnail_img } = req.body;

    const cartItem = new Cart({ prodName, price, thumbnail_img })

    cartItem.save().then(() => {
        res.status(201).json({ mesaage: "Data is succesfly uploaded in DB" })
    }).catch((err) => { res.status(500).json({ error: "failed To upload cart in DB" }) })



})

Router.post('/registerOfProd', (req, res) => {
    // console.log(req.body)
    // res.json({ message: req.body })
    // res.send("registar wala pagee agiya bhaiii")

    const { prod_name,
        cate,
        price,
        thumbnail,
        desc,
        images } = req.body;



    const userProd = new Userprod({
        prod_name,
        cate,
        price,
        thumbnail,
        desc,
        images
    })
    userProd.save().then(() => {
        res.status(201).json({ mesaage: "Data is succesfly uploaded in DB" })
    }).catch((err) => { res.status(500).json({ error: "failed To registered" }) })



})




module.exports = Router