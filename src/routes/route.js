const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const commonMW = require ("../middlewares/commonMiddlewares")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//Can we set the 'next' input parameter in a route handler?
//What is the primary difference between a middleware and a route handler?
// router.post("/createBook", commonMW.myMiddleware,BookController.createBook, function(req, res, next){
//     res.send("Ending the cycle")
// } );

/* --------------------------------------My Code------------------------------------------------------------ */

const { createUser, getUser } = require("../controllers/userController")
const { createProduct, getProductDetails } = require("../controllers/productController")
const { createOrder, getAllOrderData } = require("../controllers/orderController")
const { midHeader, midUserId, midProductId, midCheckUserData, isFreeAppUser } = require("../middlewares/validation")

router.post("/createUser", midHeader, midCheckUserData, createUser)
router.get("/getAllUser", getUser)

router.post("/createProduct", createProduct)
router.get("/getProductDetails", getProductDetails)

router.post("/createOrder", isFreeAppUser, midHeader, midUserId, midProductId, midCheckUserData, createOrder)
router.get("/getAllOrderData", getAllOrderData)

/* -----------------------------------------------------------------------------------------------------------  */

// router.post("/createUser", commonMW.myMiddleware, UserController.createUser)

// router.get("/dummy1", commonMW.myOtherMiddleware, UserController.dummyOne)

// router.get("/dummy2", commonMW.myOtherMiddleware, UserController.dummyTwo)

// router.get("/basicRoute", commonMW.mid1, commonMW.mid2, commonMW.mid3, commonMW.mid4, UserController.basicCode)

module.exports = router;