import { useSelector } from "react-redux"
import { changeSearchterm } from "../store/store";

function Carvalues()
{
    let cost=0;
    const totalCost= useSelector((state)=>{
  
        const filteredCars= state.cars.cars.filter((car)=>{
            return car.name.toLowerCase().includes(state.cars.searchTerm.toLowerCase())
        })
       return filteredCars.reduce((acc, car)=>{
return acc+ parseInt(car.cost)
       },0)
    })
    return(
        <div>car values: {totalCost}</div>
    )
}

export default Carvalues