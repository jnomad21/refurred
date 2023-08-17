import { useLocation } from "react-router-dom";
import { dogsIndexRequest, deleteDogRequest } from '../../utilities/dogs-api';
import { useEffect, useState } from 'react';
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
    
    return(
        <>
        <main className="quiz-result-main">
        {topScoringDogs.map((entry, index) => (
                    <div key={index}>
                        {index === 0 ? (
                            <>
                            <h2 className="winner-dog">We've re<span className="furr">furr</span>ed this breed: {entry.dog.breed}.</h2>
                            <br />
                            <h3>Also, strongly consider the following breeds:</h3>
                            </>
                        ) : (
                            <h4>{entry.dog.breed}</h4>
                        )}
                        
                    </div>
                ))}
                <br />
                <br />
    <div>
        <h3>User Quiz Results</h3>
        <h4>Size Group: {quizResult.sizeGroup}</h4>
        <h4>Affection: {quizResult.affection}</h4>
        <h4>Children: {quizResult.children}</h4>
        <h4>Other Dogs: {quizResult.otherDogs}</h4>
        <h4>Shedding Level: {quizResult.shed}</h4>
        <h4>Grooming Requirement: {quizResult.groom}</h4>
        <h4>Drool Level: {quizResult.drool}</h4>
        <h4>Oppenness to Strangers: {quizResult.strangers}</h4>
        <h4>Playfulness Level: {quizResult.play}</h4>
        <h4>Watchdog/Protection Level: {quizResult.protect}</h4>
        <h4>Adaptability Level: {quizResult.adapt}</h4>
        <h4>Trainability Level: {quizResult.train}</h4>
        <h4>Energy Level: {quizResult.energy}</h4>
        <h4>Vocalility/Barking Level: {quizResult.vocal}</h4>
        <h4>Mental Stimulation Needs: {quizResult.mentalStim}</h4>
        </div>

        </main>
        
        </>
    )
}
