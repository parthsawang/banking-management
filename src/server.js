require("dotenv").config();

const express = require("express");
const connectDB = require("./db/db");

const app = express();

app.use(express.json()) // middleware which reads data in req.body

connectDB();

app.listen(3000, () => {
    console.log("Server is running on port: 3000");
});