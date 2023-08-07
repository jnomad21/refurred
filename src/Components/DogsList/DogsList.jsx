import DogsListItem from "./DogListItem/DogListItem"
import React, { useState } from 'react';

export default function DogsList({dogs, handleDelete}){
    const [selectedLetter, setSelectedLetter] = useState(null);

    const firstLetters = [...new Set(dogs.map(dog => dog.breed.charAt(0).toUpperCase()))];

    const filterDogsByLetter = (letter) => {
        setSelectedLetter(letter);
      };

    const filteredDogs = selectedLetter
    ? dogs.filter((dog) => dog.breed.charAt(0).toUpperCase() === selectedLetter)
    : dogs;
    return (
        <>
            {/* Step 2: Create buttons for each unique letter */}
            <div className="letterButtons">
                {firstLetters.map((letter, index) => (
                    <button
                        key={index}
                        onClick={() => filterDogsByLetter(letter)}
                        id={selectedLetter === letter ? "selected" : ""}
                        className="btn btn-dark m-1"
                    >
                        {letter}
                    </button>
                ))}
            </div>

            <div className="row m-3">
                {filteredDogs.map((dog) => (
                    <DogsListItem key={dog._id} dog={dog} handleDelete={handleDelete} />
                ))}
            </div>
        </>
    )
}