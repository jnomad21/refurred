import { useState} from 'react'
import { Link } from 'react-router-dom'
import './DogDetail.css'


export default function DogDetail({dog, handleDelete, setDog}){
    const [editFormIsOpen, setEditFormIsOpen] = useState(false)

    const renderEmojisWithOpacity = (label, value) => {
        const maxScore = 5;
        const emojis = Array.from({ length: maxScore }, (_, index) => (
          <span
            key={index}
            style={{
              opacity: index < value ? 1 : 0.2, 
              marginRight: '5px', 
            }}
          >
            🐶
          </span>
        ));
    
        return (
          <div>
            <h4>{label}:</h4>
            <div>{emojis}</div>
          </div>
        );
      };
    
    
    
    return (
        <>
            <div>
                <h3>{dog.breed}</h3><br />
                <h4>Size: {dog.sizeActual}</h4>
                <h4>Coat Type: {dog.coatType}</h4>
                <h4>Coat Length: {dog.coatLength}</h4><br />
                <h4>{renderEmojisWithOpacity('Affection Level', dog.affection)}</h4>
                <h4>{renderEmojisWithOpacity('Good With Children', dog.children)}</h4>
                <h4>{renderEmojisWithOpacity('Good With Other Dogs', dog.otherDogs)}</h4>
                <h4>{renderEmojisWithOpacity('Shedding Level', dog.shed)}</h4>
                <h4>{renderEmojisWithOpacity('Drooling Level', dog.drool)}</h4>
                <h4>{renderEmojisWithOpacity('Grooming Level', dog.groom)}</h4>
                <h4>{renderEmojisWithOpacity('Openness', dog.strangers)}</h4>
                <h4>{renderEmojisWithOpacity('Playfullness Level', dog.play)}</h4>
                <h4>{renderEmojisWithOpacity('Watchdog/Protective Level', dog.protect)}</h4>
                <h4>{renderEmojisWithOpacity('Adaptivity Level', dog.adapt)}</h4>
                <h4>{renderEmojisWithOpacity('Trainability Level', dog.train)}</h4>
                <h4>{renderEmojisWithOpacity('Energy Level', dog.energy)}</h4>
                <h4>{renderEmojisWithOpacity('Barking Level', dog.vocal)}</h4>
                <h4>{renderEmojisWithOpacity('Mental Stimulation Needs', dog.mentalStim)}</h4>
                <br />
                <h4>Additional Info: {dog.about}</h4>


                <button className="btn btn-dark" onClick={handleDelete}>Delete {dog.breed}</button><span> </span>
                <Link to={`/dogs/${dog._id}/edit`}>
                <button className="btn btn-dark" >Edit {dog.breed}</button>
                </Link>
                
               
            </div>
        </>
    )
}