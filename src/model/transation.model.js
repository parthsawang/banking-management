const mongoose = require('mongoose');


const transationScehma = new mongoose.Schema({

    fromAccount: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "account",
        required: [true,"Transation must be associated with a from account"],
        index: true ,// we use it to make searching/querying faster.
    },

    
    toAccount: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "account",
        required: [true,"Transation must be associated with a to account"],
        index: true ,// we use it to make searching/querying faster.
    },

    status: {
        type: String,
        enum: {
            values: ["PENDING", "COMPLETED","FAILED","REVERSED"],
            message: "Status can be either PENDING < COMPLETED < FAILED and REVERSED"
        },
        
      
    },

    amount: {
            type: Number, 
            require: [true,"Amount is required for creating a transaction"],
            min: [0,"transaction amount cannot be negative"]
        },

        idempotencyKey: {
        type: String,
        required: [true, "Idempotency Key is required for creating a transaction"],
        index: true,
        unique: true
    }

}, {
    timestamps: true
});


const transactionModel = Mongoose.model("transaction", transationScehma)

module.exports = transactionModel
