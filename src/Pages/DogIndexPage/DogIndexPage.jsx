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


    return(
        <>
        <main>
        <h1>Dog Breeds</h1>
        <div className="myDogs">
        <DogsList dogs={dogs} />
        {/* <DogsList dogs={dogs} handleDelete={handleDelete}/> */}
        </div>
        </main>
        </>
    )
}