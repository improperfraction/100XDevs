import { useState } from "react";


export function CreateTodo()
{
    const [title, setTitle]= useState("");
    const [description, setDescription]= useState("");
    return <div>
        <input type="text" onChange={function(e){
            setTitle(e.target.value);
        } } placeholder="Title" ></input>
        <br></br>
        <input type="text" onChange={(e)=>{
            setDescription(e.target.value);
        }} placeholder="Description" ></input>
        <br></br>
        <br></br>
        <button onClick={()=>{
            fetch("http://localhost:3000/newtodo",
            {
                method: "POST",
                body: JSON.stringify(
                    {
                        title: title,
                        description: description
                    }
                ),
                headers:{
                    "Content-Type": "application/json"
                }
            }).then(async function(res){
                const jsonres= await res.json();
            })
        }} >Add ToDo</button>
    </div>
}