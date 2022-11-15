import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/searchbar.jsx";
import BreedFilter from "../Botones/Filters/breedsFilter.jsx"
import TempersFilter from "../Botones/Filters/tempersFilter.jsx"
import AlphabeticalSort from "../Botones/Sort/alphabeticalSort.jsx"
import WeightSort from "../Botones/Sort/weightSort.jsx"
import './navbar.css'
import Reset from "../Botones/Reset/reset.jsx";

export default function Navbar({paginate}) {
  return (
    <div className="navbar-container">
      <div> <Reset /> </div>
      <div>
        <Link to="/create">
          <button className="breed-create">Crear nueva raza</button>
        </Link>
      </div>
      <div> <BreedFilter paginate={paginate}/> </div>
      <div> <TempersFilter paginate={paginate}/> </div>
      <div> <AlphabeticalSort paginate={paginate}/> </div>
      <div> <WeightSort paginate={paginate}/> </div>
      <div> <SearchBar paginate={paginate}/> </div>
    </div>
  )
};
