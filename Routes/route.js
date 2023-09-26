const express = require('express');


const routes = express.Router();

routes.arguments("/",(req , res)=>{
    res.send("home")
})

module.exports = routes