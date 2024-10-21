const express = require("express");
const fs= require("fs");

const path= require("path");
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

app.get("/sum", (req, res)=>{
    const n1= req.query.a;
    const n2= req.query.b;

    const sum= parseInt(n1) + parseInt(n2);

    res.send(sum.toString());
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
        console.lo
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

app.get("/file/:filename", (req, res)=>{
    const file= req.params.filename;
  const filepath= path.join(__dirname, file)
    fs.readFile(filepath, "utf-8", (err, data)=>
    {
      if(err)
      {
        res.send("File not found")
      }
      else{
        if(data.length===0)
        {
            res.status(404).send("File is empty");
        }
        else
        {
            res.status(200).send(data);
          
        }
      }
    } )
  })


  app.get('/filess', function (req, res) {
    fs.readdir(path.join(__dirname, './Week2/'), (err, files) => {
        console.log(__filename);
    if (err) {
        return res.status(500).json({ error: 'Failed to retrieve files' });
    }
    res.json( path.join(__dirname, './files/'));
    });
});
 app.listen(3000, ()=>{
    console.log("server is running on port 3000")
});

function logCallerFunction(message) {
    try {
        // Create an error to get the stack trace
        const stack = new Error().stack;

        // Extract the calling function's information from the stack trace
        const callerLine = stack.split("\n")[2]; // The second line is the caller
        const functionNameMatch = callerLine.match(/at\s([^\s]+)/);
        const functionName = functionNameMatch ? functionNameMatch[1] : "unknown";

        // Log the calling function name and the message
        console.log(`Function: ${functionName}, Message: ${message}`);
    } catch (err) {
        console.error("Unable to retrieve function name", err);
    }
}

// Example usage
function exampleFunction() {
    logCallerFunction("This is a test message.");
}

exampleFunction();
 var USE= "use";
 var STRICT= 'strict';
 var extra= ''

const  varsePrefix= function(section){
    return this.state[section].vars.length? 'vars' + this[section].vars.join(',')+';' :'';
}

const body= function (section) {
    return this.state[section].body.join('');
}
 const generateFunction= function(name, params)
 {
    return 'function('+params+ '){'+
    varsePrefix(name) +
    body(name)+ '};';
 }

 const watchFns= function()
 {
    var result= [];
    var fns=this.state.inputs;
    var self= this;
    foreach(fns, function(name){
        result.push('var'+name+'=' + generateFunction(name, 's'));
    })
    if(fns.length){
        result.push('fn.inputs=[' + fns.join(',')+'];');
    }
    return result.join('');
 }

var fnString= '"' +USE + ' ' + STRICT + '";\n' +
this.filterPrefix() + 
'var fn=' + generateFunction('fn', 's,l,a,i')+ 
extra + 
watchFns() +
'return fn;'

var fn= (
    new Function('$filter', 'getStringvalue', 'isDefined', 'plus', fnString))
    (this.$filter, getStringvalue,isDefined, plusfn);

    return fn
