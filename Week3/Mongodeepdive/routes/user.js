const express = require('express');
const router = express.Router();
const { usersignupmid, usermid } = require('../middleware/user');
const { User, Course } = require('../db');


router.post('/signup', usersignupmid, async (req, res) => {

    const uname = req.body.username;
    const pword = req.body.password;
    console.log(uname);

    const UserCreated = await User.create({
        username: uname,
        password: pword
    })

    if (UserCreated) {
        res.json({
            msg: "User is created"
        })
    }
})

router.post('/courses/:courseId', usermid, async (req, res) => {
    const uname = req.headers.username;
    const id = req.params.courseId;

    const purchaseCid = await User.updateOne({
        username: uname
    },
        {
            "$push": {
                purchasedcourses: id
            }
        });
    if (purchaseCid) {
        res.json({
            msg: "purchase is complete"
        })
    }
    else {
        res.status(403).json({
            msg: "purchase cant be completed"
        })
    }


})
router.get("/purchasedcourses", usermid, async (req, res) => {
    const uname= req.headers.username;
    const user = await User.findOne({ username: uname });
    let purco=[];

    for( let i=0; i<user["purchasedcourses"].length; i++)
    {
        let  course= await Course.find({"_id":user["purchasedcourses"][i] });
        purco.push(course);

    }
    res.json({ purco });
})

router.get("/courses", usermid, async (req, res) => {
    const courses = await Course.find({});
    res.json({ courses });
})





module.exports = router;
