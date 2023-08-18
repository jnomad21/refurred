import { Link } from 'react-router-dom';
import "./DogListItem.css"



export default function DogsListItem({ dog, handleDelete }) {


    function deleteThisItem() {
        handleDelete(dog._id)
    }

    return (
        <>
            <div className="col-md-4 mb-4">
                <div className="card card-fluid index-card">
                    <div className="card-body">
                        <h3 className="dog-card-title">{dog.breed}</h3>
                        <p className="dog-about">{dog.about.length > 150 ? dog.about.slice(0, 150) + '...' : dog.about}</p>

                        <Link to={`/dogs/${dog._id}`}
                            className="btn btn-success details">Details</Link>
                        {/* <button className="delete-button" onClick={deleteThisItem}>X</button> */}
                    </div>
                </div>
            </div>

        </>
    )
}