import { useMemo, useState } from "react"


function Memoize()
{
    const[count, setCount]= useState(0);
    const [input, setInput]= useState(0)

    let sum=0;
    let  add=useMemo(()=>
    {
        console.log("add is called");
        const inp= parseInt(input);
       sum= inp*(inp+1)/2
       return sum; 
    
   }, [input]);

    return(
        <>
        <input type="number" onChange={(e)=>{
            setInput(e.target.value);
        }}></input>
        <h3>sum of numbers from 1 to {input} is {add || "Enter number"} </h3>

        <button onClick={()=>{
            setCount(count+1)
        }}>Counter {count}</button>
        </>
    )
}

export default Memoize