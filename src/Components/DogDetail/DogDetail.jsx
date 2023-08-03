import { useState} from 'react'
import EditDogForm from './EditDogForm/EditDogForm'




export default function DogDetail({dog, handleDelete, setDog}){
    const [editFormIsOpen, setEditFormIsOpen] = useState(false)
    
    
    function toggleEditForm(){
        setEditFormIsOpen((prevState) => {
            return !prevState
            }
        )
    }
    return (
        <>
            <div>
                <h3>{dog.breed}</h3>
                <h4>Size: {dog.sizeActual}</h4>
                <h4>Affection Level: {dog.affection}</h4>
                <h4>Good with children: {dog.children}</h4>
                <h4>Good with other dogs: {dog.otherDogs}</h4>
                <h4>Shedding: {dog.shed}</h4>
                <h4>Drool Level: {dog.drool}</h4>
                <h4>Grooming Level: {dog.groom}</h4>
                <h4>Coat Type: {dog.coatType}</h4>
                <h4>Coat Length: {dog.coatLength}</h4>
                <h4>Openness to Strangers: {dog.strangers}</h4>
                <h4>Playfulness Level: {dog.play}</h4>
                <h4>Watchdog/Protection Level: {dog.protect}</h4>
                <h4>Adaptability Level: {dog.adapt}</h4>
                <h4>Trainability Level: {dog.train}</h4>
                <h4>Energy Level: {dog.energy}</h4>
                <h4>Barking Level: {dog.vocal}</h4>
                <h4>Mental Stimulation Needs: {dog.mentalStim}</h4>
                <h4>Additional Info: {dog.about}</h4>
                

                <button onClick={handleDelete}>DELETE {dog.breed}</button>
                <button onClick={toggleEditForm}>
                    {editFormIsOpen ? "Close Editor" : "Edit"}
                </button>
                { editFormIsOpen && 
                    <EditDogForm dog={dog} setDog={setDog} setEditFormIsOpen={setEditFormIsOpen}></EditDogForm>
                }
            </div>
        </>
    )
}