import logo from './logo.svg';
import { useState } from 'react'
import './App.css';
function App() {
const [todos, SetTodo]= useState([
  { 
    title: "Go to gym",
    description: "from 7 to 9 pm"
  },
  { 
    title: "study DSA",
    description: "from  5 to 6 pm"
  },

])
   
  return (

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
        
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <div>
      {/* {JSON.stringify(todos)} */}
      {/* <Todo title={todos[0].title} description={todos[0].description}></Todo> */}
      {
        todos.map((todo)=>{
          return <Todo title={todo.title} description={todo.description}></Todo>
        })
      }
    </div>
  );
}

function Todo(props)
{
  return <div>
   <p> <b>Title:</b> { props.title} </p>
   <p> <b>Description:</b> {props.description}
    </p>
  </div>
}

export default App;
