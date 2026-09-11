const express = require('express');
const authMiddleware = require('../middlewares/login.middleware');
const creatAccountController = require('../controllers/account.controller')

const router = express.Router()


router.post("/",authMiddleware,creatAccountController);



module.exports = router 