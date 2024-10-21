import { useContext, useState } from "react"
import CountContext from "./CountCntxt";

function Context() {
    const [count, setCount] = useState(0);
    return (
        <CountContext.Provider value={{count, setCount}}>
            <Count></Count>
        </CountContext.Provider>
    )
}

function Count() {
    return (
        <>
            <CountRenderer ></CountRenderer>
            <Button></Button>
        </>
    )
}

function CountRenderer() {

    const {count}= useContext(CountContext);
    return (
        <div>{count}</div>
    )
}

function Button() {

    const {count, setCount}= useContext(CountContext);
    return (
        <div>
            <button onClick={() => {
                setCount(count + 1)
            }}>Increment</button>
            <button onClick={() => {
                setCount(count - 1)
            }}>Decrement</button>
        </div>


    )
}

export default Context