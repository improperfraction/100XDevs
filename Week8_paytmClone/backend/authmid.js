const express= require('express');
const jwt= require("jsonwebtoken");
const jwtpass= require('./config');

function authmid(req, res, next){

    console.log("authmid called");
    const btoken= req.headers.authorization;
    if(!btoken || !btoken.startsWith("Bearer"))
    {
        res.json({message: "Incorrect auth header "})
    } 
    const token= btoken.split(" ")[1];
    console.log(token);

    const decodedtoken= jwt.verify(token, jwtpass);

    if(decodedtoken.UserId)
    {
        req.userid= decodedtoken.UserId;
        next();
    }
    else
    {
        res.status(403).json({message: "Unauthorized request"})
    }
}

module.exports={
    authmid
}
