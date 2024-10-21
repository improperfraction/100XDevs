import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import countState from "./Atom";

function Recoil() {
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
        </>
    )
}

function CountRenderer() {

    const  count  = useRecoilValue(countState);
    return (
        <div>{count}</div>
    )
}

function Button() {

    const [ count, setCount ] = useRecoilState(countState);
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

export default Recoil