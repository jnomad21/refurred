import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getDogRequest, deleteDogRequest } from "../../utilities/dogs-api";
import DogDetail from "../../Components/DogDetail/DogDetail";

export default function DogDetailPage(){
    let { dogId } = useParams();
    const [dog, setDog] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    useEffect(()=>{
        async function getDog(){
            const dog = await getDogRequest(dogId);
            if(dog){
                setDog(dog)
                setTimeout(()=>{
                    setLoading(false)
                }, 100)
            }else{
                setError('No dog Found')
                setLoading(false)
            }
        }
        getDog()
    }, [])


async function handleDelete(e){
    const deleteResponse = await deleteDogRequest(dog._id);
    if(deleteResponse.data === 'success'){
        navigate('/dogs')
    }
}
return (
    <>
    <main>
    <h1>Is this your new best friend??</h1>
    { loading ? <p>Loading....</p>
    :
    error ? <p>{error}</p>
    :
    <DogDetail dog={dog} handleDelete={handleDelete} setDog={setDog}></DogDetail>
    }
    </main>
    </>

)
}
