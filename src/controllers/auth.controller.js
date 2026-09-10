const userModel = require("../model/user.model");
const jwt = require("jsonwebtoken");
const emailService = require("../services/email.services")

async function registerController(req, res) {
    const { email, password, name } = req.body;

    const isExists = await userModel.findOne({
        email: email
    });

    if (isExists) {
        return res.status(422).json({
            message: "user already exists with email."
        });
    }

    const user = await userModel.create({
        email,
        password,
        name
    });

    const token = jwt.sign(
        {
            userId: user._id
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "3d"
        }
    );

    res.cookie("token", token);

    res.status(201).json({
        _id: user._id,
        email: user.email,
        name: user.name
    });

    await emailService.sendRegistrationEmail(user.email,user.name)
}

async function loginController(req,res){
    // STEP 1 = Fetching required data from body
    const { email , password} = req.body




    // STEP 2 =finding real user from database by email 
    const user = await userModel.findOne({
        email: email 
    }).select("+password")




    if(!user){
        return res.status(401).json({
            message: "Email or Password is INVALID"
        })
    }
   
// STEP 3 : if user finds and compare password
    
    const isValidPassword = await user.comparePassword(password) // used a Schema Instance Method


   // const isValidPassword = await bcrpyt.compare(password , user.password)


   // checks weather password is correct or not 
    if (!isValidPassword) {
    return res.status(401).json({
        message: "Email or Password is INVALID"
    });
}

// STEP 4: if Valid user then generate token with user responase 

const token = jwt.sign(
    {
        userId: user._id
    },
    process.env.JWT_SECRET,
    {
        expiresIn: "3d"
    }
);

res.cookie("token", token);

res.status(200).json({
    _id: user._id,
    email: user.email,
    name: user.name
});





}

module.exports = {registerController , loginController };
