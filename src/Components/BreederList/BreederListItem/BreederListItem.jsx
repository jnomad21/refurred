import { Link } from 'react-router-dom';

export default function BreederListItem({breeder}){
    return(
        <>
            <h5>Breeder: 
             <span><Link to={`/dogs/breeders/${breeder._id}`}>
                 {breeder.orgName} 
            </Link></span></h5>
            <h5>Type: {breeder.breed}</h5>
            <h5>State: {breeder.state}</h5>
            <br />
            <br />
        </>
    )
}