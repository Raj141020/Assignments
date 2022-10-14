const express = require('express');
//importing external packages
const express1 = require('lodash');
const router = express.Router();///test-you


const ques1 = require('../logger/logger');
const ques2 = require('../util/helper');
const ques3 = require('../validator/formatter')

//importing external package
// const underscore = require('underscore')



router.get('/test-me', function (req, res) {
    console.log("Problem 1 answer is --------");
    ques1.printdetails();
    console.log("Problem 2 answer is ---------");
    ques2.printDate();
    console.log("Problem 3 answer is ---------");
    ques3.trim();
    console.log("Problem 4 answer is ----------");
    
    const monts = ["Jan","Fab","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];
    console.log(express1.chunk(monts,[4]));

    const oddno = [1,3,5,7,9,11,13,15,17,19];
    console.log(express1.tail(oddno,[]));

    const arr1 =[2,2,3,2];
    const arr2 =[1,2,3];
    const arr3 =[5,2];
    const arr4 =[1,2,3,4,5,6,7];
    const arr5 =[2,12,7,8];

    const ans = express1.union(arr1,arr2,arr3,arr4,arr5);
    console.log(ans);


    const pairs = [
        ["horror","The Shining"],
        ["drama","Titani"],
        ["thriller","Shutter Island"],
        ["fantasy","Pans Labyrinth"]
    ];

    const obj = express1.fromPairs(pairs);
    console.log(obj)
    
    
    res.send('Welcome to my application my name is Raj Nagwanshi and I am from lithium cohort')

    
});
router.get("/give-me-students-data",function(req,res) {});

module.exports = router;

