const transactionModel = require("../model/transation.model");
const ledgerModel = require('../model/ledger.model')
const accountModel = require('../model/ledger.model')
async function createTransaction(req, res) {
    const {
        fromAccount,
        toAccount,
        amount,
        idempotencyKey
    } = req.body;


    /**
     * --Validates Request
     */

    if (!fromAccount || !toAccount || !amount || !idempotencyKey) {
        return res.status(400).json({
            message: "All transaction fields are required"
        });
    }
}


