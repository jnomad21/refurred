import { dogsIndexRequest, deleteDogRequest } from '../../utilities/dogs-api';
import { useEffect, useState } from 'react'
import DogsList from '../../Components/DogsList/DogsList';
import DogAutoCompleteFilter from '../../Components/DogAutoCompleteFilter/DogAutoCompleteFilter';


export default function DogIndexPage(){
    const [dogs, setDogs] = useState([])
    const [filteredBreed, setFilteredBreed] = useState(null);    
    
    useEffect(()=>{
        async function getDogs(){
            const dogs = await dogsIndexRequest();
            setDogs(dogs)
        }
        getDogs();

    }, [])

    const handleFilter = (breed) => {
        setFilteredBreed(breed || null); // Update the selected breed for filtering
      };

      const filteredDogs = filteredBreed
    ? dogs.filter((dog) => dog.breed === filteredBreed)
    : dogs;

    return(
        <>
        <main>
        <h1>Dog Breeds</h1>
        <div className="myDogs">
        <DogAutoCompleteFilter dogs={dogs} handleFilter={handleFilter} />
          <DogsList dogs={filteredDogs} />
        {/* <DogsList dogs={dogs} handleDelete={handleDelete}/> */}
        </div>
        </main>
        </>
    )
}