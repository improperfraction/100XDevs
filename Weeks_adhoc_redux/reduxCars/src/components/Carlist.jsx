import { useSelector, useDispatch } from "react-redux"
import { removeCar } from "../store/store";

function Carlist()
{
    
    const cars= useSelector((state)=>{
        return state.cars.cars.filter((car)=>{
           return car.name.toLowerCase().includes(state.cars.searchTerm.toLowerCase());
        })
    })

    const carname= useSelector((state)=>{
        return state.form.name;
    })
    return(
        <Cars unit={cars} dupname={carname} ></Cars>
    )
}

function Cars({unit, dupname})
{
    const dispatch= useDispatch();
    return(
        <div>
            {unit.map((car)=>{
{                console.log(dupname)
}                const isDuplicate = dupname && car.name.toLowerCase().includes(dupname.toLowerCase());
                return <div className={`p-4 rounded-md shadow-md ${isDuplicate ? 'bg-yellow-200' : 'bg-white'}`} key={car.id}>
                    <p>{car.name} -Rs.{car.cost}</p>
                   <button onClick={()=>{
                        dispatch(removeCar(car.id))
                   }}>delete</button>
                </div>
            })}
        </div>
    )
}

export default Carlist