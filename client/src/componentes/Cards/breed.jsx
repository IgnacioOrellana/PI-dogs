import React from 'react'
import { Link } from 'react-router-dom'
import './breed.css'

export default function Breed({ name, image, weight, temperament, id, origen }) {
  return (
    <div className="breedCard">
      <div className='card-box'>
        <Link to={`/home/${id}`}>
          <h3 id='breed-name'>{name}</h3>

        <div className='card-image'>
            <img id='breed-imagen' src={image} width="135" height="90" alt="" />
        </div>
        </Link>

        <div className='card-peso'>
          <h4 id="breed-peso">Peso:</h4>
          <p id="breed-peso-info">{weight} kg</p>
        </div>
        
        <div className='breed-temperamentos'>
          <h4 id='breed-temperamentos'>Temperamentos</h4>
          <p id='breed-temperamentos-info'>{temperament}</p>
        </div>
      </div>  
    </div>
  )
};
