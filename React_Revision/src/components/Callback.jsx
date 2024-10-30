import React, { useCallback, useState } from "react";

function Callback() {
    const [count, setCount] = useState(0);
    const cb = useCallback( () => {
        console.log("child compt is clicked")
    },[]);

    return (
        <>
            <div>{count}</div>
            <button onClick={() => {
                setCount(count + 1)
            }}>Counter</button>
            <Child cc={cb}></Child>
        </>
    )
}

 const Child= React.memo(({ cc }) =>{
    console.log("child component rendered")
    return (
        <button onClick={cc}>click Me</button>
    )
})

export default Callback