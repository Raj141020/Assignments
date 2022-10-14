const express = require('express');
const router = express.Router();///test-you
//importing a custom module
const xyz = require('../logger')
//importing external package
const underscore = require('underscore')
//My code
const ques1 = require('../logger/logger');

router.get('/test-me', function (req, res) {
    console.log("Problem 1 answer is ");
    ques1.printdetails();
    //Calling the components of a different custom module
    // console.log("Calling my function ",xyz.myFunction())
    // console.log("The value of the constant is ",xyz.myUrl)
    //Trying to use an external package called underscore
    // let myArray = ['Razzz', 'Pritesh', 'Sabiha']
    // let result = underscore.first(myArray)
    // console.log("The result of underscores examples api is : ", result)
    
    res.send('Welcome to my application my name is Raj Nagwanshi and I am from lithium cohort')

    //To be tried what happens if we send multiple response
    //res.send('My second api!')
});

module.exports = router;

