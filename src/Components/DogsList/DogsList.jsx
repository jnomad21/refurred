import React, { useState, useEffect } from 'react';
import DogsListItem from './DogListItem/DogListItem';
import Pagination from '../Pagination/Pagination';

export default function DogsList({ dogs, filteredBreed, handleFilterChange }) {
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Number of items to display per page

  const firstLetters = [...new Set(dogs.map((dog) => dog.breed.charAt(0).toUpperCase()))];

  const filterDogsByLetter = (letter) => {
    setSelectedLetter(letter);
    setCurrentPage(1); // Reset the current page when filtering
  };

  const showAllDogs = () => {
    setSelectedLetter(null);
    handleFilterChange(null); // Reset the AutoComplete filter
    setCurrentPage(1); // Reset the current page when clearing filters
  };

  const applyFilter = () => {
    let filteredDogs = dogs;

    if (filteredBreed) {
      filteredDogs = filteredDogs.filter((dog) => dog.breed === filteredBreed);
    } else if (selectedLetter) {
      filteredDogs = filteredDogs.filter(
        (dog) => dog.breed.charAt(0).toUpperCase() === selectedLetter
      );
    }

    return filteredDogs;
  };

  useEffect(() => {
    setSelectedLetter(null); // Reset the letter filter whenever dogs prop changes
    setCurrentPage(1); // Reset the current page when filters change
  }, [dogs, filteredBreed]);

  const filteredDogs = applyFilter();
  const totalPages = Math.ceil(filteredDogs.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return (
    <>
      <div className="letterButtons text-center">
        <button
          onClick={showAllDogs}
          className={`btn btn-primary m-1 ${selectedLetter === null ? 'selected' : ''}`}
        >
          All Breeds
        </button>
        {firstLetters.map((letter, index) => (
          <button
            key={index}
            onClick={() => filterDogsByLetter(letter)}
            id={selectedLetter === letter ? 'selected' : ''}
            className="btn btn-outline-primary m-1"
          >
            {letter}
          </button>
        ))}
      </div>

      <div className="row m-3">
        {filteredDogs.slice(startIndex, endIndex).map((dog) => (
          <DogsListItem key={dog._id} dog={dog} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
}
