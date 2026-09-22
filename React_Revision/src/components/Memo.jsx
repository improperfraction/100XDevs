import React from "react";
import { useState } from "react"

let players = ["mayur", "abhi", "rakhi", "neha", "sidhy"];

function Memo() {

    const [count, setCount] = useState(0);
    return (
        <>
            <h2>Counter is {count}</h2>
            <button className="text-white mt-5 lg:mt-7 bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 hover:bg-gradient-to-br focus:outline-none font-medium rounded-full text-base lg:text-lg px-5 py-2.5 text-center me-2 mb-2" onClick={() => {
                setCount(count + 1);
            }}>Increment</button>
            <Banner uname={"Abhi"}></Banner>
            <List list={players} />

        </>

    )
}

const Banner = React.memo(({ uname }) => {
    return (
        <>
            <p>Hi {uname}</p>
        </>
    )
})

const List = React.memo(({ list }) => {
    return (
        <>
            {list.map((player, index) => {
                return (
                    <p key={index}>{player}</p>
                )
            })}
        </>
    )
})



export default Memo