import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../store/slices";

function CarSearch() {
    const dispatch = useDispatch()

    const searchTerm = useSelector((state:any) => {
        return  state.cars.searchTerm
    })

    const handleSearchTermChange = (event: any) => {
        dispatch(changeSearchTerm(event.target.value))
    }


    return (
        <div className="list-header">
            <h3 className="title is-3">My Cars</h3>
            <div className="search field ishorizontal">
                <label className="label">Search</label>
                <input className="input" value={searchTerm} onChange={handleSearchTermChange} type="text" />
            </div>
        </div>
    )
} 

export default CarSearch;