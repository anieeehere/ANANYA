const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const AuthorModel= require("../models/authorModel")
const publishermodel= require("../models/publisherModel")

//question 3

const createBook = async function (req, res) {
    let book = req.body
    let check = await AuthorModel.findOne({ _id: book.author_id })
    let check1 = await publishermodel.findOne({ _id: book.publisher_id })
    if (book.author_id && book.publisher_id) {
        if (check === null) {
            res.send("author is not persent")
        }
        else if (check1 === null) {
            res.send("publisher is not persent")
        }
        else {
            let bookCreated = await bookModel.create(book)
            res.send({ data: bookCreated })
        }
    }
    else { res.send("detail is required") }
     //res.send({msg:check})
}

//question 4

const getBooksData = async function (req, res) {
    let books = await bookModel.find()
    res.send({ data: books })
}


// const getBooksWithAuthorDetails = async function (req, res) {
//     //let kd = publisher_id.name
//     let check1 = await PublisherModel.findOne({name: "Penguin"}).select('_id')
//     let specificBook = await bookModel.updateMany({publisher_id : check1},{$set:{isHardCover:true}})
//    // res.send({ data: specificBook })


//updateMany({publisher_id : check1},{$set:{isHardCover:true}})
const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author_id').populate('publisher_id')
    res.send({ data: specificBook })

}

//-----5

const updateBookData = async function (req, res) {
    //let kd = publisher_id.name
    let check1 = await publishermodel.findOne({name: "Penguin"}).select('_id')
    let specificBook = await bookModel.updateMany({publisher_id : check1},{$set:{isHardCover:false}})
    res.send({ data: specificBook })

}

const updateBookPrice= async function(req,res){
    let check = await AuthorModel.find({ratings:{$gt:4.5}}).select('_id')
    let bookdata=await bookModel.updateMany({author_id:check},{$inc:{price:10}})
    res.send({data:bookdata})
}


//question 1

const createAuthor = async function (req, res) {
    let author = req.body
    let authorCreated = await AuthorModel.create(author)
    res.send({ data: authorCreated })
}

const getAuthorsData = async function (req, res) {
    let authors = await AuthorModel.find()
    res.send({ data: authors })
}

//question 2

const createPublisher = async function (req, res) {
    let publisher1 = req.body
    let publisherCreated = await publishermodel.create(publisher1)
    res.send({ data: publisherCreated })
}

const getpublisherData = async function (req, res) {
    let publisher = await publishermodel.find()
    res.send({ data: publisher })
}

module.exports ={ createPublisher,updateBookPrice,createBook, getBooksData, getBooksWithAuthorDetails, createAuthor, getAuthorsData, updateBookData, }
