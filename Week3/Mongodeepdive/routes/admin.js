const express = require('express');
const router = express.Router();
const {adminsignupmid, adminmid} = require('../middleware/admin');
const { Admin, Course } = require('../db');
const jwt= require('jsonwebtoken')
const {jwtpass}= require('../config');
//const jwtpass="cohort";
const { adminsignin, adminjwtmid } = require('../midd_jwt/admin');

router.post('/signup', adminsignupmid, async (req, res) => {
    const uname = req.body.username;
    const pword = req.body.password;

    
    const newAdmin = await Admin.create({
        username: uname,
        password: pword
    });

    if (newAdmin) {
        res.json({
            msg: "Admin created successfully"
        })
    }
    else {
        res.status(403).json({
            msg: "new Admin cant be created"
        })
    }
})

router.post("/signin", adminsignin, async(req, res)=>{
    const uname= req.headers.username;
    const pwd= req.headers.password;

    console.log(jwtpass);
    const token= jwt.sign({username: uname},
        jwtpass
    )

    if(token)
    {
        res.json({token})
    }
    else{
        res.json({msg: "something went wrong" })
    }
})


router.post('/courses', adminjwtmid, async (req, res)=>{
    const tit= req.body.title;
    const desc= req.body.description;
    const pr= req.body.price;

    const courseCreated= await Course.create({
        title: tit,
        description: desc,
        price:pr
    });

    if(courseCreated)
    {
        res.json({
            msg: `${tit} course is created successfully`
        })
    }
    else{
        res.status(403).json({
            msg: `${tit} course cant be created`
        })
    }
})

router.put("/coursepriceupdate", adminmid, async(req, res)=>{
    const uprice= req.body.price;
    const cid= req.body.id;
    const updated= await Course.updateOne({
        _id: cid
    },
{
    $set:{
        price: uprice
    }
});

if(updated)
{
    res.json({
        msg: "price is updated"
    })
}
})

router.get("/courses", adminjwtmid, async(req, res)=>{
    const courses= await Course.find({});

    res.json({
        courses
    })
})

router.delete("/deleteadmin", adminmid, async(req, res)=>{
    const uname= req.body.username;
    const deletedadmin= await Admin.findOneAndDelete({username: uname})

    if(deletedadmin)
    {
        res.json({msg: "Admin is deleted"})
    }
})

module.exports= router