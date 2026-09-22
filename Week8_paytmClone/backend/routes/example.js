
router.post("/transfer", authmid, async (req, res) => {

    const session = await mongo.startSession();
    session.startTransaction()

    const to = req.body.to;
    const amount = req.body.amount;

    const payer = await Acccount.findOne({
        userId: req.userId
    }).session(session);

    if (payer) {
        if (payer.balance >= amount) {
            const receiver = await Acccount.findOne({
                userId: to
            }).session(session);

            if (receiver) {
                const deducted = await Acccount.findOneAndUpdate({
                    userId: req.userId
                },
                    {
                        $inc: {
                            balance: -amount
                        }
                    }).session(session);

                if (deducted) {
                    const added = await Acccount.findOneAndUpdate({
                        userId: to
                    },
                        {
                            $inc: {
                                balance: +amount
                            }
                        }).session(session);
                    if (added) {
                        console.log({
                            userId: req.userId,
                            counterParty: to,
                            amount: amount,
                            status: "sent"
                        });
                        const payerTransaction = await Transaction.create({
                            userId: mongo.Types.ObjectId(req.userId),
                            counterParty: mongo.Types.ObjectId(to),
                            amount: amount,
                            status: "sent",
                        }, { session, ordered: true });

                        if (payerTransaction) {
                            console.log({
                                userId: mongoose.Types.ObjectId(to),
                                counterParty: mongoose.Types.ObjectId(req.userId),
                                amount: amount,
                                status: "received"
                            });
                            const receiverTransaction = await Transaction.create({
                                userId: mongo.Types.ObjectId(to),
                                counterParty: mongo.Types.ObjectId(req.userId),
                                amount: amount,
                                status: "received",
                            }, { session, ordered: true });

                            if (receiverTransaction) {

                                await session.commitTransaction();
                                session.endSession()
                                return res.status(200).json({
                                    message: "transfer successful",
                                    balance: payer.balance
                                })
                            }
                            else {
                                await session.abortTransaction();
                                return res.status(400).json({
                                    message: "transaction failed"
                                })
                            }
                        }
                        else {
                            await session.abortTransaction();
                            return res.status(400).json({
                                message: "transaction failed"
                            })
                        }
                    }
                    else {
                        await session.abortTransaction();
                        return res.status(400).json({
                            message: "transfer failed"
                        })
                    }
                }
                else {
                    await session.abortTransaction();
                    return res.status(400).json({
                        message: "transfer failed"
                    })
                }
            }
            else {
                await session.abortTransaction();
                return res.status(400).json({
                    message: "receiver not found"
                })
            }

        }
        else {
            await session.abortTransaction();
            return res.status(400).json({
                message: "insufficient balance"
            })
        }
    }
})

router.post("/transfer", authmid, async (req, res) => {
    const session = await mongo.startSession();

    try {
      await session.withTransaction(async () => {
        const to = req.body.to;
        const amount = req.body.amount;

        // Find payer's account
        const payer = await Acccount.findOne({ userId: req.userId }).session(session);
        if (!payer) throw new Error("Payer account not found");

        if (payer.balance < amount) {
          throw new Error("Insufficient balance");
        }

        // Find receiver's account
        const receiver = await Acccount.findOne({ userId: to }).session(session);
        if (!receiver) throw new Error("Receiver account not found");

        // Deduct amount from payer
        await Acccount.findOneAndUpdate(
          { userId: req.userId },
          { $inc: { balance: -amount } },
          { session }
        );

        // Add amount to receiver
        await Acccount.findOneAndUpdate(
          { userId: to },
          { $inc: { balance: amount } },
          { session }
        );

        // Record transactions
        await Transaction.create([
          {
            userId: req.userId,
            counterParty: to,
            amount: -amount,
            status: "sent"
          },
          {
            userId: to,
            counterParty: req.userId,
            amount: amount,
            status: "received"
          }
        ], { session, ordered: true });

        res.status(200).json({
          message: "Transfer successful"
        });
      });
    } catch (err) {
      console.error("Transaction failed:", err.message);
      res.status(400).json({
        message: err.message || "Transfer failed"
      });
    } finally {
      await session.endSession();
    }
  });