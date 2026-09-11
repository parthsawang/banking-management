const userModel = require("../model/user.model");
const jwt = require("jsonwebtoken");

async function authMiddleware(req, res, next) {

    // STEP 1: Get token from cookies
    const token = req.cookies.token || "";

    if (!token) {
        return res.status(401).json({
            message: "Unauthorized"
        });
    }

    try {
        // STEP 2: Verify token and get userId from payload
        const decode = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        // STEP 3: Find user in database
        const user = await userModel.findById(decode.userId);

        if (!user) {
            return res.status(401).json({
                message: "User not found"
            });
        }

        // STEP 4: Make user available to controllers
        req.user = user;

        next();

    } catch (error) {
        return res.status(401).json({
            message: "Unauthorized user or invalid token"
        });
    }
}

module.exports = authMiddleware;



/**
 


 Client Request
      ↓
Cookie se token nikalo
      ↓
Token hai?
  ↓       ↓
 NO      YES
  ↓       ↓
401    jwt.verify()
          ↓
      decode.userId
          ↓
      findById()
          ↓
      User mila?
       ↓       ↓
      NO      YES
       ↓       ↓
      401   req.user = user
                 ↓
               next()
                 ↓
             Controller



 */