import { useRef } from "react"



function Ref()
{
    const inref= useRef(null);

    function focus()
    {
        inref.current.focus();
    }


    return(
        <>
        <input type="number" ref={inref}  />
        <button onClick={focus}>focus</button>
        </>
    )
}

export default Ref;