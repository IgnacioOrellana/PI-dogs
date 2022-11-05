import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { searchBreed } from "../../../redux/actions.js";
import '../../Navbar/navbar.css'

export default function Breeds({paginate}) {
  const [breedClick, setBreedClick] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchBreed(breedClick))
  },[breedClick])
  
  const handleOnClick = (e) => {
    e.preventDefault();
    if(e.target.value === "Creadas") {
      paginate(1)
      setBreedClick(e.target.value)
    }
    if(e.target.value === "Existentes") {
      paginate(1)
      setBreedClick(e.target.value)
    }
    if(e.target.value === "Todas") {
      paginate(1)
      setBreedClick(e.target.value)
    }
  }
  
  return (
    <select className="filters" title="breeds" onClick={handleOnClick}>
      <option disabled selected>Razas</option>
      <option>Creadas</option>
      <option>Existentes</option>
      <option>Todas</option>
    </select>
  )
};
