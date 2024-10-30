export function Todos({todos})
{
    // return <div>
    //     <p>Go to Gym</p>
    //     <p>From 7 to 9 PM</p>
    //     <button>Mark it as Completed</button>
    // </div>

    return <div>
        {
        todos.map((todo)=>{
            return <div>
                <p>{todo.title}</p>
                <p>{todo.description}</p>
                <button onClick={
                    ()=>{
                        fetch("http://localhost:3000/complete",
                        {
                            method: "PUT",
                            body: JSON.stringify(
                                {
                                    id: '66bb15aa1a8b88a85b8b423a',
                                  
                                }
                            ),
                            headers:{
                                "Content-Type": "application/json"
                            }
                        }).then(async function(res){
                            const jsonres= await res.json();
                        })
                    }
                }>{todo.completed==true? "completed": "Mark it as complete"}</button>
            </div>
        })
    }
    </div>
    
}