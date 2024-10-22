const mongo= require('mongoose');
const { type } = require('os');
const { title } = require('process');

mongo.connect("mongodb+srv://realiasms96:Catwriter%40123@cluster0.jpp2qsd.mongodb.net/cohort-app");

const AdminSchema= new mongo.Schema({
username: {type: String, required: true},
password: {type: String, required: true},
})

const UserSchema= new mongo.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    purchasedcourses: [{
        type: mongo.Schema.Types.ObjectId,
        ref: 'Course'
    }]
})

const CourseSchema = new mongo.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required:true}
})

const Admin= mongo.model('admins', AdminSchema);
const User= mongo.model('User', UserSchema);
const Course= mongo.model('Course', CourseSchema);

module.exports={
    Admin,
    User,
    Course
}
