const redux = require("@reduxjs/toolkit");
const { configureStore } = redux;
const thunkMiddleware = require("redux-thunk").default;

const initialState = {
    loading: false,
    users: [],
    error: ""
};

const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

const fetchuserRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    };
};

const fetchuserSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    };
};

const fetchuserFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload, // Fix: update users property with payload
                error: ""
            };
        case FETCH_USERS_FAILURE: // Fix: This case was incorrectly named as FETCH_USERS_REQUEST
            return {
                ...state,
                loading: false,
                users: [], // Fix: Clear users array on failure
                error: action.payload // Fix: Update error with payload
            };
        default:
            return state; // Fix: Add default case to return current state
    }
};

const store = configureStore({
    reducer: reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

console.log("Initial State:", store.getState());
