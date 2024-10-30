const redux = require("@reduxjs/toolkit");
const reduxLogger= require("redux-logger");

const createStore = redux.configureStore;
const combinedReducers= redux.combineReducers
const Logger= reduxLogger.createLogger();


const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

function buyCake() {
    return {
        type: BUY_CAKE
    }
}
function buyICECREAM() {
    return {
        type: BUY_ICECREAM
    }
}

const initialcakeState={
    numofCakes: 10
}

const initialicecreamState={
    numofIcecreams: 20

}

const cakeReducer= (state=initialcakeState, action)=>{
    switch (action.type) {
        case "BUY_CAKE":
            return {
                ...state,
                numofCakes: state.numofCakes - 1
            };
        default: return state;
    }
}

const icecreamReducer= (state=initialicecreamState, action)=>{
    switch (action.type) {
        case "BUY_ICECREAM":
            return {
                ...state,
                numofIcecreams: state.numofIcecreams - 1
            };
        default: return state;
    }
}

const rootReducer= combinedReducers({
    cakes: cakeReducer,
    ice_creams: icecreamReducer
})
const store = createStore({reducer: rootReducer, middleware: (getdefaultMiddleware)=> getdefaultMiddleware().concat(Logger)} );

console.log("initial state:", store.getState());

const unsubscribe = store.subscribe(() => { console.log("updated state is ", store.getState()) });

store.dispatch(buyCake());
store.dispatch(buyICECREAM());
store.dispatch(buyICECREAM());
unsubscribe();

