import './pagination.css'

export default function Paginado({ cardsPerPage, breeds, paginate }) {
  const pageNumbers = []
  for(let i = 1; i <= Math.ceil(breeds/cardsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <div className='paginate'>
      <nav>
        <ul className="pagination-container">
          {pageNumbers?.map(number => (
            <button key={number} className="number" onClick={() => paginate(number)}> {number} </button>
          ))} 
        </ul>
      </nav>
    </div>
  )
};
