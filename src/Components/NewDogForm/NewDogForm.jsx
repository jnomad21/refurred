import { useNavigate, useParams } from "react-router-dom";
import { useRef, useState } from 'react';
import { createDogRequest } from '../../utilities/dogs-api';
import "./NewDogForm.css";

export default function NewDogForm() {
    const navigate = useNavigate();
    const [error, setError] = useState('')
    const breedRef = useRef('')
    const sizeGroupRef = useRef('')
    const sizeActualRef = useRef('')
    const affectionRef = useRef('')
    const childrenRef = useRef('')
    const otherDogsRef = useRef('')
    const shedRef = useRef('')
    const groomRef = useRef('')
    const droolRef = useRef('')
    const coatTypeRef = useRef('')
    const coatLengthRef = useRef('')
    const strangersRef = useRef('')
    const playRef = useRef('')
    const protectRef = useRef('')
    const adaptRef = useRef('')
    const trainRef = useRef('')
    const energyRef = useRef('')
    const vocalRef = useRef('')
    const mentalStimRef = useRef('')
    const aboutRef = useRef('')

    function capitalizeFirstLetter(str) {
        return str.replace(/\b\w/g, (char) => char.toUpperCase());
    }

    async function handleSubmit(e) {
        e.preventDefault()
        setError('')

        const capitalizedBreed = capitalizeFirstLetter(breedRef.current.value);

        const newDog = {
            breed: capitalizedBreed,
            sizeGroup: sizeGroupRef.current.value,
            sizeActual: sizeActualRef.current.value,
            affection: affectionRef.current.value,
            children: childrenRef.current.value,
            otherDogs: otherDogsRef.current.value,
            shed: shedRef.current.value,
            groom: groomRef.current.value,
            drool: groomRef.current.value,
            coatType: coatTypeRef.current.value,
            coatLength: coatLengthRef.current.value,
            strangers: strangersRef.current.value,
            play: playRef.current.value,
            protect: protectRef.current.value,
            adapt: adaptRef.current.value,
            train: trainRef.current.value,
            energy: energyRef.current.value,
            vocal: vocalRef.current.value,
            mentalStim: mentalStimRef.current.value,
            about: aboutRef.current.value,
        }
        try {
            const newDogResponse = await createDogRequest(newDog)
            navigate('/dogs')
        } catch (err) {
            setError(err)
        }
    }

    return (
        <>

            {error && <p>{JSON.stringify(error)}</p>}
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
                    <label htmlFor="affection">Affection level</label>
                    <select name="affection" id="affection" className="form-control" ref={affectionRef}>
                        <option value="1">1 - Independent</option>
                        <option value="2">2 </option>
                        <option value="3">3 </option>
                        <option value="4">4 </option>
                        <option value="5">5 - Lovey-Dovey</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="children">Good with children</label>
                    <select name="children" id="children" className="form-control" ref={childrenRef}>
                        <option value="1">1 - Not reccommended</option>
                        <option value="2">2 </option>
                        <option value="3">3 </option>
                        <option value="4">4 </option>
                        <option value="5">5 - Great with Children</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="otherDogs">Good with other dogs</label>
                    <select name="otherDogs" id="otherDogs" className="form-control" ref={otherDogsRef}>
                        <option value="1">1 - Not Reccommended</option>
                        <option value="2">2 </option>
                        <option value="3">3 </option>
                        <option value="4">4 </option>
                        <option value="5">5 - Great with other dogs</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="shed">Level of Shedding</label>
                    <select name="shed" id="shed" className="form-control" ref={shedRef}>
                        <option value="1">1 - No Shedding</option>
                        <option value="2">2 </option>
                        <option value="3">3 </option>
                        <option value="4">4 </option>
                        <option value="5">5 - Fur Everywhere!</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="groom">Grooming Requirement</label>
                    <select name="groom" id="groom" className="form-control" ref={groomRef}>
                        <option value="1">1 - Monthly</option>
                        <option value="2">2 </option>
                        <option value="3">3 </option>
                        <option value="4">4 </option>
                        <option value="5">5 - Daily</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="drool">Drooling Level</label>
                    <select name="drrol" id="drool" className="form-control" ref={droolRef}>
                        <option value="1">1 - Hardly</option>
                        <option value="2">2 </option>
                        <option value="3">3 </option>
                        <option value="4">4 </option>
                        <option value="5">5 - Constant</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="coatType">Coat Type</label>
                    <select name="coatType" id="coatType" className="form-control" ref={coatTypeRef}>
                        <option value="Wiry">Wiry</option>
                        <option value="Rough">Rough</option>
                        <option value="Curly">Curly</option>
                        <option value="Hairless">Hairless</option>
                        <option value="Corded">Corded</option>
                        <option value="Wavy">Wavy</option>
                        <option value="Smooth">Smooth</option>
                        <option value="Double">Double</option>
                        <option value="Silky">Silky</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="coatLength">Coat Length</label>
                    <select name="coatLength" id="coatLength" className="form-control" ref={coatLengthRef}>
                        <option value="Short">Short</option>
                        <option value="Medium">Medium</option>
                        <option value="Long">Long</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="strangers">Openness to Strangers</label>
                    <select name="strangers" id="strangers" className="form-control" ref={strangersRef}>
                        <option value="1">1 - Reserved</option>
                        <option value="2">2 </option>
                        <option value="3">3 </option>
                        <option value="4">4 </option>
                        <option value="5">5 - Very friendly with anyone</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="play">Playfulness Level</label>
                    <select name="play" id="play" className="form-control" ref={playRef}>
                        <option value="1">1 - Doesn't play often</option>
                        <option value="2">2 </option>
                        <option value="3">3 </option>
                        <option value="4">4 </option>
                        <option value="5">5 - Non-stop</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="protect">Watchdog/Protection Level</label>
                    <select name="protect" id="protect" className="form-control" ref={protectRef}>
                        <option value="1">1 - Lax</option>
                        <option value="2">2 </option>
                        <option value="3">3 </option>
                        <option value="4">4 </option>
                        <option value="5">5 - Vigilant/Very Protective</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="adapt">Adaptability Levl</label>
                    <select name="adapt" id="adapt" className="form-control" ref={adaptRef}>
                        <option value="1">1 - Lives for Routine</option>
                        <option value="2">2 </option>
                        <option value="3">3 </option>
                        <option value="4">4 </option>
                        <option value="5">5 - Highly Adaptable</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="train">Trainability Level</label>
                    <select name="train" id="train" className="form-control" ref={trainRef}>
                        <option value="1">1 - Strong-willed, defiant</option>
                        <option value="2">2 </option>
                        <option value="3">3 </option>
                        <option value="4">4 </option>
                        <option value="5">5 - Eager to please</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="energy">Energy Level</label>
                    <select name="energy" id="energy" className="form-control" ref={energyRef}>
                        <option value="1">1 - Couch potato</option>
                        <option value="2">2 </option>
                        <option value="3">3 </option>
                        <option value="4">4 </option>
                        <option value="5">5 - Very high energy</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="vocal">Vocal/Barking Level</label>
                    <select name="vocal" id="vocal" className="form-control" ref={vocalRef}>
                        <option value="1">1 - Minimal Vocality</option>
                        <option value="2">2 </option>
                        <option value="3">3 </option>
                        <option value="4">4 </option>
                        <option value="5">5 - Very vocal</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="mentalStim">Mental Stimulation Needs</label>
                    <select name="mentalStim" id="mentalStim" className="form-control" ref={mentalStimRef}>
                        <option value="1">1 - Happy to lounge around</option>
                        <option value="2">2 </option>
                        <option value="3">3 </option>
                        <option value="4">4 </option>
                        <option value="5">5 - Consistently looking for something to do</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="about">About</label><br />
                    <textarea name="" id="" cols="60" rows="6">
                    </textarea>
                </div>
                <button type="submit" className="btn btn-primary" id="newDogButton">Create the Dog</button>
            </form>

        </>
    )
}
