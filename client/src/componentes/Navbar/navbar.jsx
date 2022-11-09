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
      {/* opcion1 */}
      {/* <div className="filtros-orden">
        <Reset />
        <div className="create-box">
          <Link to="/create">
            <button className="create-breed">Crear nueva raza</button>
          </Link>
        </div>
        <BreedFilter paginate={paginate}/>
        <TempersFilter paginate={paginate}/>
        <AlphabeticalSort paginate={paginate}/>
        <WeightSort paginate={paginate}/>
      </div>
      <div className="search-bar">
        <SearchBar paginate={paginate}/>
      </div> */}
    
      {/* opcion2 */}
        <div>
          <Reset />
        </div>
        <div>
          <Link to="/create">
            <button className="breed-create">Crear nueva raza</button>
          </Link>
        </div>
        <div>
          <BreedFilter paginate={paginate}/>
        </div>
        <div>
          <TempersFilter paginate={paginate}/>
        </div>
        <div>
          <AlphabeticalSort paginate={paginate}/>
        </div>
        <div>
          <WeightSort paginate={paginate}/>
        </div>
        <div>
          <SearchBar paginate={paginate}/>
        </div>
    </div>

    
    //anterior
    // <div className="navbar-container">
    //   <div className="filtros-orden">
    //     <Reset />
    //     <BreedFilter paginate={paginate}/>
    //     <TempersFilter paginate={paginate}/>
    //     <AlphabeticalSort paginate={paginate}/>
    //     <WeightSort paginate={paginate}/>
    //   </div>
    //   <div className="search-bar">
    //     <Link to="/create">
    //       <button className="create-breed">Crear nueva raza</button>
    //     </Link>
    //     <div className="search">
    //       <SearchBar paginate={paginate}/>
    //     </div>
    //   </div>
    // </div>
  )
};