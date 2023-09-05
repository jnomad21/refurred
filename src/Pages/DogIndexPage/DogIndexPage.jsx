import { dogsIndexRequest } from '../../utilities/dogs-api';
import { useEffect, useState } from 'react';
import DogsList from '../../Components/DogsList/DogsList';
import DogAutoCompleteFilter from '../../Components/DogAutoCompleteFilter/DogAutoCompleteFilter';

export default function DogIndexPage() {
  const [dogs, setDogs] = useState([]);
  const [filteredBreed, setFilteredBreed] = useState(null);

  useEffect(() => {
    async function getDogs() {
      const dogs = await dogsIndexRequest();
      setDogs(dogs);
    }
    getDogs();
  }, []);

  const handleFilter = (breed) => {
    setFilteredBreed(breed); // Update the selected breed for filtering
  };

  const handleFilterChange = (breed) => {
    setFilteredBreed(breed); // Function to change the filtered breed
  };

  return (
    <>
      <main>
        <h1 className="display-4">Dog Breed Directory</h1>

        <DogAutoCompleteFilter dogs={dogs} handleFilter={handleFilter} />

        <div className="myDogs">
          <DogsList dogs={dogs} filteredBreed={filteredBreed} handleFilterChange={handleFilterChange} />
        </div>
      </main>
    </>
  );
}
