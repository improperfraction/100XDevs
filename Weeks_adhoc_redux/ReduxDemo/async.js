const redux = require("@reduxjs/toolkit");
const axios= require("axios");

const {configureStore}= redux
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

    }
}

const fetchuserSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users

    }
}

const fetchuserFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error: ""
            }
        case FETCH_USERS_FAILURE:
            return {
                loading: false,
                users:[],
                error: action.payload
            }

        default: return state;
    }
}

const getUser=()=>{
    return async function(dispatch){
        dispatch(fetchuserRequest())
        try{
            const response= await axios.get("https://jsonplaceholder.typicode.com/users");
            const users= response.data;
            dispatch(fetchuserSuccess(users));
        }
        catch(error)
        {
            dispatch(fetchuserFailure(error.message));
        }
    }
}


const store= configureStore({reducer: reducer, middleware:(getDefaultMiddleware) => getDefaultMiddleware()})
console.log("initial state: ", store.getState());

store.subscribe(()=>{ console.log("data: ", store.getState())});
store.dispatch(getUser());