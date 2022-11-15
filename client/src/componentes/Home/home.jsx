import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getBreeds } from "../../redux/actions.js";
import Loader from "../Loader/loader";
import Paginado from "../Pagination/pagination.jsx";
import Breed from "../Cards/breed.jsx";
import '../Cards/breed.css'
import Navbar from '../Navbar/navbar.jsx'
import BreedNotFound from "../Cards/breedNotFound.jsx";
import LoadingError from "../Cards/loadingError.jsx";

let firstGetData = true
export default function Home() {
  const breeds = useSelector((state) => state.breed) 
  const [currentPage, setCurrentPage] = useState(1)
  const dispatch = useDispatch()
  const cardsPerPage = 8
  const lastBreed = currentPage * cardsPerPage
  const firstBreed = lastBreed - cardsPerPage
  const amountOfBreeds = breeds.length > 0 ? breeds.slice(firstBreed, lastBreed) : []
  const [loading, setLoading] = useState(true)
  const [loadingError, setLoadingError] = useState(false)

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
    if(amountOfBreeds.length > 0) {
      setLoading(false)
      setLoadingError(false)
    }
  };
  
  useEffect(() => {
    dispatch(getBreeds())
  }, [dispatch])

  setTimeout(() => {
    setLoading(false)
    if(firstGetData) {
      firstGetData = false
      setLoadingError(true)
    }
  }, 5000)
  
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
                <div key={dog.id} className="single-card-box" >
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
          ) : loading ? <Loader /> : loadingError ? <LoadingError /> : <BreedNotFound />
        }
      </div>  
  </div>
  )
};
