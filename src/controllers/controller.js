const books = require("../models/booksModel");
const authors = require("../models/authersModel");


const bookInput = async function (req, res) {
  let data = req.body;
  let savedData = await books.create(data);
  res.send({ booksInfo: savedData });
};


const authorInput = async function (req, res) {
  let data = req.body;
  let savedData = await authors.create(data);
  res.send({ authorsInfo: savedData });
};


const getData = async function (req, res) {
  let allData = await authors.findOne({ author_name: "Chetan Bhagat" }).select({ author_id: 1 });
  let getBookData = await books.find({ author_id: { $eq: allData.author_id } });
  res.send({ allBookInfo: getBookData });
};


const getResult = async function (req, res) {
  let findAuthorName = await books.findOneAndUpdate(
    { name: "Two states" },
    { $set: { price: 100 } },
    { new: true }
  );

  let result = await books.findOne({ name: "Two states" }).select({ price: 1, _id:  0});
  let finalResult = await authors.findOne({ author_id: findAuthorName.author_id }).select({ author_name: 1, _id: 0 });
  res.send([finalResult, result]);
};



const findBook = async function (req, res) {
  let allData = await books.find({ price: { $gte: 50, $lte: 100 } });
  let fetch = allData.map((x) => x.author_id);
  let newData = await authors.find({ author_id: fetch }).select({ author_name: 1, _id: 0 });
  res.send({ allBookInfo: newData });
};


module.exports.createBooksData = bookInput;
module.exports.createAuthorsData = authorInput;
module.exports.getAllData = getData;
module.exports.getResult = getResult;
module.exports.findBook = findBook;