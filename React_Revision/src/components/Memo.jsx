import React from "react";
import { useState } from "react"



function Memo() {
    
    const [count, setCount]= useState(0);
    return (
        <>
        <h2>Counter is {count}</h2>
            <button onClick={() => {
                setCount(count + 1);
            }}>Increment</button>
            <Banner uname={"Mayur"}></Banner>
        </>

    )
}

// function Counter()
// {
//     const [count, setCount]= useState(0);
//     return (
//         <>
//         <h2>Counter is {count}</h2>
//             <button onClick={() => {
//                 setCount(count + 1);
//             }}>Increment</button>
//         </>
//     )
   
// }

const Banner= React.memo(({uname})=>
    {
        console.log("banner rendered");
        return(
            <h2>Hello, {uname}</h2>    )
    })

// const Banner= React.memo(({uname})=>
// {
//     console.log("banner rendered");
//     return(
//         <h2>Hello, {uname}</h2>    )
// })

export default Memo