
const express= require('express');
const jwt= require('jsonwebtoken');
const bcrypt= require('bcryptjs');
const mongo= require('mongoose');
const { string } = require('zod');

mongo.connect("mongodb+srv://realiasms96:Catwriter%40123@cluster0.jpp2qsd.mongodb.net/users_app");

const user= mongo.model('Users',{name: String, username: String, password: String })

const app = express();
app.use(express.json());
const jwtpass= "12345";

const all_users= []

//Register user
app.post("/signup", async(req, res)=>{
    const uname= req.body.username;
    const pword= req.body.password;
 
    // Check if user already exists
    const user= all_users.find(u=>u.username==uname);
    if(user)
    {
        res.status(403).json({msg: "user already exists"});
    }
    
    //Hash the password
   const hashedp= await bcrypt.hash(pword, 10);

    //save user
    all_users.push(
        {
            username: uname,
            password: hashedp,
        }
    )
    res.status(201).json({msg: "user is registered succesfully"});
})


//User is signing in
app.post("/signin", async (req, res)=>{
    const uname= req.body.username;
    const pword= req.body.password;

    //Check if user exists
    const user= all_users.find(u=>u.username==uname);
    if(!user)
    {
        res.status(403).json({msg: "user not found"});
    }

    //check 
    const isvalidPwd= await bcrypt.compare(pword, user.password);

    if(!isvalidPwd)
    {
        res.status(401).json({msg: "invalid creds"});
    }

    var token= jwt.sign({username: uname}, jwtpass);
        return res.json({
        token : token,
    });

})

//authorization check once user logged in
function jwtauthcheck(req, res, next)
{
    const token= req.headers.authorization;
    if(token)
    {
        jwt.verify(token, jwtpass, (err, user)=>{
            if(err)
                res.status(403).json({msg: "authorization failed"});
                req.user= user;
        })
        next();
    }
    else
    {
        res.status(401).json({msg: "user is not logged in"});
    }   
}

//auth check applied
app.get("/users", jwtauthcheck, (req, res)=>{
        res.json({
            all_users
        })
})

app.listen(3000, ()=>{
    console.log("auth.js started on port 3000");
})