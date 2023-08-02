import { Link } from 'react-router-dom';



export default function DogsListItem({dog, handleDelete}){
    
    
    function deleteThisItem(){
        handleDelete(dog._id)
    }

    return(
        <>
        <div >
        <p>
            <Link to={`/dogs/${dog._id}`}>
                {dog.breed} 
            </Link><br />
            {/* <button className="delete-button" onClick={deleteThisItem}>X</button> */}
        </p>
        </div>

        </>
    )
}