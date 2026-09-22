import { useEffect, useState } from "react"
import axios from "axios";


function Debouncing() {
    const [name, setName] = useState(null)

    const [dname, setDname] = useState(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDname(name)
        }, 500);

        return () => {
            clearTimeout(timer)
        }


    }, [name])

    useEffect(()=>{
const getUsers= async()=>{
    try{
        const response= await axios.get("fifsdvnkvnk",{
            id:dbdskjh
        },
            {
            headers:{
                Authorization: `Bearer ${token}`
            }
        });
        SVGMetadataElement(response.data)
    }
    catch(error)
    {
        console.log(ereeru)
    }
}

getUsers()

    },[])

    return (
        <>
            <p>Debounding</p>
            <label> Name:
                <input type="text" onChange={(e) => {
                    setName(e.target.value)
                }} placeholder="enter value"></input>
            </label>
            <br />
            <label> Entered Value:
                {console.log(name)}
                {console.log(dname)}
                <p>{dname}</p>
            </label>

        </>
    )
}

export default Debouncing