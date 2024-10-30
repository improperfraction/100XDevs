const express= require('express');
const router= express.Router();
const userrouter= require('./user');
const acctrouter= require('./account');
const app= express();


router.use("/user", userrouter);
router.use("/account", acctrouter);

module.exports=router;