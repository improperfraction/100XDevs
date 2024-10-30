const redux = require("@reduxjs/toolkit");
const createStore = redux.configureStore;

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


const initialState = {
    numofCakes: 10,
    numofIcecreams: 20
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case "BUY_CAKE":
            return {
                ...state,
                numofCakes: state.numofCakes - 1
            };
        case "BUY_ICECREAM":
            return {
                ...state,
                numofIcecreams: state.numofIcecreams - 1
            };

        default: return state;
    }
}


const store = createStore({ reducer });

console.log("initial state:", store.getState());

const unsubscribe = store.subscribe(() => { console.log("updated state is ", store.getState()) });

store.dispatch(buyCake());
store.dispatch(buyICECREAM());
store.dispatch(buyICECREAM());
unsubscribe();

