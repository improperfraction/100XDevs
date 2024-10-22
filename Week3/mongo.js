const mongo = require('mongoose');
const express = require('express');
const app = express();
app.use(express.json());

//connect to mongo db instance-- give your mongodb url followed by "/<dbname>"
mongo.connect("mongodb+srv://realiasms96:Catwriter%40123@cluster0.jpp2qsd.mongodb.net/users_app")
    .then(() => {
        console.log("connected to db");
    })
    .catch((error) => {
        console.log("couldnt connect to db", error);
    });

//Define schema for your db table
const userschema = new mongo.Schema({
    name: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
})

//Creating model which applies to 'users' db table/collection with constraint of userschema
const users = mongo.model('users', userschema);

//CREATE: Creating User
app.post('/signup', async (req, res) => {
    const name = req.body.name;
    const uname = req.body.username;
    const pword = req.body.password;

    const UserCreated = await User.create({
        name: name,
        username: uname,
        password: pword
    })

    if (UserCreated) {
        res.json({
            msg: "User is created"
        })
    }
})

//READ: finding user by using givne constraint
app.get("/userdetails", usermid, async (req, res) => {

    const uname = req.body.username;
    const pword = req.body.password;
    const user = await User.findOne({ username: uname });
    res.json({ user });
})

//UPDATE: updating the user details
app.put("/updateuser", async (req, res) => {
    const uname = req.body.uname;
    const pwd = req.body.pwd;
    const updated = await Course.updateOne({
        username: uname //filter
    },
        {
            $set: {
                password: pwd //updated value
            }
        })
})

//DELETE: deleting user
app.delete("/deleteuser", async(req, res)=>{
    const uname= req.body.username;
    const deleteuser= await User.findOneAndDelete({username: uname})

    if(deleteuser)
    {
        res.json({msg: "user is deleted"})
    }
})




//finding user by using givne constraint
const userfound = users.findOne({ username: "mayurs" });
if (userfound) {
    console.log(userfound);
}

const deluser = users.findOneAndDelete({ username: "mayurs" });
const upduser = users.findOneAndUpdate({ username: "mayurs" }, { name: "mayur shete" });


