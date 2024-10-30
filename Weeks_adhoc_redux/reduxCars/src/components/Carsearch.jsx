import { useDispatch, useSelector } from "react-redux";
import { changeSearchterm } from "../store/store";

function Carsearch() {
    const searchterm= useSelector((state)=>{
        return state.cars.searchTerm
    })

    const dispatch = useDispatch()
    return (

        <div>
            <div>car Search</div>
            <input type="text" value={searchterm} placeholder="enter car name" onChange={(e) => {
                const value = e.target.value || "";
                dispatch(changeSearchterm(value))

            }}></input>
        </div>
    )
}

export default Carsearch