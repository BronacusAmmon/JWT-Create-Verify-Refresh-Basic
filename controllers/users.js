//internal includes
const log = require("../utils/log"),
    { users } = require("../utils/db")

    //external includes
const jwt = require("jsonwebtoken"),
            bcrypt = require('bcrypt')
require('dotenv').config();

const userEditJWT = Object.freeze(["favoriteColor"])
     
exports.login = async (req, res) =>{
    //both email and password should start with an upper case for this example
    let {email, password} = req.body;

    if(email == undefined|| password == undefined) {
        return res.status(422).json({success:false, message:"Missing required data"}) 
    }
    //finding the user with matching email simulating the search from the DB
    const user = users.find((user) =>{
        return email == user.email
    })
    if(user == undefined){
        return res.status(401).json({success: false, message: "No user found"})
    } 
    //comparing passwords
    const login = await bcrypt.compare(password, user.password);
    //if password incorrect
    if(!login){
        return res.status(200).json({success: false, message:"Password mismatch"})
    }
    else {

    //if password is correct, destructucturing user object sending them any nonsensitive data
    const { favoriteColor } = user
        //sign and send token
    jwt.sign({
        data: {
            email,
            favoriteColor,
        },
        },
        process.env.jwt_secret || "badsecret",
        {
        expiresIn: '10m'
        },
        
        (err, token) =>{
            if(err){
                log.error(err)
                throw new Error(`Error ${err} occured when signing token`)
            }
            else{
                res.status(200).json({success: true, token})
            }
        })
    }
}

exports.refresh = async (req, res) =>{
    //a request that should be triggered if the previous token is close to expiring or if there is updated data
    let {token} = res.locals;

    //however many sets of key value pairs are sent are added to the new data object if allowed to be changed by user in this way 
    for (const [key, value] of Object.entries(req.body)) {
        if(userEditJWT.includes(key)){
            token[key] = value;
        }
      }

      try{
        //regens token and sends
        const newToken = jwt.sign({
            data: {
                token 
            },
            },
            process.env.jwt_update || "badupdatepassword",
            {
            expiresIn: '10m'
            })
            res.status(201).json({success: true, newToken})
    } catch(err){
            log.error(err)
            throw new Error(`Error ${err} occured when creating new token`)
    }
}
