let axios = require("axios")


let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getOtp = async function (req, res) {
    try {
        let blahhh = req.body
        
        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

//Question 1 

let getlist = async function (req, res) {
    try {
        let district_id = req.query.district_id
        let date = req.query.date
        console.log(`query params are: ${district_id} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district_id}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

//Question 2 // Part 1

let getlondanweather = async function (req, res) {
    try {
        let appid = req.query.appid
        console.log(`query params are: ${appid}`)
        var options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=London&appid=${appid}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

//Question 2 // Part 2

let getlondanweathertemponly = async function (req, res) {
    try {
        let appid = req.query.appid
        console.log(`query params are: ${appid}`)
        var options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=London&appid=${appid}`
        }
        let result = await axios(options)
        console.log(result.data.main.temp)
        res.status(200).send({ msg: result.data.main.temp })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

//Question 2 // Part 3

let getweathersorted = async function (req, res) {
    try {
        let appid = req.query.appid
        let cities = ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let arr = []
        for(let i=0;i<cities.length;i++){
            var options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=${appid}`
        }

        let result = await axios(options)
        console.log("Data is -------------------->")
        console.log(result.data)
        arr.push({city:cities[i],temp:result.data.main.temp})
        console.log("UnSorted answer is -------------------->")
        console.log(arr)
        }
        arr.sort((a,b)=>a.temp - b.temp)
        console.log("Sorted answer is -------------------->")
        console.log(arr)
        res.status(200).send({ msg: arr })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

//Question 3 Part 1

let memes = async function (req, res) {
    try {
        var options = {
            method: "get",
            url: `https://api.imgflip.com/get_memes`
            
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

//Question 3 Part 2

let getmemes = async function (req, res) {
    try {
        const template_id = req.query.template_id
        const text0 = req.query.text0
        const text1 = req.query.text1
        const username  = req.query.username
        const password  = req.query.password
        console.log(`query params are: ${template_id} ,${text0}, ${text1}, ${username}, ${password}`)
        var options = {
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_id=${template_id}&test0=${text0}&test1=${text1}&username=${username}&password=${password}`

        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}



module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp
module.exports.getlist =getlist
module.exports.getlondanweather =getlondanweather
module.exports.getlondanweathertemponly =getlondanweathertemponly
module.exports.getweathersorted =getweathersorted
module.exports.getmemes =getmemes
module.exports.memes =memes
