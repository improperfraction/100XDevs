import { useState } from "react"



function Counter()
{
    const [count, setCount]= useState(0)
    const [num, setNum]= useState(0);
    return (
        <>
        <h2>Counter {count}</h2>
        <button onClick={()=>{
            setCount(count+1)
        }}>Increment</button>
        <button onClick={()=>{
            setCount(count-1)
        }}>Decrement</button>
        <label>
            <input type="number" placeholder="number" value={num} onChange={(e)=>{
setNum(parseInt(e.target.value) || 0)
            }}></input>
            </label>
            <button onClick={()=>{
                setCount(count+num);
                setNum(0);
            }}>Add it </button>
        </>
    )
}

export default Counter