import { useReducer } from "react";



const initialState = {
    count: 0
};

function incre() {
    return {
        type: "INCREMENT"
    }
}
function decre() {
    return {
        type: "DECREMENT"
    }
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                ...state,
                count: state.count + 1
            }
        case "DECREMENT":
            return {
                ...state,
                count: state.count - 1
            }
    }
}



function UseReducer() {
   const [state, dispatch]= useReducer(reducer, initialState)

   return(
    <>
    <h3>User Reducer counter</h3>
    <p>{state.count}</p>
    <button onClick={()=>{
        dispatch(incre())
    }}>Increment</button>
    <button onClick={()=>{
        dispatch(decre())
    }}>Decrement</button>
    </>
   )
}

export default UseReducer