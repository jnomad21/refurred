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
        // test
        if (quizResult.sizeGroup == dog.sizeGroup) {
            dogScore += (quizResult.sizeGroupPoint == 1) ? 12 : 6;
        } else if (Math.abs(quizResult.sizeGroup - dog.sizeGroup) == 1) {
            dogScore += (quizResult.sizeGroupPoint == 1) ? 8 : 4;
        } else if (Math.abs(quizResult.sizeGroup - dog.sizeGroup) == 2) {
            dogScore += (quizResult.sizeGroupPoint == 1) ? 6 : 3;
        } else if (Math.abs(quizResult.sizeGroup - dog.sizeGroup) == 3) {
            dogScore += (quizResult.sizeGroupPoint == 1) ? 4 : 2;
        } else if (Math.abs(quizResult.sizeGroup - dog.sizeGroup) == 4) {
            dogScore += (quizResult.sizeGroupPoint == 1) ? 2 : 1;
        }
        // test
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
                className={`quiz-mini-progress-bar ${index < score ? 'filled' : ''}`}
            ></div>
        ));
    };


    return (
        <>
            <main>
                <div className="container quiz-result-main">
                    <h1 className="display-3 winner-dog-title">We've re<span className="furr">furr</span>ed:</h1>
                    {topScoringDogs.map((entry, index) => (
                        <div className="breed-result" key={index}>
                            {index === 0 ? (
                                <>
                                    <Link to={`/dogs/${entry.dog._id}`} style={{ textDecoration: 'none' }}>
                                        <div className="card quiz-image">
                                            <img src={`https://pet-app.s3.us-west-1.amazonaws.com/${encodeURIComponent(entry.dog.breed)}.jpg`} alt={`${entry.dog.breed}`} className="winner-img"/>
                                            <div className="dog-overlay winner-dog">The {entry.dog.breed} {entry.score}</div>
                                        </div>
                                    </Link>
                                    <hr />
                                    <h3 className="display-4 runner-ups-title">Runner Ups:</h3>
                                </>
                            ) : (
                                <>
                                    <div className="runner-ups-container">
                                        <div className="runner-ups-grid">
                                            {topScoringDogs.splice(1).map((runnerUp, runnerUpIndex) => (
                                                <div className="runner-up" key={runnerUpIndex}>
                                                    <Link to={`/dogs/${runnerUp.dog._id}`} style={{ textDecoration: 'none' }}>
                                                        <div className="card quiz-image">
                                                            <div className="dog-overlay">{runnerUp.dog.breed}</div>
                                                            <img src={`https://pet-app.s3.us-west-1.amazonaws.com/${encodeURIComponent(runnerUp.dog.breed)}.jpg`} alt={`${runnerUp.dog.breed}`} className="runner-up-img"/>
                                                        </div>
                                                    </Link>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    ))}

                    <hr />

                    <div className="user-quiz-results">

                        <h2 className="display-5 quiz-results-title">Breed Selector Quiz Results</h2>
                        <div className="progress-grid">
                            <div className="quiz-progress-section">
                                <span className="quiz-progress-title">Size Group:</span>
                                <div className="mini-progress-bars-container">
                                    {renderProgressBar(quizResult.sizeGroup)}
                                </div>
                            </div>
                            <div className="quiz-progress-section">
                                <span className="quiz-progress-title">Affectionate with Family:</span>
                                <div className="mini-progress-bars-container">
                                    {renderProgressBar(quizResult.affection)}
                                </div>
                            </div>
                            <div className="quiz-progress-section">
                                <span className="quiz-progress-title">Good with Children:</span>
                                <div className="mini-progress-bars-container">
                                    {renderProgressBar(quizResult.children)}
                                </div>
                            </div>
                            <div className="quiz-progress-section">
                                <span className="quiz-progress-title">Good with Other Dogs:</span>
                                <div className="mini-progress-bars-container ">
                                    {renderProgressBar(quizResult.otherDogs)}
                                </div>
                            </div>

                            <div className="quiz-progress-section">
                                <span className="quiz-progress-title">Shedding Level:</span>
                                <div className="mini-progress-bars-container">
                                    {renderProgressBar(quizResult.shed)}
                                </div>
                            </div>
                            <div className="quiz-progress-section">
                                <span className="quiz-progress-title">Coat Grooming Frequency:</span>
                                <div className="mini-progress-bars-container">
                                    {renderProgressBar(quizResult.groom)}
                                </div>
                            </div>
                            <div className="quiz-progress-section">
                                <span className="quiz-progress-title">Drooling Level:</span>
                                <div className="mini-progress-bars-container">
                                    {renderProgressBar(quizResult.drool)}
                                </div>
                            </div>
                            <div className="quiz-progress-section">
                                <span className="quiz-progress-title">Openness to Strangers:</span>
                                <div className="mini-progress-bars-container">
                                    {renderProgressBar(quizResult.strangers)}
                                </div>
                            </div>
                            <div className="quiz-progress-section">
                                <span className="quiz-progress-title">Playfulness Level:</span>
                                <div className="mini-progress-bars-container">
                                    {renderProgressBar(quizResult.play)}
                                </div>
                            </div>
                            <div className="quiz-progress-section">
                                <span className="quiz-progress-title">Watchdog/Protective Nature:</span>
                                <div className="mini-progress-bars-container">
                                    {renderProgressBar(quizResult.protect)}
                                </div>
                            </div>

                            <div className="quiz-progress-section">
                                <span className="quiz-progress-title">Adaptability Level:</span>
                                <div className="mini-progress-bars-container">
                                    {renderProgressBar(quizResult.adapt)}
                                </div>
                            </div>
                            <div className="quiz-progress-section">
                                <span className="quiz-progress-title">Trainability Level:</span>
                                <div className="mini-progress-bars-container">
                                    {renderProgressBar(quizResult.train)}
                                </div>
                            </div>

                            <div className="quiz-progress-section">
                                <span className="quiz-progress-title">Energy Level:</span>
                                <div className="mini-progress-bars-container">
                                    {renderProgressBar(quizResult.energy)}
                                </div>
                            </div>
                            <div className="quiz-progress-section">
                                <span className="quiz-progress-title">Barking Level:</span>
                                <div className="mini-progress-bars-container">
                                    {renderProgressBar(quizResult.vocal)}
                                </div>
                            </div>
                            <div className="quiz-progress-section">
                                <span className="quiz-progress-title">Mental Stimulation Needs:</span>
                                <div className="mini-progress-bars-container">
                                    {renderProgressBar(quizResult.mentalStim)}
                                    {/* <br /> <br /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-4">
                    <Link to="/dogs/quiz" className="btn btn-dark">Retake Quiz</Link>
                </div>
            </main>

        </>
    )
}
