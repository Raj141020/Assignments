const mongoose1 = require('mongoose');

const bookSchema = new mongoose1.Schema( {
    bookname:{
        type: String,
        unique: true,
        required: true
    },
    authername: String,
    category: {
        type :String,
        type:["Funny","Sci-Fi","Mystery","Thiller","Romance"],
    },
    year : Number

}, { timestamps: true });

module.exports = mongoose1.model('Book', bookSchema)