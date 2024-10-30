const express = require("express");
const zod = require('zod');
const { User, Account } = require("../db");
const router = express.Router();
const jwt = require('jsonwebtoken');
const jwtpass = require('../config');
const { authmid } = require("../authmid");

const signupbody = zod.object({
    username: zod.string().email(),
    firstName: zod.string(),
    lastName: zod.string(),
    password: zod.string().min(6)
})

const signinbody = zod.object({
    username: zod.string().email(),
    password: zod.string().min(6)
})

const updatedbody = zod.object({
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
    password: zod.string().min(6).optional()

})

router.post("/signup", async (req, res) => {

    const validadata = signupbody.safeParse(req.body);
    if (validadata.success) {
        const existingUser = await User.findOne({
            username: req.body.username,
        })

        if (existingUser) {
            res.json({ msg: "Email is already taken" })
        }
        else {
            const nUser = await User.create({
                username: req.body.username,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                password: req.body.password,
            });



            if (nUser) {
                const userid = nUser._id;
                await Account.create({
                    userId: userid,
                    balance: 1 + Math.random() * 10000
                });
                const Token = jwt.sign({ UserId: userid }, jwtpass);
                res.json({
                    message: "User created successfully",
                    token: Token
                    // balance: Account.balance
                })
            }
        }
    }
    else {
        res.json({ msg: "Incorrect inputs" })
    }
})

router.post('/signin', async (req, res) => {

    const validatedata = signinbody.safeParse({
        username: req.body.username,
        password: req.body.password
    })
    if (validatedata.success) {
        const existingUser = await User.findOne({
            username: req.body.username,
            password: req.body.password
        })

        if (existingUser) {
            const Token = jwt.sign({ UserId: existingUser._id }, jwtpass)

            if (Token) {
                res.json({
                    token: Token,
                    firstname: existingUser.firstName,
                    lastname: existingUser.lastName,
                })
            }
            else {
                res.status(411).json({
                    message: "Error while logging in"
                })
            }
        }
        else {
            res.status(411).json({
                message: "incorrect username/password"
            })
        }
    }
    else {
        res.status(411).json({
            msg: "inputs are in incorrect format"
        })
    }

})


router.put("/update", authmid, async (req, res) => {
    console.log("method called");
    const validateInput = updatedbody.safeParse(req.body);

    if (!validateInput.success) {
        res.status(411).json({
            msg: "inputs are in incorrect format"
        })
    }

    const updateUser = await User.findOneAndUpdate(
        { _id: req.userid },
        req.body
    )

    if (updateUser) {
        res.status(200).json({
            message: "updated successfully"
        })
    }
    else {
        res.status(411).json({
            msg: "Error while updating information"
        })
    }
})

router.get("/bulk", authmid, async(req, res) => {
    const name = req.query.filter || "";

    const bulkUser = await User.find({
        $or: [
            {
                firstName: {
                    '$regex': name,
                    '$options': 'i' // 'i' makes the regex case-insensitive

                }
            },
            {
                lastName: {
                    '$regex': name,
                    '$options': 'i' // 'i' makes the regex case-insensitive

                }
            }
        ]
    })

    // const bulkUser= await User.find({
    //     firstName: name
    // })
    console.log(bulkUser);
    if (bulkUser) {
        res.json({
            bulkUser: bulkUser.map((user) => ({
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                _id: user._id
            }))
        })
    }
})

module.exports = router;
