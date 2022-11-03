const mongoose = require('mongoose');

const productSchema = mongoose.Schema ( {
    name:String,
    ccategory:String,
    price:{
        type:Number,
        required: true
    }

}, { timestamps: true } );

module.exports = mongoose.model('Product', productSchema);
