import { useDispatch, useSelector } from "react-redux";
import { addCar, changeCost, changeName } from "../store/slices";

function CarForm() {
    const dispatch = useDispatch()

    const {name, cost} = useSelector((state: any) => {
        return {
            name: state.form.name,
            cost: state.form.cost,
        }
    })
    
   
    const handleNameChange = (event: any) => {
        dispatch(changeName(event.target.value))
    }

    const handleCostChange = (event: any) => {
        const carCost = parseInt(event.target.value) || 0
        dispatch(changeCost(carCost))
    }

    const handleFormSubmit = (event: any) => {
            event.preventDefault()
            dispatch(addCar({
                name,
                cost
            }))

            dispatch(changeCost(0))
            dispatch(changeName(''))
    }

    
    return <div className="car-form panel">
        <h4 className="subtitle is-3">Add Car</h4>
        <form onSubmit={handleFormSubmit}>
            <div className="field-group">
                <div className="field">
                    <label className="label">Name</label>
                    <input className="input is-expanede" value={name} onChange={handleNameChange}/>
                </div>
            </div>
            <div className="field-group">
                <div className="field">
                    <label className="label">Cost</label>
                    <input className="input is-expanede" value={cost || ''} onChange={handleCostChange} type="number"/>
                </div>
            </div>
            <div className="field">
                <button className="button is-link">Submit</button>
            </div>
        </form>
    </div>
} 

export default CarForm;