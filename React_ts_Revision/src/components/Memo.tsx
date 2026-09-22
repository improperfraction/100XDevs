import React from "react";
import { useState } from "react"

interface BnrProps{
    name: string,
    age: number
    
}

function Memo() {
    const [count, setCount] = useState(0);

    return (
        <>
            <p> React.Memo </p>
            <p>{count}</p>
            <button onClick={() => {
                setCount(count + 1)
            }}>+</button>
            <button onClick={() => {
                setCount(count - 1)
            }}>-</button>
            <Banner age={29} name={"mayur"} ></Banner>
        </>
    )
}


const Banner = React.memo((props: BnrProps) => {
    console.log("Bnnaer is rendered")
    return (
        <>
            <p>{props.name}</p>
            <p>{props.age}</p>

        </>
    )
})



export default Memo;