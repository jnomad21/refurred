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

        let affectionScore = 0
        if (quizResult.affection == dog.affection) {
            affectionScore += 5;
        } else if (Math.abs(quizResult.affection - dog.affection) == 1) {
            affectionScore += 3;
        } else if (Math.abs(quizResult.affection - dog.affection) == 2) {
            affectionScore += 2;
        } else if (Math.abs(quizResult.affection - dog.affection) == 3) {
            affectionScore += 1;
        }
        if (quizResult.pri1==="affection1"){
            affectionScore = affectionScore *2.5
        } else if(quizResult.pri2==="affection2"){
            affectionScore = affectionScore *2
        } else if(quizResult.pri3==="affection3"){
            affectionScore = affectionScore *1.5
        }
        dogScore=dogScore+affectionScore

        let sizeScore = 0
        if (quizResult.sizeGroup == dog.sizeGroup) {
            sizeScore += 6;
        } else if (Math.abs(quizResult.sizeGroup - dog.sizeGroup) == 1) {
            sizeScore += 4;
        } else if (Math.abs(quizResult.sizeGroup - dog.sizeGroup) == 2) {
            sizeScore += 3;
        } else if (Math.abs(quizResult.sizeGroup - dog.sizeGroup) == 3) {
            sizeScore += 2;
        }else if (Math.abs(quizResult.sizeGroup - dog.sizeGroup) == 4) {
            sizeScore += 1;
        }
        if (quizResult.pri1==="size1"){
            sizeScore = sizeScore *2.5
        } else if(quizResult.pri2==="size2"){
            sizeScore = sizeScore *2
        } else if(quizResult.pri3==="size3"){
            sizeScore = sizeScore *1.5
        }
        dogScore=dogScore+sizeScore

        let adaptScore = 0
        if (quizResult.adapt == dog.adapt) {
            adaptScore += 5;
        } else if (Math.abs(quizResult.adapt - dog.adapt) == 1) {
            adaptScore += 3;
        } else if (Math.abs(quizResult.adapt - dog.adapt) == 2) {
            adaptScore += 2;
        } else if (Math.abs(quizResult.adapt - dog.adapt) == 3) {
            adaptScore += 1;
        }
        if (quizResult.pri1==="adapt1"){
            adaptScore = adaptScore *2.5
        } else if(quizResult.pri2==="adapt2"){
            adaptScore = adaptScore *2
        } else if(quizResult.pri3==="adapt3"){
            adaptScore = adaptScore *1.5
        }
        dogScore=dogScore+adaptScore

        let childrenScore = 0
        if (quizResult.children == dog.children) {
            childrenScore += 5;
        } else if (Math.abs(quizResult.children - dog.children) == 1) {
            childrenScore += 3;
        } else if (Math.abs(quizResult.children - dog.children) == 2) {
            childrenScore += 2;
        } else if (Math.abs(quizResult.children - dog.children) == 3) {
            childrenScore += 1;
        }
        if (quizResult.pri1==="children1"){
            childrenScore = childrenScore *2.5
        } else if(quizResult.pri2==="children2"){
            childrenScore = childrenScore *2
        } else if(quizResult.pri3==="children3"){
            childrenScore = childrenScore *1.5
        }
        dogScore=dogScore+childrenScore

        let droolScore=0
        if (quizResult.drool == dog.drool) {
            droolScore += 5;
        } else if (Math.abs(quizResult.drool - dog.drool) == 1) {
            droolScore += 3;
        } else if (Math.abs(quizResult.drool - dog.drool) == 2) {
            droolScore += 2;
        } else if (Math.abs(quizResult.drool - dog.drool) == 3) {
            droolScore += 1;
        }
        if (quizResult.pri1==="drool1"){
            droolScore = droolScore *2.5
        } else if(quizResult.pri2==="drool2"){
            droolScore = droolScore *2
        } else if(quizResult.pri3==="drool3"){
            droolScore = droolScore *1.5
        }
        dogScore=dogScore+droolScore

        let energyScore=0
        if (quizResult.energy == dog.energy) {
            energyScore += 5;
        } else if (Math.abs(quizResult.energy - dog.energy) == 1) {
            energyScore += 3;
        } else if (Math.abs(quizResult.energy - dog.energy) == 2) {
            energyScore += 2;
        } else if (Math.abs(quizResult.energy - dog.energy) == 3) {
            energyScore += 1;
        }if (quizResult.pri1==="energy1"){
            energyScore = energyScore *2.5
        } else if(quizResult.pri2==="energy2"){
            energyScore = energyScore *2
        } else if(quizResult.pri3==="energy3"){
            energyScore = energyScore *1.5
        }
        dogScore=dogScore+energyScore

        let groomScore = 0
        if (quizResult.groom == dog.groom) {
            groomScore += 5;
        } else if (Math.abs(quizResult.groom - dog.groom) == 1) {
            groomScore += 3;
        } else if (Math.abs(quizResult.groom - dog.groom) == 2) {
            groomScore += 2;
        } else if (Math.abs(quizResult.groom - dog.groom) == 3) {
            groomScore += 1;
        }
        if (quizResult.pri1==="groom1"){
            groomScore = groomScore *2.5
        } else if(quizResult.pri2==="groom2"){
            groomScore = groomScore *2
        } else if(quizResult.pri3==="groom3"){
            groomScore = groomScore *1.5
        }
        dogScore=dogScore+groomScore

        let mentalScore = 0
        if (quizResult.mentalStim == dog.mentalStim) {
            mentalScore += 5;
        } else if (Math.abs(quizResult.mentalStim - dog.mentalStim) == 1) {
            mentalScore += 3;
        } else if (Math.abs(quizResult.mentalStim - dog.mentalStim) == 2) {
            mentalScore += 2;
        } else if (Math.abs(quizResult.mentalStim - dog.mentalStim) == 3) {
            mentalScore += 1;
        }
        if (quizResult.pri1==="mentalStim1"){
            mentalScore = mentalScore *2.5
        } else if(quizResult.pri2==="mentalStim2"){
            mentalScore = mentalScore *2
        } else if(quizResult.pri3==="mentalStim3"){
            mentalScore = mentalScore *1.5
        }
        dogScore=dogScore+mentalScore

        let otherDogsScore = 0
        if (quizResult.otherDogs == dog.otherDogs) {
            otherDogsScore += 5;
        } else if (Math.abs(quizResult.otherDogs - dog.otherDogs) == 1) {
            otherDogsScore += 3;
        } else if (Math.abs(quizResult.otherDogs - dog.otherDogs) == 2) {
            otherDogsScore += 2;
        } else if (Math.abs(quizResult.otherDogs - dog.otherDogs) == 3) {
            otherDogsScore += 1;
        }
        if (quizResult.pri1==="otherDogs1"){
            otherDogsScore = otherDogsScore *2.5
        } else if(quizResult.pri2==="otherDogs2"){
            otherDogsScore = otherDogsScore *2
        } else if(quizResult.pri3==="otherDogs3"){
            otherDogsScore = otherDogsScore *1.5
        }
        dogScore=dogScore+otherDogsScore

        let playScore = 0
        if (quizResult.play == dog.play) {
            playScore += 5;
        } else if (Math.abs(quizResult.play - dog.play) == 1) {
            playScore += 3;
        } else if (Math.abs(quizResult.play - dog.play) == 2) {
            playScore += 2;
        } else if (Math.abs(quizResult.play - dog.play) == 3) {
            playScore += 1;
        }
        if (quizResult.pri1==="play1"){
            playScore = playScore *2.5
        } else if(quizResult.pri2==="play2"){
            playScore = playScore *2
        } else if(quizResult.pri3==="play3"){
            playScore = playScore *1.5
        }
        dogScore=dogScore+playScore

        let protectScore = 0
        if (quizResult.protect == dog.protect) {
            protectScore += 5;
        } else if (Math.abs(quizResult.protect - dog.protect) == 1) {
            protectScore += 3;
        } else if (Math.abs(quizResult.protect - dog.protect) == 2) {
            protectScore += 2;
        } else if (Math.abs(quizResult.protect - dog.protect) == 3) {
            protectScore += 1;
        }
        if (quizResult.pri1==="protect1"){
            protectScore = protectScore *2.5
        } else if(quizResult.pri2==="protect2"){
            protectScore = protectScore *2
        } else if(quizResult.pri3==="protect3"){
            protectScore = protectScore *1.5
        }
        dogScore=dogScore+protectScore

        let shedScore =0
        if (quizResult.shed == dog.shed) {
            shedScore += 5;
        } else if (Math.abs(quizResult.shed - dog.shed) == 1) {
            shedScore += 3;
        } else if (Math.abs(quizResult.shed - dog.shed) == 2) {
            shedScore += 2;
        } else if (Math.abs(quizResult.shed - dog.shed) == 3) {
            shedScore += 1;
        }
        if (quizResult.pri1==="shed1"){
            shedScore = shedScore *2.5
        } else if(quizResult.pri2==="shed2"){
            shedScore = shedScore *2
        } else if(quizResult.pri3==="shed3"){
            shedScore = shedScore *1.5
        }
        dogScore=dogScore+shedScore

        let strangersScore = 0
        if (quizResult.strangers == dog.strangers) {
            strangersScore += 5;
        } else if (Math.abs(quizResult.strangers - dog.strangers) == 1) {
            strangersScore += 3;
        } else if (Math.abs(quizResult.strangers - dog.strangers) == 2) {
            strangersScore += 2;
        } else if (Math.abs(quizResult.strangers - dog.strangers) == 3) {
            strangersScore += 1;
        }
        if (quizResult.pri1==="strangers1"){
            strangersScore = strangersScore *2.5
        } else if(quizResult.pri2==="strangers2"){
            strangersScore = strangersScore *2
        } else if(quizResult.pri3==="strangers3"){
            strangersScore = strangersScore *1.5
        }
        dogScore=dogScore+strangersScore

        let trainScore = 0
        if (quizResult.train == dog.train) {
            trainScore += 5;
        } else if (Math.abs(quizResult.train - dog.train) == 1) {
            trainScore += 3;
        } else if (Math.abs(quizResult.train - dog.train) == 2) {
            trainScore += 2;
        } else if (Math.abs(quizResult.train - dog.train) == 3) {
            trainScore += 1;
        }
        if (quizResult.pri1==="train1"){
            trainScore = trainScore *2.5
        } else if(quizResult.pri2==="train2"){
            trainScore = trainScore *2
        } else if(quizResult.pri3==="train3"){
            trainScore = trainScore *1.5
        }
        dogScore=dogScore+trainScore

        let vocalScore = 0
        if (quizResult.vocal == dog.vocal) {
            vocalScore += 5;
        } else if (Math.abs(quizResult.vocal - dog.vocal) == 1) {
            vocalScore += 3;
        } else if (Math.abs(quizResult.vocal - dog.vocal) == 2) {
            vocalScore += 2;
        } else if (Math.abs(quizResult.vocal - dog.vocal) == 3) {
            vocalScore += 1;
        }
        if (quizResult.pri1==="vocal1"){
            vocalScore = vocalScore *2.5
        } else if(quizResult.pri2==="vocal2"){
            vocalScore = vocalScore *2
        } else if(quizResult.pri3==="vocal3"){
            vocalScore = vocalScore *1.5
        }
        dogScore=dogScore+vocalScore

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
