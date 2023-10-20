/** 0. import */
let express = require("express");
const path = require("path");
let router = require("./router");//local file

/** 1. instantiation */
const app = express();
/** 2. configuration */
app.enable("case sensitive routing");
/** 3. Middleware */
/** 3.1 built-in level */
app.use(express.static("./static"));
/** 3.2 routing level */
app.use(router);
/** 3.3 application level */


/** 3.4 error handling */
//handling exception
app.use((req,res,next)=>{
    res.status(404).sendFile("./html/error.html", { root: "./static" });
});

//own error handling when user types 'http://localhost:3000/error'
app.use("/error", function(err, req, res, next) {
    console.log(err.message);
    res.send(err.message);
});

/** 3.5 third 3rd party */
/** 4. next(), next('err') */

/** 5. Boot up */
//process.env.PORT
app.listen(3000, ()=>{
    console.log("server is starting...on port 3000")
})