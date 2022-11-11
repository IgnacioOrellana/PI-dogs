import React, { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getBreedByName, getBreeds, getTemperaments, postBreed } from "../../redux/actions";
import validateForm from "./validateForm";
import showTempersName from '../Cards/showTempersName.js'
import './breedCreate.css';
import '../../componentes/Navbar/navbar.css'

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
    if(e.target.value !== "Temperamentos") {
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

      let textTransform =  input.raza.split(" ")
      let newInputRaza = ""
      for(let i = 0; i < textTransform.length; i++) {
          const capitalize = textTransform[i].charAt(0).toUpperCase() + textTransform[i].slice(1)
          newInputRaza += `${capitalize} `
          input.raza = newInputRaza
      }

      const foundBreed = breed.filter(b => b.raza.toLowerCase() === input.raza.toLowerCase())
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
  
  const handleDeleteTemper = (e) => {
    e.preventDefault()
    setInput({
      ...input,
      temperamentos: input.temperamentos.filter(temper => temper !== e.target.value)
    })
    setErros(validateForm({
      ...input,
      temperamentos: [...new Set(input.temperamentos.filter(temper => temper !== e.target.value))]
    }))
  }
  console.log(input.raza)
  const tempersName = showTempersName(tempers, input.temperamentos)

  return (
    <div className="container-form-box">
      <div className="form-container">
        <h3 id="title-create">Crear una nueva raza</h3>
        <div className="form-inputs">
          <form onSubmit={handleOnSubmit}>
            <div className="breed-name-box">
              <div className="labels">
                <label id="label-name">Nombre</label>
              </div>
              <div className="breed-name-input">
                <input 
                  id="raza"
                  className="raza && raza-input"
                  name="raza"
                  value={input.raza}
                  type="text"
                  onChange={handleInputChange}
                  placeholder="Nombre de la raza"
                />
                {erros.breed ? (<p className="errores">{erros.breed}</p>) : (<p className="sin-errores">Sin errores</p>)}
              </div>
            </div>

            <div className="breed-name-box">
              <div className="labels">
                <label id="label-name">Altura</label>
              </div>
              <div className="values">
                <div className="breed-name-input">
                  <input
                    id="min-altura"
                    className="altura"
                    name="alturaMinima"
                    value={input.alturaMinima}
                    placeholder="Min"
                    onChange={handleInputChange}
                  />
                  {erros.altMin ? (<p className="errores">{erros.altMin}</p>) : (<p className="sin-errores">Sin errores</p>)}
                </div> 

                <div className="breed-name-input">
                  <input 
                    id="max-altura"
                    className="altura"
                    name="alturaMaxima"
                    value={input.alturaMaxima}
                    onChange={handleInputChange}
                    placeholder="Max"
                    />
                  {erros.altMax ? (<p className="errores">{erros.altMax}</p>) : (<p className="sin-errores">Sin errores</p>)}
                </div> 
              </div>
            </div>

            <div className="breed-name-box">
              <div className="labels">
                <label id="label-name">Peso</label>
              </div>
              <div className="values">
                <div className="breed-name-input">
                  <input 
                    id="min-peso"
                    className="peso"
                    name="pesoMinimo"
                    value={input.pesoMinimo}
                    placeholder="Min"
                    onChange={handleInputChange}
                  />
                  {erros.pesoMin ? (<p className="errores">{erros.pesoMin}</p>) : ""}
                </div>

                <div className="breed-name-input">
                  <input 
                    id="max-peso"
                    className="peso"
                    name="pesoMaximo"
                    value={input.pesoMaximo}
                    placeholder="Max"
                    onChange={handleInputChange}
                  />
                  {erros.pesoMax ? (<p className="errores">{erros.pesoMax}</p>) : (<p className="sin-errores">Sin errores</p>)}
                </div>
              </div>
            </div>

            <div className="breed-name-box">
              <div className="labels">
                <label id="label-name">Años</label>
              </div>
              <div className="breed-name-input">
                <input 
                  className="años"
                  name="añosDeVida"
                  value={input.añosDeVida}
                  placeholder="Años"
                  onChange={handleInputChange}
                />
                {erros.años ? (<p className="errores">{erros.años}</p>) : (<p className="sin-errores">Sin errores</p>)}
              </div>
            </div>

            <div className="breed-name-box">
              <div className="labels">
                <label id="label-name">Imagen</label>
              </div>
              <div className="breed-name-input">
                <input 
                  className="imagen"
                  name="imagen"
                  value={input.imagen}
                  onChange={handleInputChange}
                  placeholder="URL de la imagen"
                />
                {erros.imagen ? (<p className="errores">{erros.imagen}</p>) : (<p className="sin-errores">Sin errores</p>)}
              </div>
            </div>

            <div className="breed-name-box">
              <div className="labels">
                <label id="label-name">Temperamentos</label>
              </div>
              <div className="main-tempers">
                <select className="temperamentos-options" title="tempers" onClick={handleOnTempers}>
                  <option>Temperamentos</option>
                  {tempers?.map(temper => (
                    <option key={temper.id} value={temper.id}> {temper.name} </option>
                  ))}
                </select>
                {erros.temperamentos ? (<p className="errores">{erros.temperamentos}</p>) : (<p className="sin-errores">Sin errores</p>)}

                <div className="temperamentos-box">
                  {tempersName.length > 0 ? tempersName.map(t => (
                    <div className="tempers-box" key={t.name}> 
                      <span id="temper-name">{t.name}</span>
                      <button id="delete" value={t.id} onClick={handleDeleteTemper}>X</button> 
                    </div>
                  )) : null}
                </div>
              </div>
            </div>

            <div className="breed-buttons-box">
              <button className="create-button" type="submit" disabled={!input.raza ? true : false }> Crear </button>
              <Link to="/home">
                <button className="atras-button"> Inicio </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
};
