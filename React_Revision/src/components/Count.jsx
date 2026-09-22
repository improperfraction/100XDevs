import { useState } from "react";



function Counter() {

    const [count, setCount] = useState(0)
    return (
        <>
            <p>Counter value is at {count}</p>
            <button onClick={() => {
                setCount(count + 1)
            }}>Increment</button>
            <button onClick={() => {
                setCount(count - 1)
            }} disabled={count <= 0}>Decrement</button>
        </>
    )
}

export default Counter