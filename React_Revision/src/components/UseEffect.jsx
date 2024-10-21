
import { useEffect } from "react"

function Useeff()
{

    useEffect(()=>{
            
        async function fetchdata()
        {
            try{
                const response= await axios.get(".com");

                if(response.status=="200")
                {
                    console.log(response.data.todos)
                }
            }
            catch(error)
            {
                    console.log(error.response)
            }
        }
    }, [])

    return (
<div></div>
    )

}