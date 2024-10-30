import { useDispatch, useSelector } from "react-redux";
import { changeName, changeCost, addCar, resetForm } from "../store/store";



function Carform() {

    const dispatch = useDispatch();
    const { name, cost } = useSelector((state) => {
        return {
            name: state.form.name,
            cost: state.form.cost
        }
    })


    return (
        <div>
            <h4>Add Car</h4>
            <label>CAR NAME:</label>
            <input type="text" value={name} placeholder="Enter the Car name" onChange={(e) => {
                const value = e.target.value;
                
                dispatch(changeName(value))
{                console.log(name)
}            }} required></input>
            <label>CAR COST:</label>
            <input type="number" value={cost || ''} placeholder="Enter the Car cost" onChange={(e) => {
                const value = parseInt(e.target.value) || 0;
                dispatch(changeCost(value))
            }} required></input>
            <button onClick={() => {
                dispatch(addCar({ name, cost }));
                dispatch(resetForm());
            }}>Submit</button>
        </div>
    )
}

export default Carform