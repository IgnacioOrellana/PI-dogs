import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { searchBreed } from "../../../redux/actions.js";
import './breedFilter.css'

export default function Breeds({paginate}) {
  const [breedClick, setBreedClick] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchBreed(breedClick))
  },[breedClick])
  
  const handleOnClick = (e) => {
    e.preventDefault();
    if(e.target.value === "Creadas") {
      setBreedClick(e.target.value)
      paginate(1)
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
    <select className="breed-filter" title="breeds" onClick={handleOnClick}>
      <option disabled selected>Razas</option>
      <option>Creadas</option>
      <option>Existentes</option>
      <option>Todas</option>
    </select>
  )
};
