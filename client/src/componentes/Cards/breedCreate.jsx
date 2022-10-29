import React, { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getBreedByName, getBreeds, getTemperaments, postBreed } from "../../redux/actions";
import validateForm from "./validateForm";
import showTempersName from '../Cards/showTempersName.js'
import './breedCreate.css';

export default function BreedCreate() {
  const tempers = useSelector(state => state.temperaments)
  const breed = useSelector(state => state.breed)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBreeds())
    dispatch(getTemperaments())
  },[dispatch])

  const [input, setInput] = useState({
    raza: "",
    alturaMinima: "",
    alturaMaxima: "",
    pesoMinimo: "",
    pesoMaximo: "",
    añosDeVida: "",
    imagen: "",
    temperamentos: []
  });
  
  const [erros, setErros] = useState({})

  const handleInputChange = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
    setErros(validateForm({
      ...input,
      [e.target.name]: e.target.value
    }))
  }
 
  const handleOnTempers = (e) => {
    e.preventDefault();
    if(e.target.value !== "Choose temperaments") {
      setInput({
        ...input,
        temperamentos: [...new Set(input.temperamentos.concat(e.target.value))]
      })
      setErros(validateForm({
        ...input,
        temperamentos: [...new Set(input.temperamentos.concat(e.target.value))]
      }))
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if(!erros.breed && !erros.altMin && !erros.altMax && !erros.pesoMin && 
      !erros.pesoMax && !erros.años && !erros.imagen && !erros.temperamentos) {

      const foundBreed = breed.filter(b => b.raza === input.raza)
      if(foundBreed.length === 0) {
        dispatch(postBreed(input))
        alert("Nueva raza creada correctamente");
      } else {
        alert("La nueva raza que esta intentando crear ya se encuentra creada")
      }

      setInput({
        raza: "",
        alturaMinima: "",
        alturaMaxima: "",
        pesoMinimo: "",
        pesoMaximo: "",
        añosDeVida: "",
        imagen: "",
        temperamentos: []
      })
    } else {
      alert("Error al intentar crear una nueva raza. Revise que todos los campos esten correctamente llenos")
    }
  };

  const tempersName = showTempersName(tempers, input.temperamentos)

  return (
    <div className="container-box">
      <form className="form-container" onSubmit={handleOnSubmit}>
        <h3 id="create-breed">Crear una nueva raza</h3>
        <div className="boxes">
          <label>Raza</label>
          <div>
            <input 
              className="raza"
              name="raza"
              value={input.raza}
              type="text"
              onChange={handleInputChange}
              placeholder="Nombre de la raza"
            />
            {erros.breed ? (<p className="errores">{erros.breed}</p>) : ""}
          </div>
        </div>
        <div className="boxes">
          <label id="label-altura">Altura</label>
          <div>
            <input
              id="min-altura"
              className="altura"
              name="alturaMinima"
              value={input.alturaMinima}
              type="number"
              placeholder="Min"
              onChange={handleInputChange}
            />
            {erros.altMin ? (<p className="errores">{erros.altMin}</p>) : ""}

            <input 
              id="max-altura"
              className="altura"
              name="alturaMaxima"
              value={input.alturaMaxima}
              onChange={handleInputChange}
              placeholder="Max"
              />
            {erros.altMax ? (<p className="errores">{erros.altMax}</p>) : ""}
        </div>   
        </div>
        <div className="boxes">
          <label id="label-peso">Peso</label>
          <div className="box-weigth">
            <input 
              id="min-peso"
              className="weigth"
              name="pesoMinimo"
              value={input.pesoMinimo}
              placeholder="Min"
              onChange={handleInputChange}
              />
            {erros.pesoMin ? (<p className="errores">{erros.pesoMin}</p>) : ""}
      
            <input 
              id="max-peso"
              className="weigth"
              name="pesoMaximo"
              value={input.pesoMaximo}
              placeholder="Max"
              onChange={handleInputChange}
            />
            {erros.pesoMax ? (<p className="errores">{erros.pesoMax}</p>) : ""}
          </div>
        </div>
        <div className="box-age">
          <label>Años</label>
          <input 
            className="age"
            name="añosDeVida"
            value={input.añosDeVida}
            placeholder="Años"
            onChange={handleInputChange}
          />
          {erros.años ? (<p className="errores">{erros.años}</p>) : ""}
        </div>
        <div className="box-image">
          <label>Imagen</label>
            <input 
              className="image"
              name="imagen"
              value={input.imagen}
              onChange={handleInputChange}
              placeholder="url de la imagen"
            />
            {erros.imagen ? (<p className="errores">{erros.imagen}</p>) : ""}
        </div>
        <div className="box-temperamentos">
          <label>Temperamentos</label>
            <select title="tempers" onClick={handleOnTempers}>
              <option>Choose temperaments</option>
              {tempers?.map(temper => (
                <option key={temper.id} value={temper.id}> {temper.name} </option>
              ))}
            </select>
            {erros.temperamentos ? (<p>{erros.temperamentos}</p>) : ""}

            <div className="temperamentos">
              {tempersName.length > 0 ? tempersName.map(t => (
                <p id="tempers" key={t.name}> {t.name} </p>
              )) : null}
            </div>
        </div>
        <div className="boxes-inputs">
          <button type="submit" disabled={!input.raza ? true : false }>Crear</button>
          <Link to="/home"><button>Atras</button></Link>
        </div>
      </form>
    </div>
  )
};
