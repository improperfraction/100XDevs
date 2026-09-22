import axios from "axios";
// import React, { useCallback, useContext, useEffect, useRef, useState } from "react"
// import { EnhancedComponent } from "./HOC";
// import CountContext from "./CountCntxt";

import React, { createContext, useContext, useEffect, useState } from "react"
import { atom, RecoilRoot, selector, useRecoilState, useRecoilValue, useRecoilValueLoadable } from "recoil";

// // class Prac extends React.Component {
// //     constructor(props) {
// //         super(props);
// //         this.state = {
// //             count: 1,
// //             users: []
// //         }
// //     }
// //         render()
// //         {
// //             return (
// //                 <>
// //                     <h3>{this.state.count}</h3>
// //                     <button onClick={() => {
// //                         this.setState({ count: this.state.count + 1 })
// //                     }}>Increment</button>
// //                     {
// //                         this.state.users.map((user)=>{
// //                            return(
// //                             <p key={user.id}> {user.name}</p>
// //                            )
// //                         })
// //                     }
// //                 </>
// //             )
// //         }

// //        async componentDidMount()
// //         {
// //             const list= await axios.get("https://jsonplaceholder.typicode.com/users");
// //             this.setState({users: list.data})
// //         }

// //     }

















// // function Counter() {
// //     const [count, setCount] = useState(0);
// //     return (
// //         <>
// //             <p> Counter is at {count}</p>
// //             <button className="bg-blue-500 m-1  text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400" onClick={() => {
// //                 setCount(count + 1);
// //             }} >increment</button>
// //             <button className="bg-blue-500 m-1  text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400" onClick={() => {
// //                 setCount(count - 1);
// //             }} >decrement</button>
// //         </>
// //     )
// // }

// // function Child({ name }) {
// //     return (
// //         <>
// //             {console.log("Child component rendered")}
// //             <p>Hi, Good morning!! {name}</p>
// //         </>
// //     )
// // }
// // class Prac extends React.Component {
// //     constructor(props) {
// //         super(props);
// //         this.state = {
// //             count: 0,
// //             users: []
// //         }
// //         console.log("Prac component constructor called");
// //     }

// //     async componentDidMount() {
// //         console.log("Prac component mounted");
// //         // Fetching data from API
// //         const response = await axios.get("https://jsonplaceholder.typicode.com/users");
// //         console.log(response.data);
// //         this.setState({ users: response.data });
// //     }

// //     render() {
// //         return (
// //             <>
// //                 {console.log("Prac component rendered")}
// //                 <h1>Class Component</h1>
// //                 <p>Counter value is {this.state.count}</p>
// //                 <button className="bg-blue-500 m-1  text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400" onClick={() => {
// //                     this.setState({ count: this.state.count + 1 })
// //                 }}>Increment</button>
// //                 <button className="bg-blue-500 m-1  text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400" onClick={() => {
// //                     this.setState({ count: this.state.count - 1 })
// //                 }}>Decrement</button>

// //                 {
// //                     this.state.users.map((user, index) => {
// //                         return (
// //                             <div key={index} className="bg-blue-500 m-1  text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
// //                                 <p>{user.name}</p>
// //                                 <p>{user.email}</p>
// //                             </div>
// //                         )
// //                     })
// //                 }
// //             </>
// //         )
// //     }
// // }

// function Prac() {

//     const [count, setCount] = useState(0);
//     const [numb, setNumb] = useState(0);
//     const [bitch, setBitch] = useState("");
//     const cref = useRef(null);

//     const Bfinder = useCallback(async () => {
//         const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${numb}`)
//         setBitch(res.data);
//         cref.current.focus();

//     }, [numb])

//     return (
//         <>
//             <CountContext.Provider value={{cref, setNumb, bitch, Bfinder}}>
//                 <h2>Welcome bitches</h2>
//                 <p >Bitch Counter: {count}</p>
//                 <button onClick={() => {
//                     setCount(count + 1);
//                 }}>Increase bitchiness</button>
//                 <br />
//                 <button onClick={() => {
//                     setCount(count - 1);
//                 }}>Decrease bitchiness</button>
//                 {/* <BitchFinder cref={cref} setNumb={setNumb} bitch={bitch} bf={Bfinder}></BitchFinder> */}
//                 <BitchFinder ></BitchFinder>
//             </CountContext.Provider>
//         </>
//     )
// }

// const BitchFinder = React.memo(() => {

//     const {cref, setNumb, bitch, Bfinder}= useContext(CountContext);

//     { console.log("BitchFiner is rendered") }
//     return (
//         <>
//             <p>Which bitch to show:</p>
//             <input ref={cref} type="number" onChange={(e) => {
//                 setNumb(e.target.value);
//             }} placeholder="please enter the numerical value"></input>
//             <button onClick={Bfinder}>Find out</button>
//             <p>Selected bitch details: </p>
//             <p>{bitch.name}</p>
//             <p>{bitch.email}</p>
//         </>
//     )
// })



// //Hoc
// function WithCounter(WrappedComponent) {
//     return function Counter(props) {
//         const [count, setCount] = useState(0);

//         const increment = () => {
//             setCount(count + 1);
//         }

//         const decrement = () => {
//             setCount(count - 1);
//         }

//         return <WrappedComponent {...props} count={count} increment={increment} decrement={decrement} />
//     }
// }


// function Counter({ count, increment, decrement }) {
//     return (
//         <>
//             <p>counter: {count}</p>
//             <button onClick={increment}>Increment</button>
//             <button onClick={decrement}>Decrement</button>
//         </>
//     )

// }

// // const WorkingCounter= WithCounter(Counter)

// // export default WorkingCounter;
// export default Prac;


const list = [
    { id: 1, name: "mayur" },
    { id: 2, name: "abhi" },
    { id: 3, name: "siddhu" },
    { id: 4, name: "manju" }
];

// class Prac extends React.Component {

//     //Constructor defined
//     constructor(props) {
//         super(props)
//         //initializing the state
//         this.state = {
//             count: 1
//         }
//     }

//     //function to modify the state
//     Increment = () => {
//         this.setState({ count: this.state.count + 1 })

//     }
//     Decrement = () => {
//         this.setState({ count: this.state.count - 1 })

//     }

//     //render method to return the JSX
//     render() {
//         return (
//             <>
//                 <h1>This is a class component</h1>
//                 <div>Counter is at {this.state.count}</div>
//                 <button onClick={this.Increment}>increment</button>
//                 <button disabled={this.state.count <= 1} onClick={this.Decrement}>Decrement</button>
//                 <Users count={this.state.count}></Users>
//             </>
//         )
//     }
// }

// class Users extends React.Component {

//     constructor(props) {
//         super(props)
//         this.state = {
//             id: props.count,
//             user: {}
//         }
//     }

//     static getDerivedStateFromProps(props, state) {
//         if (props.count != state.id) {
//             return { id: props.count }
//         }
//         return null;

//     }

//     async fetchUser(id) {
//         const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
//         this.setState({ user: res.data })
//     }

//     async componentDidMount() {
//         this.fetchUser(this.state.id)
//     }

//     shouldComponentUpdate(nextProps, nextState) {
//         return (
//             nextState.id != this.state.id ||
//             nextState.user != this.state.user
//         )
//     }

//     componentDidUpdate(prevProps, prevState) {
//         if (prevState.id != this.state.id) {
//             this.fetchUser(this.state.id)
//         }
//     }

//     render() {
//         { console.log(this.state.id) }
//         { console.log("Users rendered") }
//         { console.log(this.state.user.name) }
//         return (
//             < div >
//                 <p>{this.state.user.id}</p>
//                 <p> {this.state.user.name}</p>
//                 <p>{this.state.user.phone}</p>
//             </div >
//         )
//     }
// }
class Banner extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>Good Morning, {this.props.name}</div>
        )
    }
}

const userDetails = selector({
    key: "userDetails",
    get: async ({ get }) => {
        const id = get(countAtom);
        console.log(id);
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        console.log(response.data);
        return response.data;
    }
})

const countAtom = atom({
    key: "countAtom",
    default: 1
})

function Prac() {
    const [count, setCount] = useState(0);
    return (
        <RecoilRoot>
            <Count count={count} setCount={setCount}></Count>
            <UDetails />
            <UDLoadable />
        </RecoilRoot>
    )
}

function Count() {
    return (
        <>
            <CountRenderer ></CountRenderer>
            <Button ></Button>
        </>
    )
}

function CountRenderer() {
    const count = useRecoilValue(countAtom)
    return (
        <div>{count}</div>
    )
}

function Button() {
    const [count, setCount] = useRecoilState(countAtom)
    return (
        <div>
            <button onClick={() => {
                setCount(count + 1)
            }}>Increment</button>
            <button disabled={count == 1} onClick={() => {
                setCount(count - 1)
            }}>Decrement</button>
        </div>


    )
}

function UDetails() {
    const user = useRecoilValue(userDetails);
    return (
        <>
            <p>{user.id}</p>
            <p>{user.name}</p>
        </>

    )
}

function UDLoadable() {
    const user = useRecoilValueLoadable(userDetails)
    return (
        <>
            {user.state === "loading" && <p>Loading... please wait</p>}
            {user.state === "hasError" && <p>error has occured</p>}
            {user.state === "hasValue" && <div>
                <p>{user.contents.id}</p>
                <p>{user.contents.name}</p></div>}
        </>

    )
}

function Pracx()
{
    const [count, setCount]= useState(0);
    return(
        <>
        <button onClick={()=>{
            setCount(count+1)
        }}>{count}</button>
        </>
    )
}











export default Prac