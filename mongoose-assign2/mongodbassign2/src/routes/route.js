const express = require('express');
const router = express.Router();
const bookingData = require("../bookController/bookController");


router.post("/createBook", bookingData.createBook);

router.get("/bookList", bookingData.bookList);

router.post("/getBooksInYear", bookingData.getBookYear);

router.post("/getParticularBooks", bookingData.getParticularBooks);

router.get("/getXINRBooks", bookingData.getXINRBooks);

router.get("/getRandomBooks", bookingData.getRandomBooks);


module.exports = router;