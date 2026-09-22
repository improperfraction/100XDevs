
import { useEffect, useState } from "react"
import axios from 'axios'


function Counter() {
    const [count, setCount] = useState(1);

    return (
        <>
            <p>Counter</p>
            <p>Count value is {count}</p>
            <button onClick={() => {
                setCount(count + 1)
            }}>Increment</button>
            <button disabled={count <= 1} onClick={() => {
                setCount(count - 1)
            }}>Decrement</button>
            <Useeff id={count}></Useeff>
        </>
    )
}

function Useeff({ id }) {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users?id=${id}`);
            console.log(response.data);
            setData(response.data[0]);
        }
        fetchData();
    }, [id])

    return (
        <>
            <h1>useEffect</h1>
            {/* {
                data.map((user) => {
                    return (
                        <div key={user.id}>
                            <p >{user.name}</p>
                            <p>{user.email}</p>
                        </div>
                    )
                })
            } */}
            <p>{data.id}</p>
            <p >{data.name}</p>
            <p>{data.email}</p>
        </>
    )
}

export default Counter;