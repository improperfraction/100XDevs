const express= require('express');
const app= express();
app.use(express.json());


let todo=[
{ "id": 101, "title": "Buy groceries", "completed": false, description: "I should buy groceries" },
{ "id": 102, "title": "Study ", "completed": true , description: "Studied ReactJS" },
];

//Get all the to do items
app.get("/todo", (req, res)=>{
    res.status(200).json(todo);
})

//get items specfic to id 
app.get("/todo/:id", (req, res)=>
{
    let item = todo.find(el=>el.id=== parseInt(req.params.id));
    console.log(req.params.id);
    console.log(item);
    if(!item)
    {
        res.status(404).send("Not found");
       
    }
    else
    {
        res.status(200).json(item);
    }

})

app.post("/todos",(req, res)=>{
    let item={
        "id" :  Math.floor(Math.random() * 1000),
        "title" : req.body.title,
        "completed" : req.body.completed,
        description: req.body.description
    }

    todo.push(item);
    res.status(201).json(item.id);
})

app.put("/todos/:id", (req, res)=>{
    const tid= req.params.id;
    let item = todo.find(t=>t.id===parseInt(tid));
   if (!item)
    {
        res.status(404).send("Not found");  
    }
    else
    {
        if(req.body.completed)
        {
            item.completed=req.body.completed;
        }
        if(req.body.description)
        {
            item.description=req.body.description;
        }
        if(req.body.title)
        {
            item.title= req.body.title;
        }

        res.status(200).send("updated");
    }
})

app.delete("/todos/:id", (req, res)=>{
    const ind= todo.findIndex(t=>t.id===parseInt(req.params.id));
    if(!ind)
    {
        res.status(404).send("not found");
    }
    else
    {
        todo.splice(ind, 1);
        res.status(200).send();
    }
})



app.listen(3000, ()=>{
    console.log("todo server is running on port 3000");
})