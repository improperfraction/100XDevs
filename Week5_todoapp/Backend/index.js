const express= require('express');
const {CreateTodo, UpdateTodo}= require('./types');
const {todo}= require("./db")
const cors= require('cors');
const { boolean } = require('zod');

const app= express();
app.use(express.json());
app.use(cors());


app.post("/newtodo", async (req, res)=>{

    const createpayload= req.body;
    const parsepayload= CreateTodo.safeParse(createpayload);
    if(!parsepayload.success)
    {
        req.statusCode(411).json({
            msg: "you sent wrong inputs",
        });
        return;
    }
    await todo.create({
        title: createpayload.title,
        description: createpayload.description,
        completed: false
    })
    res.json({
        msg: "tod is created",
    })

});

app.get("/todos", async (req, res)=>{

    const todos= await todo.find({});
    res.json({
        todos,
    })

});

//get items specfic to id 
app.get("/todo/:id", async(req, res)=>
    {
        const tid= req.params.id;
        let item = await todo.findOne({id: tid });
        res.json({
            item
        });
    
    })

app.get("/notif", async(req, res)=>{
    const data= {
        network: Math.round(Math.random()*10),
        jobs:Math.round(Math.random()*10),
        notification:Math.round(Math.random()*10),
        message: Math.round(Math.random()*10),

    }

    res.json({
        data
    })
})

app.put("/complete", async (req, res)=>{
    const updatepl= req.body;
    const parseuppl= UpdateTodo.safeParse(updatepl);

    if(!parseuppl.success)
    {
        req.statusCode(411).json({
            msg: "you sent wrong inputs",
        });
        return;
    }

    await todo.updateOne({
        _id: updatepl.id},
    {
        completed: true
    })
    res.json({
        msg:"todo marked as completed"
    }) 
});

global.sum=function () {
    console.log("worked");
}

let callback = "sum";

if (callback && typeof globalThis[callback] === 'function') {
    console.log("Hi");
    global[callback]();  // Execute the function
    console.log("Function executed successfully");
}
//global[callback]();

app.listen(3000, ()=>{
    console.log("todo app is working")
})




// keys= [];
// path= path.replace(/([().])/g, '\\$1')
// .replace(/(\/)?:(\w+)([\?\*])?/g, function(_ , slash, key, option){
//     var optional= option ==='?' ? option: null;
//     var star= option=== '*'? option: null;
//     keys.push({name: key, optional: !!optional});
//     slash= slash || '';
//     return ''
//     + (optional ? '' : slash)
//     + '(?:'
//     +(optional ? slash : '')
//     +(star && '(.+?)' || '([^/]+)')
//     +(optional || '')
//     + ')'
//     + (optional || '')    
// })
// .replace(/([\/$\*])/g, '\\$1');