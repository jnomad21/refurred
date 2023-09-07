import React from 'react';
import './Pagination.css'

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}) {
  const handlePageChange = (page) => {
    onPageChange(page);
  };

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <nav className='pag-nav '>
      <ul className='pagination '>
        <li >
          <button
            className="page-link"
            onClick={() => handlePageChange(1)}
            disabled={isFirstPage}
          >
            First
          </button>
        </li>
        <li >
          <button
            className="page-link"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={isFirstPage}
          >
            Previous
          </button>
        </li>
        <li>
          <button className="page-link" disabled>
            {currentPage} of {totalPages}
          </button>
        </li>
        <li >
          <button
            className="page-link"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={isLastPage}
          >
            Next
          </button>
        </li>
        <li >
          <button
            className="page-link"
            onClick={() => handlePageChange(totalPages)}
            disabled={isLastPage}
          >
            Last
          </button>
        </li>
      </ul>
    </nav>
  );
}
