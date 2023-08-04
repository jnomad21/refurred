import { dogsIndexRequest, deleteDogRequest } from '../../utilities/dogs-api';
import { useEffect, useState } from 'react'
import DogsList from '../../Components/DogsList/DogsList';

export default function DogIndexPage(){
    const [dogs, setDogs] = useState([])
    useEffect(()=>{
        async function getDogs(){
            const dogs = await dogsIndexRequest();
            setDogs(dogs)
        }
        getDogs();
    }, [])

    // async function handleDelete(dogToDelete){
    //     await deleteDogRequest(dogToDelete);
    //     const updatedDogs = dogs.filter(dog => dog._id !== dogToDelete);
    //     setDogs(updatedDogs);
    // } 
  
        
    return(
        <>
        
      
        <h1>All Dogs</h1>
        <div className="myDogs">
        <DogsList dogs={dogs} />
        {/* <DogsList dogs={dogs} handleDelete={handleDelete}/> */}
        </div>
        
        </>
    )
}