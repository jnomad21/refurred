import { useLocation } from "react-router-dom";
import { dogsIndexRequest, deleteDogRequest } from '../../utilities/dogs-api';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./QuizResult.css";


export default function QuizResult(){
    const location = useLocation();
    const quizResult = location.state.quizResult;

    const [dogs, setDogs] = useState([]);
    useEffect(() => {
        async function getDogs() {
            const dogsData = await dogsIndexRequest();
            setDogs(dogsData);
        }
        getDogs();
    }, []);

    let topScoringDogs = [];

    dogs.forEach((dog) => {
        let dogScore = 0;

        if (quizResult.affection == dog.affection) {
            dogScore += 5;
        } else if (Math.abs(quizResult.affection - dog.affection) == 1) {
            dogScore += 3;
        } else if (Math.abs(quizResult.affection - dog.affection) == 2) {
            dogScore += 2;
        } else if (Math.abs(quizResult.affection - dog.affection) == 3) {
            dogScore += 1;
        }

        if (quizResult.sizeGroup == dog.sizeGroup) {
            dogScore += 6;
        } else if (Math.abs(quizResult.sizeGroup - dog.sizeGroup) == 1) {
            dogScore += 4;
        } else if (Math.abs(quizResult.sizeGroup - dog.sizeGroup) == 2) {
            dogScore += 3;
        } else if (Math.abs(quizResult.sizeGroup - dog.sizeGroup) == 3) {
            dogScore += 2;
        }else if (Math.abs(quizResult.sizeGroup - dog.sizeGroup) == 4) {
            dogScore += 1;
        }

        if (quizResult.adapt == dog.adapt) {
            dogScore += 5;
        } else if (Math.abs(quizResult.adapt - dog.adapt) == 1) {
            dogScore += 3;
        } else if (Math.abs(quizResult.adapt - dog.adapt) == 2) {
            dogScore += 2;
        } else if (Math.abs(quizResult.adapt - dog.adapt) == 3) {
            dogScore += 1;
        }

        if (quizResult.children == dog.children) {
            dogScore += 5;
        } else if (Math.abs(quizResult.children - dog.children) == 1) {
            dogScore += 3;
        } else if (Math.abs(quizResult.children - dog.children) == 2) {
            dogScore += 2;
        } else if (Math.abs(quizResult.children - dog.children) == 3) {
            dogScore += 1;
        }

        if (quizResult.drool == dog.drool) {
            dogScore += 5;
        } else if (Math.abs(quizResult.drool - dog.drool) == 1) {
            dogScore += 3;
        } else if (Math.abs(quizResult.drool - dog.drool) == 2) {
            dogScore += 2;
        } else if (Math.abs(quizResult.drool - dog.drool) == 3) {
            dogScore += 1;
        }

        if (quizResult.energy == dog.energy) {
            dogScore += 5;
        } else if (Math.abs(quizResult.energy - dog.energy) == 1) {
            dogScore += 3;
        } else if (Math.abs(quizResult.energy - dog.energy) == 2) {
            dogScore += 2;
        } else if (Math.abs(quizResult.energy - dog.energy) == 3) {
            dogScore += 1;
        }

        if (quizResult.groom == dog.groom) {
            dogScore += 5;
        } else if (Math.abs(quizResult.groom - dog.groom) == 1) {
            dogScore += 3;
        } else if (Math.abs(quizResult.groom - dog.groom) == 2) {
            dogScore += 2;
        } else if (Math.abs(quizResult.groom - dog.groom) == 3) {
            dogScore += 1;
        }

        if (quizResult.mentalStim == dog.mentalStim) {
            dogScore += 5;
        } else if (Math.abs(quizResult.mentalStim - dog.mentalStim) == 1) {
            dogScore += 3;
        } else if (Math.abs(quizResult.mentalStim - dog.mentalStim) == 2) {
            dogScore += 2;
        } else if (Math.abs(quizResult.mentalStim - dog.mentalStim) == 3) {
            dogScore += 1;
        }

        if (quizResult.otherDogs == dog.otherDogs) {
            dogScore += 5;
        } else if (Math.abs(quizResult.otherDogs - dog.otherDogs) == 1) {
            dogScore += 3;
        } else if (Math.abs(quizResult.otherDogs - dog.otherDogs) == 2) {
            dogScore += 2;
        } else if (Math.abs(quizResult.otherDogs - dog.otherDogs) == 3) {
            dogScore += 1;
        }

        if (quizResult.play == dog.play) {
            dogScore += 5;
        } else if (Math.abs(quizResult.play - dog.play) == 1) {
            dogScore += 3;
        } else if (Math.abs(quizResult.play - dog.play) == 2) {
            dogScore += 2;
        } else if (Math.abs(quizResult.play - dog.play) == 3) {
            dogScore += 1;
        }

        if (quizResult.protect == dog.protect) {
            dogScore += 5;
        } else if (Math.abs(quizResult.protect - dog.protect) == 1) {
            dogScore += 3;
        } else if (Math.abs(quizResult.protect - dog.protect) == 2) {
            dogScore += 2;
        } else if (Math.abs(quizResult.protect - dog.protect) == 3) {
            dogScore += 1;
        }

        if (quizResult.shed == dog.shed) {
            dogScore += 5;
        } else if (Math.abs(quizResult.shed - dog.shed) == 1) {
            dogScore += 3;
        } else if (Math.abs(quizResult.shed - dog.shed) == 2) {
            dogScore += 2;
        } else if (Math.abs(quizResult.shed - dog.shed) == 3) {
            dogScore += 1;
        }

        if (quizResult.strangers == dog.strangers) {
            dogScore += 5;
        } else if (Math.abs(quizResult.strangers - dog.strangers) == 1) {
            dogScore += 3;
        } else if (Math.abs(quizResult.strangers - dog.strangers) == 2) {
            dogScore += 2;
        } else if (Math.abs(quizResult.strangers - dog.strangers) == 3) {
            dogScore += 1;
        }

        if (quizResult.train == dog.train) {
            dogScore += 5;
        } else if (Math.abs(quizResult.train - dog.train) == 1) {
            dogScore += 3;
        } else if (Math.abs(quizResult.train - dog.train) == 2) {
            dogScore += 2;
        } else if (Math.abs(quizResult.train - dog.train) == 3) {
            dogScore += 1;
        }

        if (quizResult.vocal == dog.vocal) {
            dogScore += 5;
        } else if (Math.abs(quizResult.vocal - dog.vocal) == 1) {
            dogScore += 3;
        } else if (Math.abs(quizResult.vocal - dog.vocal) == 2) {
            dogScore += 2;
        } else if (Math.abs(quizResult.vocal - dog.vocal) == 3) {
            dogScore += 1;
        }

        if (topScoringDogs.length < 5) {
            topScoringDogs.push({ dog, score: dogScore });
        } else {
            const minScoreDog = topScoringDogs.reduce((minDog, currentDog) =>
                currentDog.score < minDog.score ? currentDog : minDog
            );
            if (dogScore > minScoreDog.score) {
                const index = topScoringDogs.indexOf(minScoreDog);
                topScoringDogs[index] = { dog, score: dogScore };
            }
        }
    });
    topScoringDogs.sort((a, b) => b.score - a.score);


    const renderProgressBar = (score) => {
        const maxScore = 5;
        return Array.from({ length: maxScore }, (_, index) => (
            <div
                key={index}
                className={`mini-progress-bar ${index < score ? 'filled' : ''}`}
            ></div>
        ));
    };


    return (
        <>
            <main>
                <div className="container quiz-result-main">
                {topScoringDogs.map((entry, index) => (
                    <div className="breed-result" key={index}>
                        {index === 0 ? (
                            <>
                                <h1 className="winner-dog-title">We've re<span className="furr">furr</span>ed:</h1>
                                <Link to={`/dogs/${entry.dog._id}`}style={{ textDecoration: 'none' }}><h1 className="winner-dog">The {entry.dog.breed}</h1></Link>
                                <div className="dog-image">
                                <img src={`https://pet-app.s3.us-west-1.amazonaws.com/${encodeURIComponent(entry.dog.breed)}.jpg`} alt={`${entry.dog.breed}`}/>
                                </div>
                                <hr />
                                <h3 className="runner-ups-title furr">Runner Ups:</h3>
                            </>
                        ) : (
                            <Link to={`/dogs/${entry.dog._id}`}style={{ textDecoration: 'none' }}><h4 className="runner-ups">{entry.dog.breed}</h4></Link>
                        )}

                    </div>
                ))}
                <hr />

                <div className="user-quiz-results">
                    <h2 className="quiz-results-title">Breed Selector Quiz Results</h2>
                    <div className="progress-section">
                        <div className="progress-text">
                            <span className="progress-title">Size Group:</span>
                            <div className="mini-progress-bars-container justify-content-center">
                                {renderProgressBar(quizResult.sizeGroup)}
                            </div>
                        </div>
                    </div>
                    <div className="progress-section">
                        <div className="progress-text">
                            <span className="progress-title">Affectionate with Family:</span>
                            <div className="mini-progress-bars-container justify-content-center">
                                {renderProgressBar(quizResult.affection)}
                            </div>
                        </div>
                    </div>
                    <div className="progress-section">
                        <div className="progress-text">
                            <span className="progress-title">Good with Children:</span>
                            <div className="mini-progress-bars-container justify-content-center">
                                {renderProgressBar(quizResult.children)}
                            </div>
                        </div>
                    </div>
                    <div className="progress-section">
                        <div className="progress-text">
                            <span className="progress-title">Good with Other Dogs:</span>
                            <div className="mini-progress-bars-container justify-content-center">
                                {renderProgressBar(quizResult.otherDogs)}
                            </div>
                        </div>
                    </div>

                    <div className="progress-section">
                        <div className="progress-text">
                            <span className="progress-title">Shedding Level:</span>
                            <div className="mini-progress-bars-container justify-content-center">
                                {renderProgressBar(quizResult.shed)}
                            </div>
                        </div>
                    </div>
                    <div className="progress-section">
                        <div className="progress-text">
                            <span className="progress-title">Coat Grooming Frequency:</span>
                            <div className="mini-progress-bars-container justify-content-center">
                                {renderProgressBar(quizResult.groom)}
                            </div>
                        </div>
                    </div>
                    <div className="progress-section">
                        <div className="progress-text">
                            <span className="progress-title">Drooling Level:</span>
                            <div className="mini-progress-bars-container justify-content-center">
                                {renderProgressBar(quizResult.drool)}
                            </div>
                        </div>
                    </div>
                    <div className="progress-section">
                        <div className="progress-text">
                            <span className="progress-title">Openness to Strangers:</span>
                            <div className="mini-progress-bars-container justify-content-center">
                                {renderProgressBar(quizResult.strangers)}
                            </div>
                        </div>
                    </div>
                    <div className="progress-section">
                        <div className="progress-text">
                            <span className="progress-title">Playfulness Level:</span>
                            <div className="mini-progress-bars-container justify-content-center">
                                {renderProgressBar(quizResult.play)}
                            </div>
                        </div>
                    </div>
                    <div className="progress-section">
                        <div className="progress-text">
                            <span className="progress-title">Watchdog/Protective Nature:</span>
                            <div className="mini-progress-bars-container justify-content-center">
                                {renderProgressBar(quizResult.protect)}
                            </div>
                        </div>
                    </div>
                    <div className="progress-section">
                        <div className="progress-text">
                            <span className="progress-title">Adaptability Level:</span>
                            <div className="mini-progress-bars-container justify-content-center">
                                {renderProgressBar(quizResult.adapt)}
                            </div>
                        </div>
                    </div>
                    <div className="progress-section">
                        <div className="progress-text">
                            <span className="progress-title">Trainability Level:</span>
                            <div className="mini-progress-bars-container justify-content-center">
                                {renderProgressBar(quizResult.train)}
                            </div>
                        </div>
                    </div>

                    <div className="progress-section">
                        <div className="progress-text">
                            <span className="progress-title">Energy Level:</span>
                            <div className="mini-progress-bars-container justify-content-center">
                                {renderProgressBar(quizResult.energy)}
                            </div>
                        </div>
                    </div>
                    <div className="progress-section">
                        <div className="progress-text">
                            <span className="progress-title">Barking Level:</span>
                            <div className="mini-progress-bars-container justify-content-center">
                                {renderProgressBar(quizResult.vocal)}
                            </div>
                        </div>
                    </div>
                    <div className="progress-section">
                        <div className="progress-text">
                            <span className="progress-title">Mental Stimulation Needs:</span>
                            <div className="mini-progress-bars-container justify-content-center">
                                {renderProgressBar(quizResult.mentalStim)}
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </main>

        </>
    )
}
