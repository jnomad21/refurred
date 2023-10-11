import { useNavigate, useParams } from "react-router-dom";
import { useRef, useState, useEffect } from 'react';
import { toolTipData } from '../DogDetail/ToolTipData';
import QuizResult from "../../Pages/QuizResult/QuizResult";
import './QuizForm.css';


export default function QuizForm() {
    useEffect(() => {
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new window.bootstrap.Tooltip(tooltipTriggerEl);
        });
    }, []);

    const navigate = useNavigate();
    const [quizAns, setQuizAns] = useState([])
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
    const pri1Ref = useRef('')
    const pri2Ref = useRef('')
    const pri3Ref = useRef('')

    async function handleSubmit(e) {
        e.preventDefault()
        setError('')

        const quizResult = {
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
            pri1: pri1Ref.current.value,
            pri2: pri2Ref.current.value,
            pri3: pri3Ref.current.value
        }
        console.log(quizResult)
        navigate('/dogs/quizResult', { state: { quizResult } });



    }


    return (
        <>

            {error && <p>{JSON.stringify(error)}</p>}

            <form onSubmit={handleSubmit} className="quiz-form">

                <div className="form-group mb-3">
                    <h1 className="display-6">Dog Breed Selector</h1>
                    <p className="lead text-center">Designed to assist you in selecting the ideal dog breed for your lifestyle. Adjust the sliders to indicate your preferences for each trait.</p>
                    <hr />

                    <label htmlFor="sizeGroup">Size Group(lbs)</label>
                    <div id="sizeGroupLabel" className="size-group-labels">
                        <span className="min-label">1-10</span>
                        <span className="label">11-20</span>
                        <span className="label">21-40</span>
                        <span className="label">41-70</span>
                        <span className="label">71-90</span>
                        <span className="max-label">91+</span>
                    </div>
                </div>

                <input
                    type="range"
                    name="sizeGroup"
                    id="sizeGroup"
                    className="form-range"
                    min="1"
                    max="6"
                    ref={sizeGroupRef}
                    aria-labelledby="sizeGroupLabel"
                    defaultValue="1"

                />


                <div className="form-group mb-3">
                    <label htmlFor="affection">Affection Level</label>
                    <span
                        className="bi bi-info-circle text-dark custom-tooltip mx-1"
                        data-bs-toggle="tooltip"
                        data-bs-placement="right"
                        title={toolTipData.affection}
                    ></span>
                    <div id="rangeLabel">
                        <span className="min-label">Independent</span>
                        <span className="mid-label">Friendly</span>
                        <span className="max-label">Lovey-Dovey</span>
                    </div>

                    <input
                        type="range"
                        name="affection"
                        id="affection"
                        className="form-range"
                        min="1"
                        max="5"
                        ref={affectionRef}
                        aria-labelledby="affectionLabel"
                        defaultValue="1"
                    />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="children">Good with Young Children</label>
                    <span
                        className="bi bi-info-circle text-dark custom-tooltip mx-1"
                        data-bs-toggle="tooltip"
                        data-bs-placement="right"
                        title={toolTipData.children}
                    ></span>
                    <div id="rangeLabel">
                        <span className="min-label">Not Recommended</span>
                        <span className="mid-label">Friendly</span>
                        <span className="max-label">Best Friends</span>
                    </div>
                    <input
                        type="range"
                        name="children"
                        id="children"
                        className="form-range"
                        min="1"
                        max="5"
                        aria-labelledby="childrenLabel"
                        ref={childrenRef}
                        defaultValue="1"
                    />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="otherDogs">Good with Other Dogs</label>
                    <span
                        className="bi bi-info-circle text-dark custom-tooltip mx-1"
                        data-bs-toggle="tooltip"
                        data-bs-placement="right"
                        title={toolTipData.otherDogs}
                    ></span>
                    <div id="rangeLabel">
                        <span className="min-label">Not Recommended</span>
                        <span className="mid-label">Friendly</span>
                        <span className="max-label">Best Friends</span>
                    </div>
                    <input
                        type="range"
                        name="otherDogs"
                        id="otherDogs"
                        className="form-range"
                        min="1"
                        max="5"
                        aria-labelledby="otherDogsLabel"
                        ref={otherDogsRef}
                        defaultValue="1"
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="shed">Level of Shedding</label>
                    <span
                        className="bi bi-info-circle text-dark custom-tooltip mx-1"
                        data-bs-toggle="tooltip"
                        data-bs-placement="right"
                        title={toolTipData.shed}
                    ></span>
                    <div id="rangeLabel">
                        <span className="min-label">Not Shedding</span>
                        <span className="mid-label">Semi-Frequent</span>
                        <span className="max-label">Hair Everywhere</span>
                    </div>
                    <input
                        type="range"
                        name="shed"
                        id="shed"
                        className="form-range"
                        min="1"
                        max="5"
                        aria-labelledby="shedLabel"
                        ref={shedRef}
                        defaultValue="1"
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="groom">Grooming Requirement</label>
                    <span
                        className="bi bi-info-circle text-dark custom-tooltip mx-1"
                        data-bs-toggle="tooltip"
                        data-bs-placement="right"
                        title={toolTipData.groom}
                    ></span>
                    <div id="rangeLabel">
                        <span className="min-label">Monthly</span>
                        <span className="mid-label">Weekly</span>
                        <span className="max-label">Daily</span>
                    </div>
                    <input
                        type="range"
                        name="groom"
                        id="groom"
                        className="form-range"
                        min="1"
                        max="5"
                        aria-labelledby="groomLabel"
                        ref={groomRef}
                        defaultValue="1"

                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="drool">Drooling Level</label>
                    <span
                        className="bi bi-info-circle text-dark custom-tooltip mx-1"
                        data-bs-toggle="tooltip"
                        data-bs-placement="right"
                        title={toolTipData.drool}
                    ></span>
                    <div id="rangeLabel">
                        <span className="min-label">Less Likely to Drool</span>
                        <span className="mid-label">Semi-Frequent</span>
                        <span className="max-label">Always Have a Towel</span>
                    </div>
                    <input
                        type="range"
                        name="drool"
                        id="drool"
                        className="form-range"
                        min="1"
                        max="5"
                        aria-labelledby="droolLabel"
                        ref={droolRef}
                        defaultValue="1"

                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="strangers">Openness to Strangers</label>
                    <span
                        className="bi bi-info-circle text-dark custom-tooltip mx-1"
                        data-bs-toggle="tooltip"
                        data-bs-placement="right"
                        title={toolTipData.strangers}
                    ></span>
                    <div id="rangeLabel">
                        <span className="min-label">Reserved</span>
                        <span className="mid-label">Semi-Open</span>
                        <span className="max-label">Best Friends</span>
                    </div>
                    <input
                        type="range"
                        name="strangers"
                        id="strangers"
                        className="form-range"
                        min="1"
                        max="5"
                        aria-labelledby="strangersLabel"
                        ref={strangersRef}
                        defaultValue="1"

                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="play">Playfulness Level</label>
                    <span
                        className="bi bi-info-circle text-dark custom-tooltip mx-1"
                        data-bs-toggle="tooltip"
                        data-bs-placement="right"
                        title={toolTipData.play}
                    ></span>
                    <div id="rangeLabel">
                        <span className="min-label">Only When You Want To</span>
                        <span className="mid-label">Likes to Play</span>
                        <span className="max-label">Non-Stop</span>
                    </div>
                    <input
                        type="range"
                        name="play"
                        id="play"
                        className="form-range"
                        min="1"
                        max="5"
                        aria-labelledby="playLabel"
                        ref={playRef}
                        defaultValue="1"

                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="protect">Watchdog/Protection Level</label>
                    <span
                        className="bi bi-info-circle text-dark custom-tooltip mx-1"
                        data-bs-toggle="tooltip"
                        data-bs-placement="right"
                        title={toolTipData.protect}
                    ></span>
                    <div id="rangeLabel">
                        <span className="min-label">What's Mine is Yours</span>
                        <span className="mid-label">Semi-Protective</span>
                        <span className="max-label">Vigilant</span>
                    </div>
                    <input
                        type="range"
                        name="protect"
                        id="protect"
                        className="form-range"
                        min="1"
                        max="5"
                        aria-labelledby="protectLabel"
                        ref={protectRef}
                        defaultValue="1"

                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="adapt">Adaptability Level</label>
                    <span
                        className="bi bi-info-circle text-dark custom-tooltip mx-1"
                        data-bs-toggle="tooltip"
                        data-bs-placement="right"
                        title={toolTipData.adapt}
                    ></span>
                    <div id="rangeLabel">
                        <span className="min-label">Lives for Routine</span>
                        <span className="mid-label">Likes Structure</span>
                        <span className="max-label">Highly Adaptable</span>
                    </div>
                    <input
                        type="range"
                        name="adapt"
                        id="adapt"
                        className="form-range"
                        min="1"
                        max="5"
                        aria-labelledby="adaptLabel"
                        ref={adaptRef}
                        defaultValue="1"

                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="train">Trainability Level</label>
                    <span
                        className="bi bi-info-circle text-dark custom-tooltip mx-1"
                        data-bs-toggle="tooltip"
                        data-bs-placement="right"
                        title={toolTipData.train}
                    ></span>
                    <div id="rangeLabel">
                        <span className="min-label">Self-Willed</span>
                        <span className="mid-label">Listens Well</span>
                        <span className="max-label">Eager to Please</span>
                    </div>
                    <input
                        type="range"
                        name="train"
                        id="train"
                        className="form-range"
                        min="1"
                        max="5"
                        aria-labelledby="trainLabel"
                        ref={trainRef}
                        defaultValue="1"

                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="energy">Energy Level</label>
                    <span
                        className="bi bi-info-circle text-dark custom-tooltip mx-1"
                        data-bs-toggle="tooltip"
                        data-bs-placement="right"
                        title={toolTipData.energy}
                    ></span>
                    <div id="rangeLabel">
                        <span className="min-label">Couch Potato</span>
                        <span className="mid-label">Semi-Energetic</span>
                        <span className="max-label">High Energy</span>
                    </div>
                    <input
                        type="range"
                        name="energy"
                        id="energy"
                        className="form-range"
                        min="1"
                        max="5"
                        aria-labelledby="energyLabel"
                        ref={energyRef}
                        defaultValue="1"

                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="vocal">Barking Level</label>
                    <span
                        className="bi bi-info-circle text-dark custom-tooltip mx-1"
                        data-bs-toggle="tooltip"
                        data-bs-placement="right"
                        title={toolTipData.vocal}
                    ></span>
                    <div id="rangeLabel">
                        <span className="min-label">Only to Alert</span>
                        <span className="mid-label">Semi-Vocal</span>
                        <span className="max-label">Very Vocal</span>
                    </div>
                    <input
                        type="range"
                        name="vocal"
                        id="vocal"
                        className="form-range"
                        min="1"
                        max="5"
                        aria-labelledby="vocalLabel"
                        ref={vocalRef}
                        defaultValue="1"

                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="mentalStim">Mental Stimulation Needs</label>
                    <span
                        className="bi bi-info-circle text-dark custom-tooltip mx-1"
                        data-bs-toggle="tooltip"
                        data-bs-placement="right"
                        title={toolTipData.mentalStim}
                    ></span>
                    <div id="rangeLabel">
                        <span className="min-label">Happy to Lounge</span>
                        <span className="mid-label">Sometimes Busy</span>
                        <span className="max-label">Busy Breed</span>
                    </div>
                    <input
                        type="range"
                        name="mentalStim"
                        id="mentalStim"
                        className="form-range"
                        min="1"
                        max="5"
                        aria-labelledby="mentalStimLabel"
                        ref={mentalStimRef}
                        defaultValue="1"

                    />
                </div>
                <hr />
                    <h4 className="text-center mt-4">Top Preferences</h4>
                <div className="priority-container">
                        <select name="Pri1" id="Pri1" ref={pri1Ref} className="btn">
                            <option value="" disabled selected>1st Priority</option>
                            <option value="size1">Size Group</option>
                            <option value="affection1">Affection Level</option>
                            <option value="children1">Good with Children</option>
                            <option value="otherDogs1">Good with Other Dogs</option>
                            <option value="shed1">Level of Shedding</option>
                            <option value="groom1">Grooming Level</option>
                            <option value="drool1">Drooling Level</option>
                            <option value="strangers1">Openess to Strangers</option>
                            <option value="play1">Playfulness Level</option>
                            <option value="protect1">Watchdog/Protection Level</option>
                            <option value="adapt1">Adaptability Level</option>
                            <option value="train1">Trainability Level</option>
                            <option value="energy1">Energy Level</option>
                            <option value="vocal1">Barking Level</option>
                            <option value="mental1">Mental Stimulation Needs</option>
                        </select>

                        <select name="Pri2" id="Pri2" ref={pri2Ref} className="btn">
                            <option value="" disabled selected>2nd Priority</option>
                            <option value="size2">Size Group</option>
                            <option value="affection2">Affection Level</option>
                            <option value="children2">Good with Children</option>
                            <option value="otherDogs2">Good with Other Dogs</option>
                            <option value="shed2">Level of Shedding</option>
                            <option value="groom2">Grooming Level</option>
                            <option value="drool2">Drooling Level</option>
                            <option value="strangers2">Openess to Strangers</option>
                            <option value="play2">Playfulness Level</option>
                            <option value="protect2">Watchdog/Protection Level</option>
                            <option value="adapt2">Adaptability Level</option>
                            <option value="train2">Trainability Level</option>
                            <option value="energy2">Energy Level</option>
                            <option value="vocal2">Barking Level</option>
                            <option value="mental2">Mental Stimulation Needs</option>
                        </select>

                        <select name="Pri3" id="Pri3" ref={pri3Ref} className="btn">
                            <option value="" disabled selected>3rd Priority</option>
                            <option value="size3">Size Group</option>
                            <option value="affection3">Affection Level</option>
                            <option value="children3">Good with Children</option>
                            <option value="otherDogs3">Good with Other Dogs</option>
                            <option value="shed3">Level of Shedding</option>
                            <option value="groom3">Grooming Level</option>
                            <option value="drool3">Drooling Level</option>
                            <option value="strangers3">Openess to Strangers</option>
                            <option value="play3">Playfulness Level</option>
                            <option value="protect3">Watchdog/Protection Level</option>
                            <option value="adapt3">Adaptability Level</option>
                            <option value="train3">Trainability Level</option>
                            <option value="energy3">Energy Level</option>
                            <option value="vocal3">Barking Level</option>
                            <option value="mental3">Mental Stimulation Needs</option>
                        </select>
                    </div>
                    <hr />

                <button type="submit" className="btn btn-success" id="newDogButton">See Results</button>
            </form>



        </>
    )
}