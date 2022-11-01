// const authorModel = require("../models/authorModel")
// const bookModel= require("../models/bookModel")

const bookModel = require("../models/newBookModel");
const authorDetails = require("../models/newAuthorModel");
const publisherDetails = require("../models/newPublisherModel");


const createBook = async function (req, res) {
    let book = req.body;
    if (!book.author) { return res.send("AuthorId detail is required") };
    if (!book.publisher) { return res.send("PublisherId detail is required") };
    let checkIdOfAuthor = await authorDetails.findById(book.author)
    let checkIdOfpublisher = await publisherDetails.findById(book.publisher)
    if (!checkIdOfAuthor) { return res.send("Please check AuthorId") };
    if (!checkIdOfpublisher) { return res.send("Please check PublisherId") };
    let bookCreated = await bookModel.create(book);
    res.send({ data: bookCreated });
};

const getBooksData = async function (req, res) {
    let books = await bookModel.find();
    res.send({ data: books });
};


const getBooksWithAuthorAndPublisherDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate(["author", "publisher"])
    res.send(specificBook);

};

const updateOldBook = async function (req, res) {
    let books = await bookModel.findByIdAndUpdate(
        { _id: "636141d3dfe20c29e7cc7497" },
        { $set: { isHardCover: false } },
        { new: true, upsert: true }
    )
    res.send(books)
}


const updateNewBook = async function (req, res) {
    let findDataPublisher = await publisherDetails.find({ name: { $in: ["Penguin", "HarperCollins"] } })
    let fetch = findDataPublisher.map(x => x._id)
    let books = await bookModel.updateMany(
        { publisher: fetch },
        { $set: { isHardCover: true } },
        { new: true }
    )
    res.send(books)
}

const updatePriceOfBook = async function (req, res) {
    let findDataAuthor = await authorDetails.find({ rating: { $gt: 3.5 } })
    let fetch = findDataAuthor.map(x => x._id)
    let books = await bookModel.updateMany(
        { author: fetch },
        { $inc: { price: 10 } },
    )
    res.send(books)
}


module.exports.createBook = createBook;
module.exports.getBooksData = getBooksData;
module.exports.getBooksWithAuthorAndPublisherDetails = getBooksWithAuthorAndPublisherDetails
module.exports.updateOldBook = updateOldBook
module.exports.updateNewBook = updateNewBook
module.exports.updatePriceOfBook = updatePriceOfBook

// const createBook= async function (req, res) {
//     let book = req.body
//     let bookCreated = await bookModel.create(book)
//     res.send({data: bookCreated})
// }

// const getBooksData= async function (req, res) {
//     let books = await bookModel.find()
//     res.send({data: books})
// }

// const getBooksWithAuthorDetails = async function (req, res) {
//     let specificBook = await bookModel.find().populate('author_id')
//     res.send({data: specificBook})

// }

// module.exports.createBook= createBook
// module.exports.getBooksData= getBooksData
// module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
