import { useState } from "react";

function Pagination() {

    const list = Array.from({ length: 54 }, (_, i) => i + 1);
    const [cPage, setcPage] = useState(1);

    const itemsPP=8;
    const totalP= Math.ceil(list.length/itemsPP);
    // const lastE= cPage * itemsPP;
    // const firstE= lastE- itemsPP;
      
    const firstE= cPage *itemsPP-itemsPP;
    const lastE= firstE+itemsPP;

    const currentItems= list.slice(firstE, lastE);

    return (
        <>
            <h3>Pagination example</h3>
            {
                currentItems.map((it)=>{
                    return(
                        <div>
                            <p>{it}</p>
                        </div>
                    )
                })
            }
            <p>Page {cPage} of {totalP}</p>
            <button disabled={cPage>=totalP} onClick={()=>{
                setcPage(cPage+1)
            }}>next</button>
            <button disabled={cPage<=1} onClick={()=>{
                setcPage(cPage-1)
            }}>previous</button>
        </>
    )
}


export default Pagination