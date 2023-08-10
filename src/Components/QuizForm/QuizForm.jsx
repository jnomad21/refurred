import { useNavigate, useParams } from "react-router-dom";
import { useRef, useState, useEffect } from 'react';
import { toolTipData } from '../DogDetail/ToolTipData';
import './QuizForm.css';


export default function QuizForm() {
    useEffect(() => {
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new window.bootstrap.Tooltip(tooltipTriggerEl);
        });
    }, []);

    const navigate = useNavigate();
    const [error, setError] = useState('')
    const sizeGroupRef = useRef('')
    const affectionRef = useRef('')
    const childrenRef = useRef('')
    const otherDogsRef = useRef('')
    const shedRef = useRef('')
    const groomRef = useRef('')
    const droolRef = useRef('')
    const strangersRef = useRef('')
    const playRef = useRef('')
    const protectRef = useRef('')
    const adaptRef = useRef('')
    const trainRef = useRef('')
    const energyRef = useRef('')
    const vocalRef = useRef('')
    const mentalStimRef = useRef('')

    const newDog = {
        sizeGroup: sizeGroupRef.current.value,
        affection: affectionRef.current.value,
        children: childrenRef.current.value,
        otherDogs: otherDogsRef.current.value,
        shed: shedRef.current.value,
        groom: groomRef.current.value,
        drool: droolRef.current.value,
        strangers: strangersRef.current.value,
        play: playRef.current.value,
        protect: protectRef.current.value,
        adapt: adaptRef.current.value,
        train: trainRef.current.value,
        energy: energyRef.current.value,
        vocal: vocalRef.current.value,
        mentalStim: mentalStimRef.current.value,
    }

    async function handleSubmit(e) {
        e.preventDefault()
        setError('')
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                    <label htmlFor="sizeGroup">Size Group:</label>
                    <select name="sizeGroup" id="sizeGroup" className="form-select" ref={sizeGroupRef}>
                        <option value="1">1-10 Pounds</option>
                        <option value="2">11-20 Pounds</option>
                        <option value="3">21-40 Pounds</option>
                        <option value="4">41-70 Pounds</option>
                        <option value="5">71-90 Pounds</option>
                        <option value="6">91+ Pounds</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <span
                        className="bi bi-info-circle text-dark custom-tooltip"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title={toolTipData.affection}
                    ></span>
                    <label htmlFor="affection">Affection level</label>
                    <select name="affection" id="affection" className="form-select" ref={affectionRef}>
                        <option value="1">1 - Independent</option>
                        <option value="2">2 </option>
                        <option value="3">3 </option>
                        <option value="4">4 </option>
                        <option value="5">5 - Lovey-Dovey</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <span
                        className="bi bi-info-circle text-dark custom-tooltip"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title={toolTipData.children}
                    ></span>
                    <label htmlFor="children">Good with children</label>
                    <select name="children" id="children" className="form-select" ref={childrenRef}>
                        <option value="1">1 - Not Recommended</option>
                        <option value="2">2 </option>
                        <option value="3">3 </option>
                        <option value="4">4 </option>
                        <option value="5">5 - Great with Children</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <span
                        className="bi bi-info-circle text-dark custom-tooltip"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title={toolTipData.otherDogs}
                    ></span>
                    <label htmlFor="otherDogs">Good with other dogs</label>
                    <select name="otherDogs" id="otherDogs" className="form-select" ref={otherDogsRef}>
                        <option value="1">1 - Not Recommended</option>
                        <option value="2">2 </option>
                        <option value="3">3 </option>
                        <option value="4">4 </option>
                        <option value="5">5 - Great with other dogs</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <span
                        className="bi bi-info-circle text-dark custom-tooltip"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title={toolTipData.shed}
                    ></span>
                    <label htmlFor="shed">Level of Shedding</label>
                    <select name="shed" id="shed" className="form-select" ref={shedRef}>
                        <option value="1">1 - No Shedding</option>
                        <option value="2">2 </option>
                        <option value="3">3 </option>
                        <option value="4">4 </option>
                        <option value="5">5 - Fur Everywhere!</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <span
                        className="bi bi-info-circle text-dark custom-tooltip"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title={toolTipData.groom}
                    ></span>
                    <label htmlFor="groom">Grooming Requirement</label>
                    <select name="groom" id="groom" className="form-select" ref={groomRef}>
                        <option value="1">1 - Monthly</option>
                        <option value="2">2 </option>
                        <option value="3">3 </option>
                        <option value="4">4 </option>
                        <option value="5">5 - Daily</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <span
                        className="bi bi-info-circle text-dark custom-tooltip"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title={toolTipData.drool}
                    ></span>
                    <label htmlFor="drool">Drooling Level</label>
                    <select name="drrol" id="drool" className="form-select" ref={droolRef}>
                        <option value="1">1 - Hardly</option>
                        <option value="2">2 </option>
                        <option value="3">3 </option>
                        <option value="4">4 </option>
                        <option value="5">5 - Constant</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <span
                        className="bi bi-info-circle text-dark custom-tooltip"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title={toolTipData.strangers}
                    ></span>
                    <label htmlFor="strangers">Openness to Strangers</label>
                    <select name="strangers" id="strangers" className="form-select" ref={strangersRef}>
                        <option value="1">1 - Reserved</option>
                        <option value="2">2 </option>
                        <option value="3">3 </option>
                        <option value="4">4 </option>
                        <option value="5">5 - Very friendly with anyone</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <span
                        className="bi bi-info-circle text-dark custom-tooltip"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title={toolTipData.play}
                    ></span>
                    <label htmlFor="play">Playfulness Level</label>
                    <select name="play" id="play" className="form-select" ref={playRef}>
                        <option value="1">1 - Doesn't play often</option>
                        <option value="2">2 </option>
                        <option value="3">3 </option>
                        <option value="4">4 </option>
                        <option value="5">5 - Non-stop</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <span
                        className="bi bi-info-circle text-dark custom-tooltip"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title={toolTipData.protect}
                    ></span>
                    <label htmlFor="protect">Watchdog/Protection Level</label>
                    <select name="protect" id="protect" className="form-select" ref={protectRef}>
                        <option value="1">1 - Lax</option>
                        <option value="2">2 </option>
                        <option value="3">3 </option>
                        <option value="4">4 </option>
                        <option value="5">5 - Vigilant/Very Protective</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <span
                        className="bi bi-info-circle text-dark custom-tooltip"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title={toolTipData.adapt}
                    ></span>
                    <label htmlFor="adapt">Adaptability Level</label>
                    <select name="adapt" id="adapt" className="form-select" ref={adaptRef}>
                        <option value="1">1 - Lives for Routine</option>
                        <option value="2">2 </option>
                        <option value="3">3 </option>
                        <option value="4">4 </option>
                        <option value="5">5 - Highly Adaptable</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <span
                        className="bi bi-info-circle text-dark custom-tooltip"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title={toolTipData.train}
                    ></span>
                    <label htmlFor="train">Trainability Level</label>
                    <select name="train" id="train" className="form-select" ref={trainRef}>
                        <option value="1">1 - Strong-willed, defiant</option>
                        <option value="2">2 </option>
                        <option value="3">3 </option>
                        <option value="4">4 </option>
                        <option value="5">5 - Eager to please</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <span
                        className="bi bi-info-circle text-dark custom-tooltip"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title={toolTipData.energy}
                    ></span>
                    <label htmlFor="energy">Energy Level</label>
                    <select name="energy" id="energy" className="form-select" ref={energyRef}>
                        <option value="1">1 - Couch potato</option>
                        <option value="2">2 </option>
                        <option value="3">3 </option>
                        <option value="4">4 </option>
                        <option value="5">5 - Very high energy</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <span
                        className="bi bi-info-circle text-dark custom-tooltip"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title={toolTipData.vocal}
                    ></span>
                    <label htmlFor="vocal">Vocal/Barking Level</label>
                    <select name="vocal" id="vocal" className="form-select" ref={vocalRef}>
                        <option value="1">1 - Minimal Vocality</option>
                        <option value="2">2 </option>
                        <option value="3">3 </option>
                        <option value="4">4 </option>
                        <option value="5">5 - Very vocal</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <span
                        className="bi bi-info-circle text-dark custom-tooltip"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title={toolTipData.mentalStim}
                    ></span>
                    <label htmlFor="mentalStim">Mental Stimulation Needs</label>
                    <select name="mentalStim" id="mentalStim" className="form-select" ref={mentalStimRef}>
                        <option value="1">1 - Happy to lounge around</option>
                        <option value="2">2 </option>
                        <option value="3">3 </option>
                        <option value="4">4 </option>
                        <option value="5">5 - Consistently looking for something to do</option>
                    </select>
                </div>
                <br />

                <button type="submit" className="btn btn-success" id="newDogButton">See Results</button>
            </form>

        </>
    )
}