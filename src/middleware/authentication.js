const jwt = require("jsonwebtoken")

const tokenAuth=async function(req,res,next){

   try{
        const key=req.headers['x-api-key']
    if(!key) { return res.status(403).send("Unauthorised access")}

    const data = jwt.verify(key,"Project 1")
    console.log(data)
    next()
}
catch(err){
    res.status(500).send({msg:err.message})
}
}

module.exports.tokenAuth=tokenAuth