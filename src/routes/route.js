const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)

router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)

router.get("/cowin/getByPin", CowinController.getByPin)

router.post("/cowin/getOtp", CowinController.getOtp)

//Key is 8bfe752e8fd0f8f1a1ceba98e24a0bd9

/*Question 1. WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date */

router.get("/cowin/vaccinationsession",CowinController.getlist)

/*Question 2. Part 1 --> get weather of London*/

router.get("/weather/London",CowinController.getlondanweather)

/*Question 2. Part 2 --> then change the above to get the temperature only( of London)*/

router.get("/weather/London/temponly",CowinController.getlondanweathertemponly)

/*Question 2. Part 3 --> Sort the cities  ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"] in order of their increasing temperature*/

router.get("/weather/London/sorted",CowinController.getweathersorted)

/* Question 3 Part 1*/

router.get("/memes",CowinController.memes)

/* Question 3 Part 2*/

router.post("/memes",CowinController.getmemes)




module.exports = router;