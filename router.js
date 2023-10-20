const express = require("express");
let data = require("./data");
const router = express.Router();

/** Do routing here */

//GET
//home
router.get("/",(request,response,next)=>{
    response.redirect("/html/index.html");
})
router.get("/home",(request,response,next)=>{
    response.redirect("/html/index.html");
})
//GET
router.get("/users", (req,res,next)=>{
    console.log(data.users);
    res.json(data.users);
});
router.get("/products", (req,res,next)=>{
    res.json(data.products);
});
//POST
router.post('/users', express.urlencoded({extended:false}), (req,res,next) => {
    res.send("urlencoded() with /users "+ req.method + " "+req.body);
})
router.post('/products', express.json(), (req,res,next) => {
    res.send("json() with /products "+ req.method + " "+req.body);
})
//Error url
router.get("/error", (req, res, next)=>{
    //next("Errrorr");
    throw new Error("Got an error. This page can not access!!!");
})






// finally Exporting the router for other uses
module.exports = router;