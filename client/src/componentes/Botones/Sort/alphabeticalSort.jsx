import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { sortByAlphabetical } from "../../../redux/actions.js";
import './alphabeticalSort.css'

export default function Alphabetical({paginate}) {
  const [order, setOrder] = useState("")
  const dispatch = useDispatch()

  useEffect(() =>{
    dispatch(sortByAlphabetical(order))
  },[order])

  const handleOnClick = (e) => {
    e.preventDefault();
    if(e.target.value !== "Alfabeticamente") {
      paginate(1)
      setOrder(e.target.value)
    }
  }

  return (
    <select className="alphabetical-sort" title="alphabetical" onClick={handleOnClick}>
      <option disabled selected>Alfabeticamente</option>
      <option value="ASC">Ascendente</option>
      <option value="DESC">Descendente</option>
    </select>
  )
}


