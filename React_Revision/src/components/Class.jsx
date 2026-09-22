
import React from "react"
import axios from "axios";


class Welcome extends React.Component {
    constructor() {
        super();
        this.state = { count: 0 }
        console.log("constructor is called");
    }

    Incre = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    componentDidMount() {
        console.log("componentDidMount is called");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate is called");
        if (nextState.count > 8) {
            return false;
        }
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate is called");
        return `Previous count was ${prevState.count}`;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate is called");
        console.log(snapshot);
    }

    render() {
        return (
            <>
                {console.log("render method is called")}
                <h1>Mountong Lifecycle methods </h1>
                <button onClick={this.Incre}>Counter {this.state.count}</button>
                {/* <Derived initialCount={6}></Derived> */}
            </>
        )
    }

}


class Prac extends React.Component {

    //Constructor defined
    constructor(props) {
        super(props)
        //initializing the state
        this.state = {
            count: 1
        }
    }

    //function to modify the state
    Increment = () => {
        this.setState({ count: this.state.count + 1 })

    }
    Decrement = () => {
        this.setState({ count: this.state.count - 1 })

    }

    //render method to return the JSX
    render() {
        return (
            <>
                <h1>This is a class component</h1>
                <div>Counter is at {this.state.count}</div>
                <button onClick={this.Increment}>increment</button>
                <button disabled={this.state.count <= 1} onClick={this.Decrement}>Decrement</button>
                <Users count={this.state.count}></Users>
            </>
        )
    }
}

class Users extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            id: props.count,
            user: {}
        }
    }

    static getDerivedStateFromProps(props, state) {
        if (props.count != state.id) {
            return { id: props.count }
        }
        return null;

    }

    async fetchUser(id) {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        this.setState({ user: res.data })
    }

    async componentDidMount() {
        this.fetchUser(this.state.id)
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (
            nextState.id != this.state.id ||
            nextState.user != this.state.user
        ) {
            return true
        }
        else{
            return false;
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.id != this.state.id) {
            this.fetchUser(this.state.id)
        }
    }

    render() {
        { console.log(this.state.id) }
        { console.log("Users rendered") }
        { console.log(this.state.user.name) }
        return (
            < div >
                <p>{this.state.user.id}</p>
                <p> {this.state.user.name}</p>
                <p>{this.state.user.phone}</p>
            </div >
        )
    }
}

export default Prac






