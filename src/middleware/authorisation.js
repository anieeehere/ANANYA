const jwt = require("jsonwebtoken")

const tokenAuth=async function(req,res,next){

   try{ const key=req.headers['x-api-key']
    if(!key) { return res.status(403).send("Unauthorised access")}

    const data = jwt.verify(key,"Project 1")
    console.log(data)
    let authorId ;
    if (req.query.authorId)
     authorId = req.query.authorId

    else if (req.body.authorId)
     authorId = req.body.authorId

    else if (req.param.authorId)
     authorId = req.param.authorId
     
    if(authorId!=data.id){
         return res.status(403).send({status:false,msg:"Unauthorised matched"})
    }
    next()}
catch(err){
    res.status(500).send({msg:err.message})
}
}

module.exports.tokenAuth=tokenAuth