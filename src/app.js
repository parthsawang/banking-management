const express = require('express');
const cookieParser = require('cookie-parser');


const app = express();



app.use(express.json());
app.use(cookieParser());


/**
 * -Routes Require
 */
    const authRouter = require('./routes/auth.routes');
    const accRouter = require('./routes/account.routes');


 /**
  * -Routes use
  */
     app.use("/api/auth", authRouter);
     app.use("/api/accounts",accRouter)





module.exports = app;