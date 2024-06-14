import { useSelector } from "react-redux";

function CarValue() {
    // const totalCost = 10
    const totalCost = useSelector(({cars: { data, searchTerm }}: any) => 
            data
                .filter((car: any) => {
                    return car.name.toLowerCase().includes(searchTerm.toLowerCase())
                })
                .reduce((acc: any,car: any) => acc + car.cost ,0)

    )
    return <div className="car-value">
        Total Cost: ${totalCost}
    </div>
} 

export default CarValue;