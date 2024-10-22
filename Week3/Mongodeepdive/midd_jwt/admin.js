const jwt= require('jsonwebtoken');
const {jwtpass}= require('../config');
const { Admin } = require('../db');
const express= require('express');



function adminjwtmid(req, res, next)
{
    const btoken= req.headers.authorization;
    const token= btoken.split(" ")[1];

    const decodedtoken= jwt.verify(token, jwtpass);

    console.log(decodedtoken);

    if(decodedtoken.username)
    {
        next();
    }
    else{
        res.status(403).json({
            msg: "you are not authorised"
        })
    }

}


async function adminsignin(req, res, next){
    const uname= req.headers.username;
    const pwd= req.headers.password;

    const existingadmin= await Admin.findOne({
        username: uname, password:pwd
    })

    if(existingadmin)
    {
        next();
    }
    else{
        res.json({
            msg: "wrong creds"
        })
    }

}

module.exports={ adminjwtmid, adminsignin}
