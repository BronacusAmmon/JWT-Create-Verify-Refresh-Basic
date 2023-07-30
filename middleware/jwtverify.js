const jwt = require("jsonwebtoken")

require('dotenv').config();


exports.jwtverify = (req, res, next) =>{
    const token = req.headers["bearer"]
    if(!token){
        return res.status(403).json({success: false, message:"Token not found"})
    }
    try{
        const jwtData = jwt.verify(token, process.env.jwt_secret || "badsecret")
        res.locals.token = jwtData.data
    } catch(err){
        return res.status(401).json({success: false, message:"Invalid Token"})
    }
    next();
}