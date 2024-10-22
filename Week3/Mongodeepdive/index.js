const express= require('express');
const app= express();
const Adminrouter= require('../Mongodeepdive/routes/admin');
const Userrouter= require('../Mongodeepdive/routes/user');
const exp = require('constants');

const jwtpass= "cohort_server";

app.use(express.json());

app.use('/admin', Adminrouter);
app.use('/user', Userrouter)

app.listen(3000, console.log("mongodeepdive started on port 3000"))

module.exports= jwtpass;