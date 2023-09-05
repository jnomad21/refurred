import React, { useState } from "react";
import QuizForm from "../../Components/QuizForm/QuizForm";
import { Link } from 'react-router-dom';
import './QuizPage.css'

export default function QuizPage(quiz, setQuizForm) {
    const [quizFormIsOpen, setQuizFormIsOpen] = useState(false);

    function toggleQuizForm() {
        setQuizFormIsOpen((prevState) => !prevState);
    }


    return (
        <>

            <main className="quiz-page">

                {!quizFormIsOpen && (

                    <div className="hero-video-quiz">
                        <video autoPlay loop muted className="custom-video" src="/images/temp-video.mp4" type="video/mp4" alt="Hero-Quiz" width="100%" height="100%" />
                        <div className="hero-text-quiz-overlay">

                            <div className="container d-flex flex-column justify-content-center align-items-center h-100">
                                <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
                                    <div className="col d-flex flex-column align-items-center text-center gap-2">
                                        <h3 className="fw-bold quiz-h1">Find Your Perfect Breed</h3>
                                        <Link to="#" onClick={toggleQuizForm} className="quiz-button btn btn-outline-warning btn-lg">Start Quiz
                                        </Link>
                                    </div>

                                    <div className="col">
                                        <div className="row row-cols-1 row-cols-sm-2 g-4">
                                        <div className="col d-flex flex-column gap-2">
                                                <div className="feature-icon-small d-inline-flex align-items-center justify-content-center">
                                                    <i className="fa-solid fa-paw fa-xl" style={{ color: "orange" }}></i>
                                                    </div>
                                                <h4 className="fw-semibold mb-0 ">A Pawsitive Step
                                                </h4>
                                                <p className="text-body-secondary lead quiz-p">Whether you're looking for an active outdoor companion or an indoor friend, this quiz will help you make an educated choice</p>
                                            </div>
                                            <div className="col d-flex flex-column gap-2">
                                                <div className="feature-icon-small d-inline-flex align-items-center justify-content-center">
                                                <i className="fa-solid fa-bone fa-xl" style={{ color: "orange" }}></i>
                                                </div>
                                                <h4 className="fw-semibold mb-0">Your Ideal Companion</h4>
                                                <p className="text-body-secondary lead quiz-p">Taking into account your preferences and lifestyle, we'll match you with a dog breed that's tailor-made for you</p>
                                            </div>

                                            <div className="col d-flex flex-column gap-2">
                                                <div className="feature-icon-small d-inline-flex align-items-center justify-content-center">
                                                    <i className="fa-solid fa-dog fa-xl" style={{ color: "orange" }}></i>
                                                </div>
                                                <h4 className="fw-semibold mb-0">Choose Wisely
                                                </h4>
                                                <p className="text-body-secondary lead quiz-p">Each breed recommendation will come with a more detailed description of the breed's characteristics and traits</p>
                                            </div>

                                            <div className="col d-flex flex-column gap-2">
                                                <div className="feature-icon-small d-inline-flex align-items-center justify-content-center">
                                                <i className="fa-solid fa-house fa-xl" style={{ color: "orange" }}></i>
                                                </div>
                                                <h4 className="fw-semibold mb-0">A Furrever Family
                                                </h4>
                                                <p className="text-body-secondary lead quiz-p">A valuable tool to assist you in finding the right dog breed that will be a loving and harmonious addition to your family</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                )}
            </main>
            {quizFormIsOpen && (
                <QuizForm
                    quiz={quiz}
                    setQuiz={setQuizForm}
                    setQuizFormIsOpen={setQuizFormIsOpen}
                />
            )}
        </>
    );
}