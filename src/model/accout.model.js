const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "Account must be associated with user"]
    },

    accountNumber: {
        type: String,
        required: [true, "Account number is required"],
        unique: true
    },

    status: {
        type: String,
        enum: {
            values: ["active", "blocked", "closed"],
            message: "Status must be active, blocked, or closed"
        },
        default: "active"
    },

    currency: {
        type: String,
        required: [true , "currency is required for acc details"],
        default: "INR"
    },

  

}, {
    timestamps: true
});

module.exports = mongoose.model("Account", accountSchema);