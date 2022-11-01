import { Link } from 'react-router-dom'
import './landing.css'

export default function Landing() {
  return (
    <div className="landing">

      <div className="left-box">
        {/* a */}
      </div>
      <div className="rigth-box">
        {/* a */}
      </div>
        <Link to="/home">
          <button className="btn">Ingresar</button>
        </Link>
    </div>
  )
};
