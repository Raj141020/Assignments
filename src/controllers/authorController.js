// const AuthorModel= require("../models/authorModel");
const AuthorModel = require("../models/newAuthorModel");

// const createAuthor= async function (req, res) {
//     let author = req.body
//     let authorCreated = await AuthorModel.create(author)
//     res.send({data: authorCreated})
// }

// const getAuthorsData= async function (req, res) {
//     let authors = await AuthorModel.find()
//     res.send({data: authors})
// }

//Create Data

const createAuthor = async function (req, res) {
    let author = req.body;
    let authorCreated = await AuthorModel.create(author);
    res.send({ data: authorCreated });
  };


//Fetch Data

const getAuthorsData = async function (req, res) {
    let authors = await AuthorModel.find();
    res.send({ data: authors });
  };

// module.exports.createAuthor= createAuthor
// module.exports.getAuthorsData= getAuthorsData

module.exports.createAuthor = createAuthor;
module.exports.getAuthorsData = getAuthorsData;