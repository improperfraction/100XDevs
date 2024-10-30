const express= require('express');
const app= express();
const mainrouter= require("../backend/routes/index")
const cors= require('cors');
const jwtpass= require("./config")

app.use(cors());
app.use(express.json());

app.use("/api/v1", mainrouter)

app.listen(3000, ()=>{
    console.log("server is started on port 3000")
})