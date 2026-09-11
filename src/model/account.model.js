const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "Account must be associated with user"],
        index: true
    },

    accountNumber: {
        type: String,
        required: [true, "Account number is required"],
        unique: true // fast searching/querying
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

/*
{ email: 1 }   // ascending
{ email: -1 }  // descending
*/

accountSchema.index({user: 1 , email: 1}) // compound index   

module.exports = mongoose.model("Account", accountSchema);