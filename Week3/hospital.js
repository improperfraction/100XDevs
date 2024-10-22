const express= require("express");
const app= express();
//const zod = require("zod")
app.use(express.json());


const schema= zod.array(zod.number());

//middleware to validate credentials
function creds(req, res, next)
{
    const us= req.headers.username;
    const pass= req.headers.password;

    if(us!="mayur" || pass!="mayur")
    {
        res.status(400).send("wromg creds");
    }
    else{
        next();
    }
}
function kidneys(req, res, next)
{
    const kidney= req.query.kid;

    if(kidney==1 || kidney==2)
    {
        next();
    }
    else{
        res.status(400).send("incorrect kidney inputs");
    }
}

//middleware function should placed just next to route
app.get("/healthcheckup", creds, kidneys, (req, res)=>{
            res.json({
                msg: "healthy"
            })
   
})


app.post("/kidney/numbers", (req, res)=>{
    const karr= req.body.kidney;

    const resp= schema.safeParse(karr);
    const knum= karr.length;
    res.json(resp);
})

const zod = require("zod")

//middleware function for input validation
function validinput(req, res, next)
{
    //define zod schema
    const sc= zod.object({
        email: zod.string().email(),
        password: zod.string().min(8)
    })

    try
    {
        //schema validation
        sc.parse(req.body);
        next();
    }
    catch(error)
    {
        return res.status(400).json({ message: "Wrong creds prvided", error: error.errors });
    }
}

app.post("/login", validinput, (req, res)=>{
    ///work on gicen inputs//
    res.status(200).json({ message: 'Todo item is valid!' });
})

//app.use((err, req, res, next)=>{
  //  res.json({msg: "error is thrown"})
//})

app.listen(3000, ()=>{
    console.log("kidney hospital server is running on port 3000");
})