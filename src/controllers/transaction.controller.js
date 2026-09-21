const transactionModel = require("../model/transation.model");

async function createTransaction(req, res) {
    const {
        fromAccount,
        toAccount,
        amount,
        idempotencyKey
    } = req.body;

    if (!fromAccount || !toAccount || !amount || !idempotencyKey) {
        return res.status(400).json({
            message: "All transaction fields are required"
        });
    }
}