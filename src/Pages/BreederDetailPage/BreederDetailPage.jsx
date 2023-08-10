import { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { getBreederRequest, } from "../../utilities/dogs-api";
import BreederDetail from "../../Components/BreederDetail/BreederDetail"

export default function BreederDetailPage(){
    let { breederId } = useParams();
    const [breeder, setBreeder] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    useEffect(()=>{
        async function getBreeder(){
            const breeder = await getBreederRequest(breederId);
            if(breeder){
                setBreeder(breeder)
                setTimeout(()=>{
                    setLoading(false)
                }, 100)
            }else{
                setError('No breeder Found')
                setLoading(false)
            }
        }
        getBreeder()
    }, [])
    return(
        <>
          <main>
    { loading ? <p>Loading....</p>
    :
    error ? <p>{error}</p>
    :
    <BreederDetail breeder={breeder}  setBreeder={setBreeder}></BreederDetail>
    }
    </main>
        </>
    )
}