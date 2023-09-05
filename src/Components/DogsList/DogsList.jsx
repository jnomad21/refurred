import React, { useState, useEffect } from 'react';
import DogsListItem from "./DogListItem/DogListItem"

export default function DogsList({ dogs, filteredBreed, handleFilterChange }) {
  const [selectedLetter, setSelectedLetter] = useState(null);

  const firstLetters = [...new Set(dogs.map(dog => dog.breed.charAt(0).toUpperCase()))];

  const filterDogsByLetter = (letter) => {
    setSelectedLetter(letter);
    handleFilterChange(null); // Reset the AutoComplete filter
  };

  const showAllDogs = () => {
    setSelectedLetter(null);
    handleFilterChange(null); // Reset the AutoComplete filter
  };

  const applyFilter = () => {
    if (filteredBreed) {
      return dogs.filter((dog) => dog.breed === filteredBreed);
    } else if (selectedLetter) {
      return dogs.filter((dog) => dog.breed.charAt(0).toUpperCase() === selectedLetter);
    } else {
      return dogs;
    }
  };

  useEffect(() => {
    setSelectedLetter(null); // Reset the letter filter whenever dogs prop changes
  }, [dogs]);

  return (
    <>
      <div className="letterButtons text-center">
        <button onClick={showAllDogs} className={`btn btn-primary m-1 ${selectedLetter === null ? "selected" : ""}`}>
          All Breeds
        </button>
        {firstLetters.map((letter, index) => (
          <button
            key={index}
            onClick={() => filterDogsByLetter(letter)}
            id={selectedLetter === letter ? "selected" : ""}
            className="btn btn-outline-primary m-1"
          >
            {letter}
          </button>
        ))}
      </div>

      <div className="row m-3">
        {applyFilter().map((dog) => (
          <DogsListItem key={dog._id} dog={dog} />
        ))}
      </div>
    </>
  );
}
