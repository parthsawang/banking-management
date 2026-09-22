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
 * - Create a new transaction
 * THE 10-STEP TRANSFER FLOW:
     * 1. Validate request
     * 2. Validate idempotency key
     * 3. Check account status
     * 4. Derive sender balance from ledger
     * 5. Create transaction (PENDING)
     * 6. Create DEBIT ledger entry
     * 7. Create CREDIT ledger entry
     * 8. Mark transaction COMPLETED
     * 9. Commit MongoDB session
     * 10. Send email notification
 */

    if (!fromAccount || !toAccount || !amount || !idempotencyKey) {
        return res.status(400).json({
            message: "fromACcount , toAccount , amount and idempotencyKey is required "
        });
    }

    const fromUserAccount = await accountModel.findOne({
        _id: fromAccount,
    })

     const toUserAccount = await accountModel.findOne({
        _id: toAccount,
    })

    if(!fromUserAccount || !toUserAccount){
         return res.status(404).json({
            message: "Account is not Found"
        });
    }

}




