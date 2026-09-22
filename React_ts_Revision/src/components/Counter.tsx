import { useState } from "react"

function Counter() {

    const [count, setCount] = useState(0)


    return (
        <>
            <p>Counter</p>
            <p>{count}</p>
            <button onClick={() => {
                setCount(count + 1)
            }}>+</button>
            <button onClick={() => {
                setCount(count - 1)
            }}>-</button>
        </>
    )
}


function Counterr() {

    const [count, setCount] = useState(0)

    function increment(): void {
        setCount(count + 1)
    }

    const decrement=():void=> {
        setCount(count-1)
    }


    return (
        <>
            <p>Counterr</p>
            <p>{count}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </>
    )
}

export default Counterr;