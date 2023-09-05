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
        }
        navigate('/dogs/quizResult', { state: { quizResult } });



    }


    return (
        <>

            {error && <p>{JSON.stringify(error)}</p>}

            <form onSubmit={handleSubmit} className="quiz-form">

                <div className="form-group mb-3">
                <h1 className="display-6">Dog Breed Selector Quiz</h1>

                    <label htmlFor="sizeGroup">Size Group</label>
                    <div id="sizeGroupLabel" className="size-group-labels">
                        <span className="min-label">1-10 lbs</span>
                        <span className="label">11-20 lbs</span>
                        <span className="label">21-40 lbs</span>
                        <span className="label">41-70 lbs</span>
                        <span className="label">71-90 lbs</span>
                        <span className="max-label">91+ lbs</span>
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
                    <span
                        className="bi bi-info-circle text-dark custom-tooltip"
                        data-bs-toggle="tooltip"
                        data-bs-placement="left"
                        title={toolTipData.affection}
                    ></span>
                    <label htmlFor="affection">Affection Level</label>
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
                    <span
                        className="bi bi-info-circle text-dark custom-tooltip"
                        data-bs-toggle="tooltip"
                        data-bs-placement="left"
                        title={toolTipData.children}
                    ></span>
                    <label htmlFor="children">Good with Young Children</label>
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
                    <span
                        className="bi bi-info-circle text-dark custom-tooltip"
                        data-bs-toggle="tooltip"
                        data-bs-placement="left"
                        title={toolTipData.otherDogs}
                    ></span>
                    <label htmlFor="otherDogs">Good with other dogs</label>
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
                    <span
                        className="bi bi-info-circle text-dark custom-tooltip"
                        data-bs-toggle="tooltip"
                        data-bs-placement="left"
                        title={toolTipData.shed}
                    ></span>
                    <label htmlFor="shed">Level of Shedding</label>
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
                    <span
                        className="bi bi-info-circle text-dark custom-tooltip"
                        data-bs-toggle="tooltip"
                        data-bs-placement="left"
                        title={toolTipData.groom}
                    ></span>
                    <label htmlFor="groom">Grooming Requirement</label>
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
                    <span
                        className="bi bi-info-circle text-dark custom-tooltip"
                        data-bs-toggle="tooltip"
                        data-bs-placement="left"
                        title={toolTipData.drool}
                    ></span>
                    <label htmlFor="drool">Drooling Level</label>
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
                    <span
                        className="bi bi-info-circle text-dark custom-tooltip"
                        data-bs-toggle="tooltip"
                        data-bs-placement="left"
                        title={toolTipData.strangers}
                    ></span>
                    <label htmlFor="strangers">Openness to Strangers</label>
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
                    <span
                        className="bi bi-info-circle text-dark custom-tooltip"
                        data-bs-toggle="tooltip"
                        data-bs-placement="left"
                        title={toolTipData.play}
                    ></span>
                    <label htmlFor="play">Playfulness Level</label>
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
                    <span
                        className="bi bi-info-circle text-dark custom-tooltip"
                        data-bs-toggle="tooltip"
                        data-bs-placement="left"
                        title={toolTipData.protect}
                    ></span>
                    <label htmlFor="protect">Watchdog/Protection Level</label>
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
                    <span
                        className="bi bi-info-circle text-dark custom-tooltip"
                        data-bs-toggle="tooltip"
                        data-bs-placement="left"
                        title={toolTipData.adapt}
                    ></span>
                    <label htmlFor="adapt">Adaptability Level</label>
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
                    <span
                        className="bi bi-info-circle text-dark custom-tooltip"
                        data-bs-toggle="tooltip"
                        data-bs-placement="left"
                        title={toolTipData.train}
                    ></span>
                    <label htmlFor="train">Trainability Level</label>
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
                    <span
                        className="bi bi-info-circle text-dark custom-tooltip"
                        data-bs-toggle="tooltip"
                        data-bs-placement="left"
                        title={toolTipData.energy}
                    ></span>
                    <label htmlFor="energy">Energy Level</label>
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
                    <span
                        className="bi bi-info-circle text-dark custom-tooltip"
                        data-bs-toggle="tooltip"
                        data-bs-placement="left"
                        title={toolTipData.vocal}
                    ></span>
                    <label htmlFor="vocal">Barking Level</label>
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
                    <span
                        className="bi bi-info-circle text-dark custom-tooltip"
                        data-bs-toggle="tooltip"
                        data-bs-placement="left"
                        title={toolTipData.mentalStim}
                    ></span>
                    <label htmlFor="mentalStim">Mental Stimulation Needs</label>
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
                <br />

                <button type="submit" className="btn btn-success" id="newDogButton">See Results</button>
            </form>



        </>
    )
}