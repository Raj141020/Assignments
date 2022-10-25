const books= require("../bookschema/bookschema")

const userInput= async function (req, res) {
    let data= req.body
    let savedData= await books.create(data)
    res.send({bookInformation: savedData})
}

const allData= async function (req, res) {
    let allBooksData= await books.find()
    res.send({allBookInformation: allBooksData})
}

module.exports.booksName= userInput
module.exports.allBooksName= allData