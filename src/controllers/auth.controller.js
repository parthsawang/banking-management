const userModel = require('../model/user.model');
const jwt = require('jsonwebtoken');

async function loginController(req,res) {

    const { email , password , name } = req.body

    // check weather user is already exist or not 
    const isExists= await userModel.findOne({
        email: email
    })

    if(isExists){
        return res.status(422).json({
            message: "user is already exist with email."
        })
    }

    // creating new user here

    const user = await userModel.create({
        email , password , name
    });


    // generating jwt token
    

    const token = jwt.sign({
        userId: user._id,   // payload
    }, process.env.JWT_SECRET, {
        expiresIn: "3d"
    }
)




        
    }
    













module.exports = loginController