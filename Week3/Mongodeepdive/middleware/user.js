const { User } = require( "../db");


async function usersignupmid(req, res, next) {
    const uname = req.body.username;

    const existringUser = await User.findOne({
        username: uname
    })
    if (existringUser) {
        res.status(403).json({
            msg: "User with same username already exist, please choose another username"
        })
    }
    else {
        next();
    }
}

async function usermid(req, res, next) {
    const uname = req.headers.username;
    const pword = req.headers.password;

    const existringUser = await User.findOne({
        username: uname,
        password: pword
    });
    if (existringUser) {
        next();
    }
    else {
        res.status(403).json({
            msg: "User doesnt exist"
        })
    }
}

module.exports = {usermid, usersignupmid};