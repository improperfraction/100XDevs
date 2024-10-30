const mongo= require('mongoose');
const { string, boolean } = require('zod');

mongo.connect("mongodb+srv://realiasms96:Catwriter%40123@cluster0.jpp2qsd.mongodb.net/todo_app");

const todoschema= mongo.Schema(
    {
        title: String,
        description: String,
        completed: Boolean,
        id: String
    }
)

const todo= mongo.model("todos", todoschema);

module.exports={
    todo
}