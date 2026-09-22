import React, { useCallback, useState } from "react";

// function Callback() {
//     const [count, setCount] = useState(0);

//     const cb = useCallback(() => {
//         return (
//             <>
//                 {console.log("child component button is clicked")}
//             </>
//         )
//     }, [])

//     return (
//         <div>
//             <h3>Callback</h3>
//             <button onClick={() => {
//                 setCount(count + 1)
//             }}>Counter {count}</button>
//             <Child cc={cb} ></Child>
//         </div>
//     )
// }

// const Child = React.memo(({cc}) => {
//     return (
//         <>
//             {console.log("child component rendered")}
//             <h3>Child component</h3>
//             <button onClick={cc}>Click me</button>
//         </>
//     )
// })



function Callback() {
    const [count, setCount] = useState(0);

    const increment = useCallback(() => {
        setCount(count => count+ 1);
    },[])

    const decrement = useCallback(() => {
        setCount(count=> count - 1);
    },[])

    return (
        <>
            <p>Callback example:</p>
            <p>Counter value is at {count}</p>
            <ButtonC incre={increment} decre={decrement}></ButtonC>
        </>
    )
}

const ButtonC= React.memo((props)=> {
    console.log("Button rendered");
    return (
        <>
            <button onClick={props.incre}>Increment</button>
            <button onClick={props.decre}>Decrement</button>
        </>
    )
})




export default Callback