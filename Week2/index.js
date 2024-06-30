const express = require("express");
const fs= require("fs");

const app= express();

app.use(express.json());
app.use((req, res, next)=>{
    console.log(`${req.method} is callled for ${req.url}`);
    next();
})
app.get("/", (req, res)=>{
    let x=2+2;
    res.send(`<b>The value of x is: ${x}<b>`);
})

app.get("/", (req, res)=>{
    let x=2+2;
    res.send(`<b>The value of x is: ${x}<b>`);
})

function calculate(n1, n2, op)
{
    let result;
    switch (op)
    {
        case "Add":
            result= n1+n2;
            break;

        case "sub":
            result=n1-n2;
            break;
    }
    return result;
}

app.post("/calculate", (req, res)=>{
    const { num1, num2, operation } = req.body;
    if (num1 === undefined || num2 === undefined || !operation) {
        return res.status(400).send('Missing required fields: num1, num2, operation');
      }
      else{
        console.log(calculate(num1, num2, operation));
        res.send("Operation perfomed successfully");
    }
})



app.post("/info", (req, res)=>{
const data= req.body;
console.log(data);
res.send(data);

})

app.post("/write", (req, res)=>{
    let wr= req.body;

    fs.writeFile("a.txt", JSON.stringify(wr), (err)=>{
        if(err)
        {
            console.log(err)
        }
        else
        {
            //data= data + wr;
            console.log("done")
            res.send("data added successfully")
        }
    })
})
app.get("/about", function(req, res){
    res.send("This server is created by Mayur shete ");
})

app.get("/api", (req, res)=>{
    res.json({message: 'this is api response'});
});

// Define a route with URL parameters
app.get('/greet/:name', (req, res) => {
    const usr = req.params.name
    res.send(`Hello, ${usr}!`);
  });
  
  app.get("/num", (req, res)=>{
    const num1= req.query.n1;
    const num2= req.query.n2;
    res.send(`${num1} and ${num2}`);
  })




app.get("/files", (req, res)=>{
    fs.readdir("/Users/helpshift/Documents/100XDevs/Week2", (err, files)=>{
     if(err)
     {
       console.log(err);
       res.statusCode(500);
     }
     else
     {
       res.status(200).json(files)
     } 
    })
 
 } )


 var users=[
    {
        name: "mayur",
        kidneys:[
            {
                healthy: false
            },
            {
                healthy: true
            },
            {
                healthy: true
            }
        ]
    }
 ]


app.get("/kidneys", (req, res)=>{
    let count=0;
    const NoOFkidneys= users[0].kidneys.length;
    console.log(NoOFkidneys);
    const healthykidneys= users[0].kidneys.filter((val)=>{  
        return val.healthy.valueOf("true");
    })
    let noofhealthykidneys= healthykidneys.length;
    let unhealthykidneys= NoOFkidneys -healthykidneys.length
    res.json({
        NoOFkidneys,
        noofhealthykidneys ,
        unhealthykidneys
    });
})

app.post("/add", (req, res)=>{

    const ishealthy= req.body.ishealthy;
    users[0].kidneys.push( {
        healthy: ishealthy
    })
    res.json({
        message: "Done",
        data: users
    })
})

app.put("/correct", (req, res)=>{

    for(let i=0; i<users[0].kidneys.length; i++)
    {
        users[0].kidneys[i].healthy=true;
    }
    res.json(
        {
            msg: "data coorected",
            data: users
        }
    )
})

app.delete("/remove", (req, res)=>{

    let unhealthy= users[0].kidneys.filter((val)=>{
        return !val.healthy;
    })
    console.log("unhealthy kidneys:", unhealthy);
    console.log(unhealthy.length);

    if(unhealthy.length<=0)
    {
        res.status(400).send("No unhealthy kidney present");
    }
    else{
        users[0].kidneys =users[0].kidneys.filter((val)=>{
            return val.healthy.valueOf(true);
        })
       // users[0].kidneys=newkidneys;
       // console.log(users[0].kidneys);
        res.json({
            msg: "unhealthy kidneys are removed",
            data: users
        })
    }

   
    
})

 app.listen(3000, ()=>{
    console.log("server is running on port 3000")
});