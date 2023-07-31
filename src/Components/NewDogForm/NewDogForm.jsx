import { useNavigate, useParams } from "react-router-dom";
import { useRef, useState } from 'react';
import { createDogRequest} from '../../utilities/dogs-api';
import "./NewDogForm.css";

export default function NewDogForm(){
    const navigate = useNavigate();
    const [error, setError] = useState('')
    const breedRef = useRef('')
    const sizeGroupRef = useRef('')
    const sizeActualRef = useRef('')
    const vocalRef = useRef('')
    const shedRef = useRef('')
    const activityRef = useRef('')
    const spaceRef = useRef('')
    const childrenRef = useRef('')
    const otherPetsRef = useRef('')
    const friendlyRef = useRef('')
    const trainingRef = useRef('')

    async function handleSubmit(e){
        e.preventDefault()
        setError('')
        const newDog = {
            breed: breedRef.current.value,
            size_group: sizeGroupRef.current.value,
            size_actual: sizeActualRef.current.value,
            vocal: vocalRef.current.value,
            shed: shedRef.current.value,
            activity: activityRef.current.value,
            space: spaceRef.current.value,
            children: childrenRef.current.value,
            other_pets: otherPetsRef.current.value,
            friendly: friendlyRef.current.value,
            training: trainingRef.current.value,
        }
        try{
            const newDogResponse = await createDogRequest(newDog)
            navigate('/dogs')
        }catch(err){
            setError(err)
        }
    }

    return(
        <>

        { error && <p>{JSON.stringify(error)}</p>}
        <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
                <label htmlFor="breed">Breed:</label>
                <input type="text" id="breed" className="form-control" ref={breedRef} />
                </div>
                <div className="form-group mb-3">
                <label htmlFor="sizeGroup">Size Group:</label>
                <select name="sizeGroup" id="sizeGroup" className="form-control" ref={sizeGroupRef}>
                    <option value="1">1-10 Pounds</option>
                    <option value="2">11-20 Pounds</option>
                    <option value="3">21-40 Pounds</option>
                    <option value="4">41-70 Pounds</option>
                    <option value="5">71-90 Pounds</option>
                    <option value="6">91+ Pounds</option>
                </select>
                </div>
                <div className="form-group mb-3">
                <label htmlFor="sizeActual">Weight:</label>
                <input type="text" id="sizeActual" className="form-control" ref={sizeActualRef} />
                </div>
                <div className="form-group mb-3">
                <label htmlFor="vocal">Vocality:</label>
                <select name="vocal" id="vocal" className="form-control" ref={vocalRef}>
                    <option value="1">Hardly barks</option>
                    <option value="2">Barks moderately</option>
                    <option value="3">Bark quite a bit</option>
                </select>
                </div>
                <div className="form-group mb-3">
                <label htmlFor="shed">Level of Shedding:</label>
                <select name="shed" id="shed" className="form-control" ref={shedRef}>
                    <option value="1">Small amount of shedding</option>
                    <option value="2">Average amount of shedding</option>
                    <option value="3">High amount of shedding</option>
                </select>
                </div>
                <div className="form-group mb-3">
                <label htmlFor="activity">Activity level of the dog:</label>
                <select name="activity" id="activity" className="form-control" ref={activityRef}>
                    <option value="1">Dog has a lower activity level</option>
                    <option value="2">Moderately Active Dog</option>
                    <option value="3">Highly Active Dog</option>
                </select>
                </div>
                <div className="form-group mb-3">
                <label htmlFor="space">What type of space do you have available for the dog:</label>
                <select name="space" id="space" className="form-control" ref={spaceRef}>
                    <option value="1">Small dwelling with no yard, limited available activity space</option>
                    <option value="2">Large dwelling, but limited availability for external activity</option>
                    <option value="3">Dwelling with average yard, dog has some space for outdoor activity</option>
                    <option value="4">Extensive outdoor space for dog</option>
                </select>
                </div>
                <div className="form-group mb-3">
                <label htmlFor="children">Will you have any children be living with the dog:</label>
                <select name="children" id="children" className="form-control" ref={childrenRef}>
                    <option value="1">No children</option>
                    <option value="2">Yes, young children (Under 7)</option>
                    <option value="3">Yes, but not very young children (7+years old)</option>
                </select>
                </div>
                <div className="form-group mb-3">
                <label htmlFor="otherPets">Will the dog be living with other pets?</label>
                <select name="otherPets" id="otherPets" className="form-control" ref={otherPetsRef}>
                    <option value="1">No</option>
                    <option value="2">Yes</option>
                </select>
                </div>
                <div className="form-group mb-3">
                <label htmlFor="friendly">How friendly/protective would you like your dog to be:</label>
                <select name="friendly" id="friendly" className="form-control" ref={friendlyRef}>
                    <option value="1">Dog will be friendly with just about anyone that approaches</option>
                    <option value="2">Dog may be freindly with some individuals but protective and defensive against those it does not know</option>
                    <option value="3">Dog is highly protective and veary weary of strangers</option>
                </select>
                </div>
                <div className="form-group mb-3">
                <label htmlFor="training">How much trainging would you anticipate providing to the dog</label>
                <select name="trainging" id="training" className="form-control" ref={trainingRef}>
                    <option value="1">Little to no training</option>
                    <option value="2">Some basic obedience/formal training</option>
                    <option value="3">I expect to provide the dog with a significant amount of training</option>
                </select>
                </div>
                <button type="submit" className="btn btn-primary" id="newDogButton">Create the Dog</button>
            </form>

        </>
    )
}
