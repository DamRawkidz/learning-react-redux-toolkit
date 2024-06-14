import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store/slices";

function CarList() {

    const dispath = useDispatch()
    const {cars, name} = useSelector(({form ,cars: { data, searchTerm }}: any) => {
        const filterCars = data.filter((car: any) => car.name.toLowerCase().includes(searchTerm.toLowerCase()))

        return {
            cars: filterCars,
            name: form.name
        }
    })



    const handleCarDelete = (car: any) => {
            dispath(removeCar(car.id))
    }

    const renderCars = cars.map((car: any) => {
        const bold  = name && car.name.toLowerCase().includes(name.toLowerCase())
        return (
            <div key={car.id} className={`panel ${bold && 'bold'}`}>
                <p>
                    {car.name} - ${car.cost}
                </p>
                <button className="button is-danger" onClick={() => handleCarDelete(car)}>
                    delete
                </button>
            </div>
        )
    })
    
    return <div className="car-list">
            {renderCars}
            <hr />
        </div>
} 

export default CarList;