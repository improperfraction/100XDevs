import { useState } from "react"

function Drill()
{
    const [count, setCount]= useState(0);
    return(
<Count count={count} setCount={setCount}></Count>
    )
}

function Count({count, setCount})
{
    return(
    <>
    <CountRenderer count={count}></CountRenderer>
    <Button count={count} setCount={setCount}></Button>
    </>
    )
}

function CountRenderer({count})
{
    return(
        <div>{count}</div>
    )
}

function Button({count, setCount})
{
    return(
        <div>
            <button onClick={()=>{
                setCount(count+1)
            }}>Increment</button>
            <button onClick={()=>{
                setCount(count-1)
            }}>Decrement</button>
        </div>


    )
}

export default Drill