// firebase init
const functions = require("firebase-functions");


// express init
const express = require('express');
const app = express();

// Router init
const parking =require("../route/parking/parking");
const Serial = require("../route/parking/Serial")

// MiddleWare
app.use(function (req, res, next) {
    console.log("[Middle] ## Received HTTP Request ##");
    console.log("[Middle] Request : " + req.method + " " + req.url);
    console.log("[Middle] Content-Type : " + req.header("Content-Type"));

    next();
});




app.listen(5000, '0.0.0.0');



// Route Start
//app.use("/auth", auth);
app.use("/parking", parking);
app.use("/",Serial);

exports.app = functions.https.onRequest(app);
