const express = require('express');
const authMiddleware = require('../middlewares/login.middleware');


const router = express.Router()


router.post("/",authMiddleware);



module.exports = router 