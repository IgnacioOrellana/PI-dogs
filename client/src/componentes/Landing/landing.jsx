import { Link } from 'react-router-dom'
import './landing.css'
import logo from '../../Imagens/dogDrawing.png'
import linkedInIcon from '../../Imagens/LinkedIn-icon.png'
import gitHubIcon from '../../Imagens/GitHub-icon.png'

export default function Landing() {
  return (
    <div className="landing">
      <div className="left-color" />
      <div className="rigth-color" />
      <div className="main-content">
        <div className="main-left-box">
          <div className='main-info'>
            <h3 className='landing-title'>¡Bienvenido a Henry Dogs App!</h3>
            <p className='landing-subtitle'>Una App donde encontraras la informacion necesaria acerca de tus razas de perros favoritos. Podras realizar busquedas por razas, temperamentos y tambien podras crear tu propia raza.</p>
            <p className="parrafo2">¡Que te diviertas!</p>
            <div className="button-box">
              <Link to="/home">
                <button className="btn">Ingresar</button>
              </Link>
            </div>
            <div className="contact-icons">
              <a href="https://www.linkedin.com/in/ignacioorellanadev" target="_blank" rel="noreferrer"> 
                <img id="linkedInLogo" src={linkedInIcon} alt="linkedIn-logo" />
              </a>
              <a href="https://github.com/IgnacioOrellana" target="_blank" rel="noreferrer">
                <img id="gitHubLogo" src={gitHubIcon} alt="gitHub-logo" />
              </a>
            </div>
          </div>
        </div>
        <div className="main-rigth-box">
          <div className='landing-image'>
            <img id="landing-logo" src={logo} alt="dog drawing logo" />
          </div>
        </div>
      </div>
    </div>
  )
};
