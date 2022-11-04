const JWT = require("jsonwebtoken");

//If token is not present in the request header return error. This means the user is not logged in.

const auth = async function (req, res, next) {
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
    if (!token) return res.send("Can't find Token. It must be present");
      console.log(token);
    next();
}

module.exports = auth