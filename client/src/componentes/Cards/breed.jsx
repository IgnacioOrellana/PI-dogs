import React from 'react'
import { Link } from 'react-router-dom'
import './breed.css'

export default function Breed({ name, image, weight, temperament, id, origen }) {
  return (
    <div className="breedCard">
      <div className='card-box'>
        <Link to={`/home/${id}`}>
          <h3 id='breed-name'>{name}</h3>
        </Link>

        <div className='card-image'>
          <Link to={`/home/${id}`}>
            <img id='breed-imagen' src={image} width="135" height="90" alt="" />
          </Link>
        </div>

        <div className='card-peso'>
          <h4 id="breed-peso">Peso:</h4>
          <p id="breed-peso-info"> {weight} kg</p>
        </div>
        
        <div className='breed-temperamentos'>
          <h4 id='breed-temperamentos'>Temperamentos</h4>
          <p id='breed-temperamentos-info'>{temperament} </p>
        </div>
      </div>  
    </div>

    //este estaba antes
    // <div className="breedCard">
    //   <div className='left'>
    //     <Link to={`/home/${id}`}>
    //       <h3>{name}</h3>
    //       <img src={image} width="100" height="100" alt="" />
    //     </Link>
    //     <div>
    //       <p>Peso:{weight} kg</p>
    //     </div>
    //   </div>  
        
    //   <div className="rigth">
    //     <div className='breed-temperamentos'>
    //       <h4 id='temperamento'>Temperamentos</h4>
    //       <p>{temperament} </p>
    //     </div>
    //   </div>

    //   {/* <div>
    //     <h4>Origen: {origen}</h4>
    //   </div> */}
    // </div>
  )
};
