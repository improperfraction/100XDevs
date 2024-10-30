import { useSelector, useDispatch } from "react-redux";
import { assignNum, decrement, increment, addit, resetNum } from "../redux/ReduxStore";
function ReduxCounter() {

    // Get the dispatch function to send actions
    const dispatch = useDispatch();

    // Access the counter state from Redux store
    const count = useSelector((state) => {
        console.log(state);
        return state.counter.count
    })

    const numb = useSelector((state) => {
        console.log(state);
        return state.number.num
    })

    return (
        <>
            <h2>Count is {count}</h2>
            <button onClick={() => { 
                dispatch(increment());
            }}>Increment</button>
            <button onClick={() => {
                dispatch(decrement())
            }}>Decrement</button>
            <label>
                <input type="number" placeholder="number" value={numb} onChange={(e) => {
                   const value= parseInt(e.target.value) || 0;
                  dispatch( assignNum(value))
                  console.log(numb)
                }}></input>
            </label>
            <button onClick={() => {
               dispatch( addit(numb))
               dispatch(resetNum())
            }}>Add it </button>
        </>
    )
}

export default ReduxCounter