import { useState } from "react";
import { useDispatch } from "react-redux";
import { getBreedByName } from "../../redux/actions";
import '../../componentes/Navbar/navbar.css'

export default function SearchBar({paginate}) {
  const [breed, setBreed] = useState("")
  const dispatch = useDispatch()

  const handleOnChange = (e) => {
    e.preventDefault();
    setBreed(e.target.value)
  }
  
  const handleOnSubmit = (e) => {
    e.preventDefault();
    paginate(1)
    dispatch(getBreedByName(breed))
    setBreed("")
  };

  return (
    <form className="search-box" onSubmit={handleOnSubmit}>
      <input 
        type="text"
        placeholder="search breed"
        value={breed} 
        onChange={handleOnChange} 
        id="input"
      />
      <button type="submit" id="btn">Search</button> 
    </form>
  )
};
