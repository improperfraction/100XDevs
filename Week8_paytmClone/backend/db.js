const mongo = require("mongoose");

//Connecting to DB
mongo.connect("mongodb+srv://realiasms96:Catwriter%40123@cluster0.jpp2qsd.mongodb.net/paytm");

//Creating schemas
const userSchema = new mongo.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true }

})

const acctSchema = new mongo.Schema({
    userId: {
        type: mongo.Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    balance: { type: Number, 
        required: true,
        min:[0, "amount should be greater than 0"]
     }
})

//passing the created schemas to tables
const User = mongo.model("users", userSchema)
const Account= mongo.model("accounts", acctSchema)

//exporting the User
module.exports = {
    User,
    Account
}