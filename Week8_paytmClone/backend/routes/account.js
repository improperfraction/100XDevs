const express = require('express');
const mongo = require('mongoose');
const { authmid } = require('../authmid');
const { Account } = require('../db');
const router = express.Router();


router.get('/balance', authmid, async (req, res) => {
    const acct = await Account.findOne({
        userId: req.userid
    })

    if (acct) {
        res.json({
            "current_Balance": acct.balance
        })
    }
    else {
        res.json({
            message: "Error while processing the request"
        })
    }
});


router.put('/credit', authmid, async (req, res) => {
    const tobeAdded = req.body.creditamt;

    const acct = await Account.findOneAndUpdate({
        userId: req.userid
    }, {
        $inc: { balance: tobeAdded }
    })

    if (acct) {
        res.json({
            message: `Amoount ${tobeAdded} in the account. Current Balance: ${acct.balance}`
        })
    }
    else {
        res.json({
            message: "Error while processing the request"
        })
    }
});

    //check for sufficinat balance
    // check for benifry in db using username
    // do the tranfer, add and minus
router.post('/transfer', authmid, async (req, res) => {

    const session = await mongo.startSession();
    session.startTransaction();

    const to = req.body.to;
    const amount = req.body.amount;

    const payer = await Account.findOne({
        userId: req.userid
    }).session(session);

    if (payer.balance > amount) {
        const benifry = await Account.findOne({
            userId: to
        }).session(session);

        if (benifry) {
            const debited = await Account.findOneAndUpdate({
                userId: req.userid
            }, {
                $inc: { balance: -amount }
            }).session(session);

            if (debited) {
                const credited = await Account.findOneAndUpdate(
                    { userId: to }, {
                    $inc: { balance: amount }
                }).session(session);

                if (credited) {
                    await session.commitTransaction();
                    res.json({
                        message: `Rs. ${amount} is sent successfully`
                    });
                }
                else {
                    await session.abortTransaction();
                    res.json({
                        message: "transaction cant be completed"
                    })
                }
            }
            else {

                await session.abortTransaction();
                res.status(403).json({
                    message: "transaction cant be completed"
                })
            }
        }
        else {
            await session.abortTransaction();
            res.status(400).json({
                message: "invalid account"
            });
        }
    }
    else {
        await session.abortTransaction();
        res.status(400).json({
            message: "Insufficiant balance"
        })
    }
})

module.exports = router
