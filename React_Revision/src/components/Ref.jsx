import { useRef, useState } from "react"



function Ref() {
    // const myRef= useRef(null);

    // return(
    //     <>
    //     <input ref={myRef} type="text" />
    //     <button onClick={()=>{
    //         myRef.current.focus();
    //     }}>Shift focus</button>
    //     </>
    // )

    // const [, forecRender] = useState(0);
    // const render= useRef(0);
    // render.current= render.current +1
    // return (
    //     <>
    //         {console.log("rendered")}
    //         <p>Component has rendered {render.current}times on click</p>
    //         <button onClick={() => {
    //             forecRender(Math.random());

    //         }}>re-render</button>

    //</>
    //)

    const myref = useRef(null);

    return (
        <>

            <input ref={myref} type="text"></input>
            <button onClick={() => {
                myref.current.focus();
            }}>click here to move focus</button>
        </>
    )
}



export default Ref;