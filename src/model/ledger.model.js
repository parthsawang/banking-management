const { Accounts } = require('@imagekit/nodejs/resources.js');
const mongoose  = require('mongoose');


const ledgerSchema = new mongoose.Schema({
    Accountsccount: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "account",
        required: [true, "Ledger must be associated with an account"],
        index: true,
        immutable: true
    },

    amount: {
        type: Number,
        immutable: true,
        required: [true , "amount is required a legder entry"],
    },

    transaction: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "transaction",
        required: [ true , "ledger musr be assocaited with a transaction"],
        index: true,
        immutable: true,
    },

    type:{
        type: String,
        enum: {
            values: ["CREDIT" , "DEBIT"],
            message: "type can be either CREDIT OR DEBIT"
        },
        required: [true, "ledger musr be assocaited with a transaction"],
        immutable: true,
        index: true
    }
})