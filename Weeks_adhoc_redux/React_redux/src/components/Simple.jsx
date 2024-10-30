import { useReducer } from "react"

//initial State 
const initialState = {
    count: 0
}

//Action Constant
const INCREMENT = "increment";
const DECREMENT = "decrement";


//Action Creator for increment
function incre() {
    return {
        type: INCREMENT
    }
}

//Action Creator for decrement
function decre() {
    return {
        type: DECREMENT
    }
}

//Reducer: The reducer function is where you define how the state changes in response to an action. 
//The action is an object that describes what should happen to the state.
const reducer = (state = initialState, action) => {
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
        default: return state;

    }
}

function SimpleCounter() {

    //useReducer hook where
    //state: current value of state
    //dispatch: function along with action with which you can change the state value
    //reducer: A function that takes two arguments, the current state and an action, and returns a new state.
    //initialState: The initial value for the state.
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <h2>Count is {state.count}</h2>
            <button onClick={() => {
                //To update the state, you call the dispatch function with an action/action creaor fn. 
                //The reducer function will handle the state update based on the type of action passed to dispatch
                dispatch(incre());
            }}>Increment</button>
            <button onClick={() => {
                dispatch(decre())
            }}>Decrement</button>
        </>
    )
}

export default SimpleCounter