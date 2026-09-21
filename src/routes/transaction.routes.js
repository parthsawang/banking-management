const {Routes} = require('express');
const authMiddleware = require('../middlewares/login.middleware');



const transactionRoutes = Routes();
/**
 * --POST /api/transation 
 * -Create a new transaction 
 */

transactionRoutes.post("/",authMiddleware.authMiddleware);

module.exports = transactionRoutes;