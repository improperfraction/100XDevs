import React, { useCallback, useState } from "react";

function ConditionalR() {
    const [count, SetCount] = useState(0);
    return (
        <>
            <button onClick={() => {
                SetCount(count + 1)
            }}>Count value is {count}</button>
            {/* <IfElse count={count}></IfElse> */}
            {/* <Ternary count={count}></Ternary> */}
            <AndAnd count={count}></AndAnd>
        </>
    )
}

//1. Using if-else statement
function IfElse({ count }) {
    if (count % 2 == 0) {
        return (
            <p>Count is even number</p>
        )
    }
    else {
        return (
            <p>Count is odd number</p>
        )
    }

}

//2. Using the ternary operator
function Ternary({ count }) {
    return (
        <div>
            {count % 2 == 0 ? <p>Count is even number</p> : <p>Count is odd number</p>}
        </div>
    )
}

//3. Using && (short-circuiting)-If you want to render something only if a condition is true (and do nothing if false)
function AndAnd({ count }) {
    return (
        <div>
            {count % 2 == 0 && <p>Count is even number</p>}
            {count % 2 == 1 && <p>Count is odd number</p>}

        </div>
    )
}


export default ConditionalR