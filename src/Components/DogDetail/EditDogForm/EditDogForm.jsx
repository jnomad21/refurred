import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom'
import { updateDogRequest } from '../../../utilities/dogs-api';

export default function EditDogForm({dog, setDog, setEditFormIsOpen}){
    const navigate = useNavigate();
    const [error, setError] = useState('')
    const breedRef = useRef(dog.breed)
    const sizeGroupRef = useRef(dog.sizeGroup)
    const sizeActualRef = useRef(dog.sizeActual)
    const affectionRef = useRef(dog.affection)
    const childrenRef = useRef(dog.children)
    const otherDogsRef = useRef(dog.otherDogs)
    const shedRef = useRef(dog.shed)
    const groomRef = useRef(dog.groom)
    const droolRef = useRef(dog.drool)
    const coatTypeRef = useRef(dog.coatType)
    const coatLengthRef = useRef(dog.coatLength)
    const strangersRef = useRef(dog.strangers)
    const playRef = useRef(dog.play)
    const protectRef = useRef(dog.protect)
    const adaptRef = useRef(dog.adapt)
    const trainRef = useRef(dog.train)
    const energyRef = useRef(dog.energy)
    const vocalRef = useRef(dog.vocal)
    const mentalStimRef = useRef(dog.mental)
    const aboutRef = useRef(dog.about)

    function capitalizeFirstLetter(str) {
        return str.replace(/\b\w/g, (char) => char.toUpperCase());
    }

    async function handleSubmit(e){
        e.preventDefault()

        const capitalizedBreed = capitalizeFirstLetter(breedRef.current.defaultValue);
        const updatedDog = {
            breed: capitalizedBreed,
            sizeGroup: sizeGroupRef.current.defaultValue,
            sizeActual: sizeActualRef.current.defaultValue,
            affection: affectionRef.current.defaultValue,
            children: childrenRef.current.defaultValue,
            otherDogs: otherDogsRef.current.defaultValue,
            shed: shedRef.current.defaultValue,
            groom: groomRef.current.defaultValue,
            drool: droolRef.current.defaultValue,
            coatType: coatTypeRef.current.defaultValue,
            coatLength: coatLengthRef.current.defaultValue,
            strangers: strangersRef.current.defaultValue,
            play: playRef.current.defaultValue,
            protect: protectRef.current.defaultValue,
            adapt: adaptRef.current.defaultValue,
            train: trainRef.current.defaultValue,
            energy: energyRef.current.defaultValue,
            vocal: vocalRef.current.defaultValue,
            mentalStim: mentalStimRef.current.defaultValue,
            about: aboutRef.current.defaultValue,
        }
        try{
            const newDog = await updateDogRequest(dog._id, updatedDog)
            setDog(newDog)
            setEditFormIsOpen(false)
        }catch(err){
            setError("Bad Update, Man")
        }
    }
    return(
        <>
        <h1>EDIT</h1>
        { error && <p>{JSON.stringify(error)}</p>}
        <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                    <label htmlFor="breed">Breed:</label>
                    <input type="text" id="breed" className="form-control" ref={breedRef} defaultValue={dog.breed} />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="sizeGroup">Size Group:</label>
                    <select name="sizeGroup" id="sizeGroup" className="form-control" ref={sizeGroupRef} defaultValue={dog.sizeGroup}>
                        <option defaultValue="1">1-10 Pounds</option>
                        <option defaultValue="2">11-20 Pounds</option>
                        <option defaultValue="3">21-40 Pounds</option>
                        <option defaultValue="4">41-70 Pounds</option>
                        <option defaultValue="5">71-90 Pounds</option>
                        <option defaultValue="6">91+ Pounds</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="sizeActual">Weight:</label>
                    <input type="text" id="sizeActual" className="form-control" ref={sizeActualRef} defaultValue={dog.sizeActual}/>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="affection">Affection level</label>
                    <select name="affection" id="affection" className="form-control" ref={affectionRef} defaultValue={dog.affection}>
                        <option defaultValue="1">1 - Independent</option>
                        <option defaultValue="2">2 </option>
                        <option defaultValue="3">3 </option>
                        <option defaultValue="4">4 </option>
                        <option defaultValue="5">5 - Lovey-Dovey</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="children">Good with children</label>
                    <select name="children" id="children" className="form-control" ref={childrenRef} defaultValue={dog.children}>
                        <option defaultValue="1">1 - Not Recommended</option>
                        <option defaultValue="2">2 </option>
                        <option defaultValue="3">3 </option>
                        <option defaultValue="4">4 </option>
                        <option defaultValue="5">5 - Great with Children</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="otherDogs">Good with other dogs</label>
                    <select name="otherDogs" id="otherDogs" className="form-control" ref={otherDogsRef} defaultValue={dog.otherDogs}>
                        <option defaultValue="1">1 - Not Recommended</option>
                        <option defaultValue="2">2 </option>
                        <option defaultValue="3">3 </option>
                        <option defaultValue="4">4 </option>
                        <option defaultValue="5">5 - Great with other dogs</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="shed">Level of Shedding</label>
                    <select name="shed" id="shed" className="form-control" ref={shedRef} defaultValue={dog.shed}>
                        <option defaultValue="1">1 - No Shedding</option>
                        <option defaultValue="2">2 </option>
                        <option defaultValue="3">3 </option>
                        <option defaultValue="4">4 </option>
                        <option defaultValue="5">5 - Fur Everywhere!</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="groom">Grooming Requirement</label>
                    <select name="groom" id="groom" className="form-control" ref={groomRef} defaultValue={dog.groom}>
                        <option defaultValue="1">1 - Monthly</option>
                        <option defaultValue="2">2 </option>
                        <option defaultValue="3">3 </option>
                        <option defaultValue="4">4 </option>
                        <option defaultValue="5">5 - Daily</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="drool">Drooling Level</label>
                    <select name="drrol" id="drool" className="form-control" ref={droolRef} defaultValue={dog.drool}>
                        <option defaultValue="1">1 - Hardly</option>
                        <option defaultValue="2">2 </option>
                        <option defaultValue="3">3 </option>
                        <option defaultValue="4">4 </option>
                        <option defaultValue="5">5 - Constant</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="coatType">Coat Type</label>
                    <select name="coatType" id="coatType" className="form-control" ref={coatTypeRef} defaultValue={dog.coatType}>
                        <option defaultValue="Wiry">Wiry</option>
                        <option defaultValue="Rough">Rough</option>
                        <option defaultValue="Curly">Curly</option>
                        <option defaultValue="Hairless">Hairless</option>
                        <option defaultValue="Corded">Corded</option>
                        <option defaultValue="Wavy">Wavy</option>
                        <option defaultValue="Smooth">Smooth</option>
                        <option defaultValue="Double">Double</option>
                        <option defaultValue="Silky">Silky</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="coatLength">Coat Length</label>
                    <select name="coatLength" id="coatLength" className="form-control" ref={coatLengthRef}defaultValue={dog.coatLength}>
                        <option defaultValue="Short">Short</option>
                        <option defaultValue="Medium">Medium</option>
                        <option defaultValue="Long">Long</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="strangers">Openness to Strangers</label>
                    <select name="strangers" id="strangers" className="form-control" ref={strangersRef} defaultValue={dog.strangers}>
                        <option defaultValue="1">1 - Reserved</option>
                        <option defaultValue="2">2 </option>
                        <option defaultValue="3">3 </option>
                        <option defaultValue="4">4 </option>
                        <option defaultValue="5">5 - Very friendly with anyone</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="play">Playfulness Level</label>
                    <select name="play" id="play" className="form-control" ref={playRef}defaultValue={dog.play}>
                        <option defaultValue="1">1 - Doesn't play often</option>
                        <option defaultValue="2">2 </option>
                        <option defaultValue="3">3 </option>
                        <option defaultValue="4">4 </option>
                        <option defaultValue="5">5 - Non-stop</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="protect">Watchdog/Protection Level</label>
                    <select name="protect" id="protect" className="form-control" ref={protectRef}defaultValue={dog.protect}>
                        <option defaultValue="1">1 - Lax</option>
                        <option defaultValue="2">2 </option>
                        <option defaultValue="3">3 </option>
                        <option defaultValue="4">4 </option>
                        <option defaultValue="5">5 - Vigilant/Very Protective</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="adapt">Adaptability Level</label>
                    <select name="adapt" id="adapt" className="form-control" ref={adaptRef}defaultValue={dog.adapt}>
                        <option defaultValue="1">1 - Lives for Routine</option>
                        <option defaultValue="2">2 </option>
                        <option defaultValue="3">3 </option>
                        <option defaultValue="4">4 </option>
                        <option defaultValue="5">5 - Highly Adaptable</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="train">Trainability Level</label>
                    <select name="train" id="train" className="form-control" ref={trainRef}defaultValue={dog.train}>
                        <option defaultValue="1">1 - Strong-willed, defiant</option>
                        <option defaultValue="2">2 </option>
                        <option defaultValue="3">3 </option>
                        <option defaultValue="4">4 </option>
                        <option defaultValue="5">5 - Eager to please</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="energy">Energy Level</label>
                    <select name="energy" id="energy" className="form-control" ref={energyRef}defaultValue={dog.energy}>
                        <option defaultValue="1">1 - Couch potato</option>
                        <option defaultValue="2">2 </option>
                        <option defaultValue="3">3 </option>
                        <option defaultValue="4">4 </option>
                        <option defaultValue="5">5 - Very high energy</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="vocal">Vocal/Barking Level</label>
                    <select name="vocal" id="vocal" className="form-control" ref={vocalRef}defaultValue={dog.vocal}>
                        <option defaultValue="1">1 - Minimal Vocality</option>
                        <option defaultValue="2">2 </option>
                        <option defaultValue="3">3 </option>
                        <option defaultValue="4">4 </option>
                        <option defaultValue="5">5 - Very vocal</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="mentalStim">Mental Stimulation Needs</label>
                    <select name="mentalStim" id="mentalStim" className="form-control" ref={mentalStimRef}defaultValue={dog.mentalStim}>
                        <option defaultValue="1">1 - Happy to lounge around</option>
                        <option defaultValue="2">2 </option>
                        <option defaultValue="3">3 </option>
                        <option defaultValue="4">4 </option>
                        <option defaultValue="5">5 - Consistently looking for something to do</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="about">About</label><br />
                    <textarea type="text" className="form-control" rows="6" cols="60" id="about" ref={aboutRef} defaultValue={dog.about}/>
                </div>
                <button className="btn btn-dark">Edit the Dog</button>
            </form>

            </>
    )
}