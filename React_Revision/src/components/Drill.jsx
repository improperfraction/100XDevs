import React, { useContext, useState } from "react"
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from "recoil"

// function Drill() {
//     const [count, setCount] = useState(0);
//     return (
//         <Count count={count} setCount={setCount}></Count>
//     )
// }

// function Count({ count, setCount }) {
//     return (
//         <>
//             <CountRenderer count={count}></CountRenderer>
//             <Button count={count} setCount={setCount}></Button>
//         </>
//     )
// }

// function CountRenderer({ count }) {
//     return (
//         <div>{count}</div>
//     )
// }

// function Button({ count, setCount }) {
//     return (
//         <div>
//             <button onClick={() => {
//                 setCount(count + 1)
//             }}>Increment</button>
//             <button onClick={() => {
//                 setCount(count - 1)
//             }}>Decrement</button>
//         </div>


//     )
// }


const countAt = atom({
    key: "countAt",
    default: 0
})


const oddEven = selector({
    key: "oddEven",
    get: ({ get }) => {
        const count = get(countAt);
        if (count % 2 == 0)
            return `${count} is even number`
        else
            return `${count} is odd number`

    }
})

function Drill() {
    return (
        <RecoilRoot>
            <Count></Count>
        </RecoilRoot>
    )
}

function Count() {
    return (
        <>
            {console.log("Count rendered")}
            <CountRenderer></CountRenderer>
            <Button ></Button>
            <TypeoofNum/>
        </>
    )
}

function CountRenderer() {
    const count = useRecoilValue(countAt);
    return (
        <div>{count}</div>
    )
}

function Button() {
    const [count, setCount] = useRecoilState(countAt);
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

function TypeoofNum() {
    const NumType = useRecoilValue(oddEven);
    return (
        <p>{NumType}</p>
    )
}

export default Drill