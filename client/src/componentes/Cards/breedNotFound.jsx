import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { resetBreed } from '../../redux/actions'
import './breedNotFound.css'

export default function BreedNotFound() {
  const dispatch = useDispatch()

  return (
    <div className='main-box1'>
      <div className='secondary-box1'>
        <div className='text-box1'>
          <h1 className="error404 && secondary-text">404</h1>
          <h2 className="error404-sub && secondary-text">Pagina no encontrada</h2>
          <h3 className="create-new-breed && secondary-text">La informacion solicitada no ha podido ser localizada.
          <br /> Cree una nueva raza o intente buscar otra. </h3>
          <div className="error404-buttons && secondary-text">
            <button className="inicio-button" onClick={() => dispatch(resetBreed("reset"))}>Inicio</button>
            <Link to="/create">
              <button className="breed-create-button">Crear nueva raza</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
};
