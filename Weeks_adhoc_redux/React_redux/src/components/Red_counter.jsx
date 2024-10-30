import { act, useReducer, useState } from "react"

const INCREMENT= "increment";
const DECREMENT= "decrement";
const NUMTOADD= "NumToAdd";
const ADDIT= "addit";


function Increment() {
    return {
        type: INCREMENT
    }
}
function Decrement() {
    return {
        type: DECREMENT
    }
}

function numtoAdd(value) {
    return {
        type: NUMTOADD,
        payload: value
    }
}
function addIt() {
    return {
        type: ADDIT
    }
}


function RCounter() {
    // const [count, setCount]= useState(0)
    // const [num, setNum]= useState(0);
    const reducer = (state, action) => {
        switch (action.type) {
            case INCREMENT:
                return {
                    ...state,
                    count: state.count + 1
                };
            case DECREMENT:
                return {
                    ...state,
                    count: state.count - 1
                };
            case ADDIT:
                return {
                    ...state,
                    count: state.count + state.num,
                    num: 0

                };
            case NUMTOADD:
                return {
                    ...state,
                    num: action.payload
                };
            default: return state;
        }

    }
    const [state, dispatch] = useReducer(reducer, {
        count: 10,
        num: 0
    })

    return (
        <>
            <h2>Counter {state.count}</h2>
            <button onClick={() => {
                dispatch(Increment())
            }}>Increment</button>
            <button onClick={() => {
                dispatch(Decrement())
            }}>Decrement</button>
            <label>
                <input type="number" placeholder="number" value={state.num || ''} onChange={(e) => {
                    const value = parseInt(e.target.value) || 0;
                    dispatch(numtoAdd(value))
                    console.log(state);

                }}></input>
            </label>
            <button onClick={() => {
                // setCount(count+num);
                // setNum(0);
                dispatch(addIt())
            }}>Add it </button>
        </>
    )
}

export default RCounter