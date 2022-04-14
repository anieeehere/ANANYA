const bookModel = require("../models/bookModel")
const UserModel= require("../models/userModel")

// const createUser= async function (req, res) {
//     let data= req.body
//     let savedData= await UserModel.create(data)
//     res.send({msg: savedData})
// }



// const getUsersData= async function (req, res) {
//     let allUsers= await UserModel.find()
//     res.send({msg: allUsers})
// }



// const getUsersData= async function (req, res) {
//     let data1 = req.body
//     let allUsers = await UserModel.findOne(data1)
//     let aut = allUsers.author_id
//     let auth = await bookModel.findOne({author_id:aut})
//     res.send({msg: auth})
// }



 
// const getUsersData = async function (req, res) {
//     let data1 = req.body
//     let allUsers = await bookModel.findOneAndUpdate({name:"Two states"},{$set:data1},{new:true,upsert:true})
//     let aut1 = allUsers.author_id
//     let allAuthor = await UserModel.findOne({ author_id: aut1 })
//     res.send({ msg: allAuthor.author_name})
// }


const getUsersData = async function (req, res) {
    let data1 = req.body
    let allUsers = await bookModel.find({price : {$gte:50, $lte:100}})
    let aut1 = allUsers.map((x)=>x.author_id)                   
    let arr=[]
    for(let i=0; i<aut1.length; i++)
    {
    arr.push(await UserModel.find({author_id : aut1[i]}).select({author_name:1,_id:0}))
    }
    res.send({ msg: arr})

}


module.exports.createUser= createUser
module.exports.getUsersData= getUsersData