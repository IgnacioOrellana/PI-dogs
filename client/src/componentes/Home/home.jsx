import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getBreeds, setNumberPage } from "../../redux/actions.js";
import Loader from "../Loader/loader";
import Paginado from "../Pagination/pagination.jsx";
import Breed from "../Cards/breed.jsx";
import '../Cards/breed.css'
import Navbar from '../Navbar/navbar.jsx'

export default function Home() {
  const breeds = useSelector((state) => state.breed) 
  const [currentPage, setCurrentPage] = useState(1)
  const dispatch = useDispatch()
  const cardsPerPage = 8
  const lastBreed = currentPage * cardsPerPage
  const firstBreed = lastBreed - cardsPerPage
  const amountOfBreeds = breeds.length > 0 ? breeds.slice(firstBreed, lastBreed) : []
  const [loading, setLoading] = useState(true)

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
    if(amountOfBreeds.length > 0) {
      console.log("setLoading a false")
      setLoading(false)
    }
  };
  
  useEffect(() => {
    dispatch(getBreeds())
  }, [dispatch])
  
  return (
    <div className="box-home">
      <Navbar paginate={paginate} />
      <div className="paginate">
        <Paginado
          cardsPerPage={cardsPerPage}
          breeds={breeds.length}
          paginate={paginate}
        />
      </div>

      <div className="container">
        { amountOfBreeds.length > 0 ? (
            amountOfBreeds.map((dog) => {
              return (
                <div key={dog.id} >
                  <Breed 
                    id={dog.id}
                    name={dog.raza}
                    image={dog.imagen}
                    weight={dog.peso}
                    temperament={ 
                      dog.hasOwnProperty("temperamento") ? dog.temperamento 
                      : dog.hasOwnProperty("temperamentos") ? dog.temperamentos.map(t => `${t.name}, `)
                      : "Desconocido"
                    }
                    origen={dog.origen}
                  />
                </div>
              )
            })
          ) : loading ? <Loader /> : <h3>No se encontro la raza buscada, cree una nueva o intente buscar otra</h3>
        }
      </div>  
  </div>
  )
};
