import { useState } from "react";


// function HOC(WrapperComponent) {

//     return function enhanced(props){
//         const [count, setCount] = useState(0);

//         const increment = () => {
//             setCount(count+1);
//         }
//         const decrement = () => {
//             setCount(count-1);
//         }    
//         return (
//             <WrapperComponent {...props} count={count} increment={increment} decrement={decrement} />
//         )
//     }
// }


// function MyComponent({count, increment, decrement}) {
//     return (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={increment}>Increment</button>
//             <button onClick={decrement}>Decrement</button>
//         </div>
//     )
// }   


// function UseCounter() {

// const [count, setCount] = useState(0);

//   const increment = () => setCount(count + 1);
//   const decrement = () => setCount(count - 1);

//   return {count, increment, decrement};

// }


// export function CounterComponent() {
//     const { count, increment, decrement } = UseCounter();

//     return (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={increment}>Increment</button>
//             <button onClick={decrement}>Decrement</button>
//         </div>
//     );
// }




//HOC function
function withAuth(WrappedComponent) {
    return function Auth(props) {
        const isAuthenticated = () => {
            return false;
        }; // Your auth logic

        if (!isAuthenticated()) {
            return <div>Please log in to access this page</div>;
        }
        return <WrappedComponent {...props} />;

    }

}

//Regular component
function Dashboard() {
    return (
        <>
            <p>Dashboard....</p>
            {/* Dashboardinfo */}
        </>
    )
}

// Enhanced component
export const EnhancedComponent = withAuth(Dashboard);

//export const EnhancedComponent = HOC(MyComponent);
