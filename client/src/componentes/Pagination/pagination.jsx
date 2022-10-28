import React from "react";
import './pagination.css'

export default function Paginado({ cardsPerPage, breeds, paginate }) {
  const pageNumbers = []
  for(let i = 1; i <= Math.ceil(breeds/cardsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <div>
      <nav>
        <ul className="pagination-container">
          {pageNumbers?.map(number => (
            <li className="numbers" key={number}> 
              <a id="number" onClick={() => paginate(number)}> {number} </a>
            </li>
          ))} 
        </ul>
      </nav>
    </div>
  )
};
