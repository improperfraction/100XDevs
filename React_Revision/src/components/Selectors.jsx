import React from 'react';
import countState from './Atom';
import { RecoilRoot, selector, useRecoilState, useRecoilValue } from 'recoil';


const typeofNum = selector({
    key: "typeofNum",
    get: ({ get }) => {
        const count = get(countState);
        if (count % 2 == 0) {
            return `${count} is even number`
        }
        else {
            return `${count} is odd number`
        }
    }
}
)

function Selectors() {
    return (
        <RecoilRoot>
            <Count></Count>
        </RecoilRoot>
    )
}

function Count() {
    return (
        <>
            <CountRenderer ></CountRenderer>
            <Button></Button>
            <TypeoofNum></TypeoofNum>
        </>
    )
}

function CountRenderer() {

    const count = useRecoilValue(countState);
    return (
        <div>{count}</div>
    )
}

function Button() {

    const [count, setCount] = useRecoilState(countState);
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
    const typeofnum = useRecoilValue(typeofNum)
    return (
        <p>{typeofnum}</p>
    )
}

export default Selectors;