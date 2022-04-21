const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

////
const mid1= function(req,res,next){
    let token = req.headers["x-Auth-token"];
    if (!token) {token = req.headers["x-auth-token"]}
  
    //If no token is present in the request header return error
    if (!token) {return res.send({ status: false, msg: "token must be present" })}
  
    console.log(token);
    let decodedToken = jwt.verify(token, "Cohort");
  if (!decodedToken)
    {return res.send({ status: false, msg: "token is invalid" })}
    next()
}

const mid2= function(req,res,next){
let value = req.headers["x-auth-token"]
    if (value !== undefined) { 
        next()
    }
    else { res.send("header is not persent") }
}




module.exports.mid1=mid1
module.exports.mid2=mid2

