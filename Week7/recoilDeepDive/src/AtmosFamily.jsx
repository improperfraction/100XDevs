import { RecoilRoot, useRecoilValue, useRecoilValueLoadable } from "recoil"
import { todosid } from "./Atoms"

export const TODOS = [{
    id: 1,
    title: "Go to Gym",
    description: "From 7 to 9 PM ",
    completed: true
},
{
    id: 2,
    title: "Study",
    description: "From ",
    completed: false
}]

export function AtomsFamily()
{
    return <>
        <Todos id={1}></Todos>
        <Todos id={2}></Todos>
    </>
}

function Todos({id})
{
    const todo=useRecoilValueLoadable(todosid(id))
    switch (todo.state) {
        case 'loading':
          return <><div>Loading user data...</div></>
        case 'hasValue':
    return <>
    <p>{todo.id}</p>
    <p>{todo.title}</p>
    <p>{todo.description}</p>
    </>
    }
}

