import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { sortByWeight } from "../../../redux/actions";
import './weightSort.css' 

export default function Weight({paginate}) {
  const [weight, setWeigth] = useState("")
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(sortByWeight(weight))
  },[weight])

  const handleOnClick = (e) => {
    e.preventDefault();
    if(e.target.value !== "Peso") {
      paginate(1)
      setWeigth(e.target.value)
    }
  }

  return (
    <select className="weigth-sort" title="weight" onClick={handleOnClick}>
      <option disabled selected>Peso</option>
      <option>Menor peso</option>
      <option>Mayor peso</option>
    </select>
  )
};
