const userModel = require("../model/user.model");
const jwt = require("jsonwebtoken");

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
}

module.exports = registerController;