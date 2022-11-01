import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams,  Link } from "react-router-dom";
import { getDetail } from "../../redux/actions";
import './breedDetail.css'

export default function BreedDetail() {
  const dispatch = useDispatch()
  const { id } = useParams()
 
  useEffect(() => {
    dispatch(getDetail(id))
  }, [dispatch])
  
  const breedDetail = useSelector(state => state.detail)

  return (
    <>
      {breedDetail.length > 0 ? 
        <div className="detail-container">
          <div className="detail">
            {/* <div className="box-title">
              <h4 id="breed-title">{breedDetail[0].raza} </h4>
            </div> */}

            <div className="sides-box">
              <div className="left-side">
                <img id="breed-image" src={breedDetail[0].imagen} width="450" height="450" alt="" />
              </div>

              <div className="rigth-side">
              <div className="details-box">
                <h4 id="breed-title">{breedDetail[0].raza} </h4>
              </div>
                {/* <div className="details-box">
                  <h4 id="details">DETALLE</h4>
                </div> */}
                <div className="subtitulos-box">
                  <h4 className="subtitulos">Altura:</h4>
                  <p> {breedDetail[0].altura} cm </p> 
                </div>

                <div className="subtitulos-box">
                  <h4 className="subtitulos">Peso:</h4>
                  <p>{breedDetail[0].peso} kg </p>
                </div>

                <div className="subtitulos-box">
                  <h4 className="subtitulos">Años de vida:</h4>
                  <p>{breedDetail[0].añosDeVida} old</p>
                </div>

                <div className="subtitulos-temperamentos">
                  <h4 className="subtitulos">Temperamentos:</h4>
                  <p id="parraf-tempers">
                    { breedDetail[0].hasOwnProperty("temperamento") ? breedDetail[0].temperamento 
                      : breedDetail[0].temperamentos.map(t => `${t.name}, `) } 
                  </p>
                </div>
              </div>
            </div>
            <div className="volver-box">
              <Link  to="/home">
                <button id="volver-btn">Volver</button>
              </Link>
            </div>
          </div>
        </div>
      : <h4>Loading</h4>}
    </>
  )
};