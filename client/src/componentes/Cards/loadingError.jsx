import linkedInIcon from '../../Imagens/LinkedIn-icon.png'
import './breedNotFound.css'
import './loadingError.css'

export default function LoadingError() {
  return (
    <div className='main-box1'>
      <div className='secondary-box1'>
        <div className='text-box1'>
          <h1 className="error404 && secondary-text">404</h1>
          <h2 className="error404-sub && secondary-text">Pagina no encontrada</h2>
          <h3 className="create-new-breed && secondary-text">Ha ocurrido un error inesperado al intentar cargar la informacion.
          <br /> Por favor, contactar al desarrollador. </h3>
          <div className="error404-buttons && secondary-text">
            <a href="https://www.linkedin.com/in/ignacioorellanadev" target="_blank" rel="noreferrer"> 
              <img id="linkedInLogoLoadingError" src={linkedInIcon} alt="linkedIn-logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
};
