// import { useNavigate, useParams } from "react-router-dom";
// import { useEffect, useState } from 'react';
// import { getDogRequest} from "../../utilities/dogs-api";
// import EditDogForm from '../../Components/DogDetail/EditDogForm/EditDogForm'

// export default function EditDogPage(){
//     let { dogId } = useParams();
//     const [dog, setDog] = useState({})
//     const [loading, setLoading] = useState(true)
//     const [error, setError] = useState('')
//     const navigate = useNavigate()
//     useEffect(()=>{
//         async function getDog(){
//             const dog = await getDogRequest(dogId);
//             if(dog){
//                 setDog(dog)
//                 setTimeout(()=>{
//                     setLoading(false)
//                 }, 100)
//             }else{
//                 setError('No dog Found')
//                 setLoading(false)
//             }
//         }
//         getDog()
//     }, [])


//     return(
//         <main>
//         <EditDogForm dog={dog}/>
//         </main>

//     )
// }