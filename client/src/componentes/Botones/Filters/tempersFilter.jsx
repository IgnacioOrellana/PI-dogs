import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByTempers, getTemperaments } from "../../../redux/actions";
import './tempersFilter.css'

export default function Temperaments({paginate}) {
  const breeds = useSelector(state => state.temperaments)
  const [temperClick, setTemperClick] = useState("")
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTemperaments())
  }, [dispatch])

  useEffect(() => {
    dispatch(filterByTempers(temperClick))
  }, [temperClick])
  
  const handleOnClick = (e) => {
    e.preventDefault();
    if(e.target.value !== "Temperamentos") {
      paginate(1)
      setTemperClick(e.target.value)
    }
  };

  return (
    <select className="temper-filter" title="tempers" onClick={handleOnClick}>
      <option disabled selected>Temperamentos</option>
      {breeds?.map(temper => (
        <option key={temper.id} value={temper.name}> {temper.name} </option>
      ))}
    </select>
  )
};
