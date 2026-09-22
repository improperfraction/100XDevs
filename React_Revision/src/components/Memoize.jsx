import { useEffect, useMemo, useState } from "react"

const list = [
    { id: 1, name: "mayur" },
    { id: 2, name: "abhi" },
    { id: 3, name: "siddhu" },
    { id: 4, name: "manju" }
];

// function Memoize()
// {
//     const[count, setCount]= useState(0);
//     const [input, setInput]= useState(0)

//     let sum=0;
//     ///let  add=useMemo(()=>{
//         let add= useMemo(()=>{
//         console.log("add is called");
//         const inp= parseInt(input);
//        sum= inp*(inp+1)/2
//        return sum; 
//     }, [input]);

//     return(
//         <>
//         <input type="number" onChange={(e)=>{
//             setInput(e.target.value);
//         }}></input>
//         <h3>sum of numbers from 1 to {input} is {add || 0 } </h3>

//         <button onClick={()=>{
//             setCount(count+1)
//         }}>Counter {count}</button>
//         </>
//     )
// }



function Memoize() {
    const [sch, setSch] = useState(" ");
    //const [slist, setSlist] = useState([]);
    // useEffect(() => {
    //     function SchUser() {
    //         const UserList = list.filter((user) => {
    //             return user.name.toLocaleLowerCase().includes(sch.toLocaleLowerCase())
    //         })
    //         setSlist(UserList);
    //     }
    //     SchUser();
    // }, [sch])


    const SchUser= useMemo(()=>{
        const UserList= list.filter((user)=>{
            return user.name.toLocaleLowerCase().includes(sch.toLocaleLowerCase());
        })
        return UserList;
    },[sch])

    return (
        <>
            <h1>Memoize Example</h1>
            <div>
                <p>Total users</p>
                {list.map((user) => {
                    return (
                        <div key={user.id}>
                            <p>{user.id} {user.name}</p>
                        </div>
                    )
                })}
                <p>Filter list:</p>
                <input type="text" onChange={(e) => {
                    setSch(e.target.value);
                }}></input>
                {
                    SchUser.map((sl) => {
                        return (
                            <div key={sl.id}>
                                <p>{sl.id} {sl.name}</p>     
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Memoize