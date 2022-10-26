const books = require("../bookModel/bookModel");

//Book Created

const bookInput= async function (req, res) {
    let data= req.body
    let savedData= await books.create(data)
    res.send({msg: savedData})
}

//Book List

const allData= async function (req, res) {
    let allBookData= await books.find().select( { bookName: 1, authorName: 1, _id: 0 } );
    res.send({msg: allBookData})
}

//Book year 

const getBookYear= async function (req, res) {
    let data = req.query.year
    let yearData =await books.find( { year: { $eq: data } } ).select( { bookName: 1,_id: 0 } );
    res.send({msg:yearData})
}

//Particular Books

const getParticularBooks= async function (req, res) {
    let data = req.body
    let yearData =await books.find( data ).select( { bookName: 1,_id: 0 } );
    res.send({msg:yearData})
};

//XINRBooks

const getXINRBooks = async function (req, res) {
    let allBooksData = await books.find({ "price.indianRupees": { $in: ["₹200", "₹250", "₹500"] } }).select({ bookName: 1, _id: 0 });
    res.send({ allBookInfo: allBooksData });
  };

//RandomBooks

  const getBooks = async function (req, res) {
    let allBooksData = await books.find({ totalPages: { $gte: 500 }, stockAvailable: true }).select({ bookName: 1, _id: 0 });
    res.send({ allBookInfo: allBooksData });
  };
  


  module.exports.createBook = bookInput;
  module.exports.bookList = allData;
  module.exports.getBookYear = getBookYear;
  module.exports.getParticularBooks = getParticularBooks;
  module.exports.getXINRBooks = getXINRBooks;
  module.exports.getRandomBooks = getBooks;