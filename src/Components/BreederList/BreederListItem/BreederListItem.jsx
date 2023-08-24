import { Link } from 'react-router-dom';
import './BreederListItem.css'

export default function BreederListItem({breeder}){
    return(
        <>
        <div className="col-md-4 mb-4">
            <div className="card card-fluid index-card">
                <div className="card-body">
                <h5 className="card-title">
                    <span>
                        <Link className="breeder-links"to={`/dogs/breeders/${breeder._id}`}>
                        {breeder.orgName} 
                        </Link>
                    </span>
                </h5>
                <h5>Type: {breeder.breed}</h5>
                <h5>Location: {breeder.state}</h5>
                <h5><a href={`${breeder.website}`} rel="noreferrer" target="_blank"> Website</a>
                </h5>
                </div>
            </div>
        </div>   
        </>
    )
}