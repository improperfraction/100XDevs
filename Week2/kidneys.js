const express= require('express');
const app= express();
app.use(express.json());

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
        res.json({
            msg: "unhealthy kidneys are removed",
            data: users
        })
    }
})

app.listen(3000, ()=>{
    console.log("server is running on port 3000");
})