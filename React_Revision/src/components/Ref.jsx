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

    const [, forecRender] = useState(0);
    const render= useRef(0);
    render.current= render.current +1
    return (
        <>
            {console.log("rendered")}
            <p>Component has rendered {render.current}times on click</p>
            <button onClick={() => {
                forecRender(Math.random());

            }}>re-render</button>

        </>
    )
}



export default Ref;