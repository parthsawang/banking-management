const mongoose = require("mongoose");

async function connectDB() {
    console.log(process.env.MONGODB_URI);

    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("database is connected");
    } catch (error) {
        console.error("database connection error:", error);
    }
}

module.exports = connectDB