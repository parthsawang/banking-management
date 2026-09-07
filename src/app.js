const express = require('express');
const authRouter = require('../src/routes/auth.routes')
const cookieParser = require('cookie-parser')

const app = express()

app.use("/api/auth", authRouter);
app.use(cookieParser());



module.exports = app;