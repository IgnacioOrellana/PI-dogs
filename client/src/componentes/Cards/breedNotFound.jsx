import './breedNotFound.css'
import breedNotFoundLogo from '../../Imagens/breedNotFound.png'

export default function BreedNotFound() {
  return (
    <div className="breedNotFound-box">
      <div className="searchOrCreate">
        <h1 id="error404">404</h1>
        <h2>Pagina no encontrada</h2>
        <h3>Cree una nueva raza o intente buscar otra</h3>
        <div>
          <button>Inicio</button>
          <button>Crear nueva raza</button>
        </div>
      </div>
      <div className="breedNotFound-img">
        <img src={breedNotFoundLogo} alt="breed-logo" />
      </div>
    </div>
  )
};
