import { Link } from 'react-router-dom';
import "./DogListItem.css"



export default function DogsListItem({ dog }) {


    return (
        <>
            <div className="col-md-4 mb-4">
                <div className="card card-fluid index-card">
                    <div className="card-background" style={{ backgroundImage: `url(https://pet-app.s3.us-west-1.amazonaws.com/${encodeURIComponent(dog.breed)}.jpg)` }}>
                        <div className="card-body">
                            <h3 className="dog-card-title">{dog.breed}</h3>
                            <div className="details-button">
                                <Link to={`/dogs/${dog._id}`} className="btn btn-outline-light details-button">Details</Link>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}