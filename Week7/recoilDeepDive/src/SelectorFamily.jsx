import { useRecoilValue, useRecoilValueLoadable, useSetRecoilState } from "recoil"
import { todosid, todosids } from "./Atoms"




export function SelectFamily() {
    return (
        <>
            <Todo id={1}></Todo>
            <Todo id={2}></Todo>
        </>
    )
}


function Todo({ id }) {
    //const todo= useRecoilValue(todosids(id))
    const todo = useRecoilValueLoadable(todosids(id))
    switch (todo.state) {
        case 'loading':
            return <p>Loading user data...</p>;
        case 'hasValue':
            return (
                <div>
                    <h3>{todo.contents.id}</h3>
                    <p>Title: {todo.contents.title}</p>
                    <p>Desc: {todo.contents.description}</p>
                </div>
            )
        case 'hasError':
            return <p>Error loading user data</p>;
        default:
            return null;
    }
}



