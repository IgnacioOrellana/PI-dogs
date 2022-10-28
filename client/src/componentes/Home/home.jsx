import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getBreeds } from "../../redux/actions.js";
import Loader from "../Loader/loader";
import Paginado from "../Pagination/pagination.jsx";
import Breed from "../Cards/breed.jsx";
import '../Cards/breed.css'
import Navbar from '../Navbar/navbar.jsx'

export default function Home() {
  const breeds = useSelector((state) => state.breed) 
  const dispatch = useDispatch()
  const [currentPage, setCurrentPage] = useState(1)
  const cardsPerPage = 8
  const lastBreed = currentPage * cardsPerPage
  const firstBreed = lastBreed - cardsPerPage
  const amountOfBreeds = breeds.length > 0 ? breeds.slice(firstBreed, lastBreed) : null
  
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  };

  useEffect(() => {
    dispatch(getBreeds())
  }, [dispatch])
  
  return (
    <div className="box-home">
      <Navbar paginate={paginate}/>
      <div className="paginate">
        <Paginado
          cardsPerPage={cardsPerPage}
          breeds={breeds.length}
          paginate={paginate}
        />
      </div>

      <div className="container">
        {amountOfBreeds ? (amountOfBreeds.map((dog) => {
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
        })) : <Loader />} 
      </div>  
  </div>
  )
};
