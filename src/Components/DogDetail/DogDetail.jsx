import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './DogDetail.css'
import { toolTipData } from './ToolTipData';




export default function DogDetail({ dog, handleDelete, setDog }) {
  const [editFormIsOpen, setEditFormIsOpen] = useState(false)

  useEffect(() => {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new window.bootstrap.Tooltip(tooltipTriggerEl);
    });
  }, []);

  const renderProgressBar = (label, value, tooltipText) => {
    const maxScore = 5;


    const bars = Array.from({ length: maxScore }, (_, index) => (
      <div
        key={index}
        className={`mini-progress-bar ${index < value ? 'filled' : ''}`}
      ></div>
    ));



    return (
      <div className="progress-section">
        <div className="progress-text">
          <span
            className="bi bi-info-circle text-dark custom-tooltip"
            data-bs-toggle="tooltip"
            data-bs-placement="left"
            title={tooltipText}
          ></span>
          <span className="progress-title">{label}:</span>
          <div className="mini-progress-bars-container">{bars}</div>
        </div>
      </div>
    );
  };




  return (
    <div className="container mt-5 detail-container">
      <h1 className="dog-breed-title">{dog.breed}</h1>
      {/* <div className="dog-image">
        <img src={dog.image} alt={dog.breed} />
      </div> */}
      <div className="dog-about lead mb-5">
        <p>{dog.about}</p>
      </div>
      <div className="row text-center dog-info-row justify-content-center">
        <div className="col-md-5 mb-4">
          <div className="card card-fluid dog-card">
            <div className="card-body">
              <h4 className="dog-card-title">Weight:</h4>
              <h5 className="dog-card-text">{dog.sizeActual}</h5>
            </div>
          </div>
        </div>
        <div className="col-md-5 mb-4">
          <div className="card card-fluid dog-card">
            <div className="card-body">
              <h4 className="dog-card-title">Coat:</h4>
              <h5 className="dog-card-text">{dog.coatType}, {dog.coatLength}</h5>
            </div>
          </div>
        </div>
        {/* <div className="col-md-4 mb-4">
          <div className="card card-fluid dog-card">
            <div className="card-body">
              <h4 className="dog-card-title">Coat Length:</h4>
              <h5 className="card-text">{dog.coatLength}</h5>
            </div>
          </div>
        </div> */}
      </div>
      <div className="row m-2">
        <div className="col-md-6">
          <div className="dog-progressbar">
            {renderProgressBar('Affectionate with Family', dog.affection, toolTipData.affection)}
            {renderProgressBar('Good With Children', dog.children, toolTipData.children)}
            {renderProgressBar('Good With Other Dogs', dog.otherDogs, toolTipData.otherDogs)}
            {renderProgressBar('Shedding Level', dog.shed, toolTipData.shed)}
            {renderProgressBar('Drooling Level', dog.drool, toolTipData.drool)}
            {renderProgressBar('Coat Grooming Frequency', dog.groom, toolTipData.groom)}
            {renderProgressBar('Openness to Strangers', dog.strangers, toolTipData.strangers)}
          </div>
        </div>

        <div className="col-md-6">
          <div className="dog-progressbar">
            {renderProgressBar('Playfulness Level', dog.play, toolTipData.play)}
            {renderProgressBar('Watchdog/Protective Nature', dog.protect, toolTipData.protect)}
            {renderProgressBar('Adaptivity Level', dog.adapt, toolTipData.adapt)}
            {renderProgressBar('Trainability Level', dog.train, toolTipData.train)}
            {renderProgressBar('Energy Level', dog.energy, toolTipData.energy)}
            {renderProgressBar('Barking Level', dog.vocal, toolTipData.vocal)}
            {renderProgressBar('Mental Stimulation Needs', dog.mentalStim, toolTipData.mentalStim)}
          </div>
        </div>
      </div> <br />
      <div className="button-section">
        <Link to={`/dogs/${dog._id}/edit`}>
          <button className="btn btn-dark" >Edit {dog.breed}</button>
        </Link>
        <button className="btn btn-danger me-2" onClick={handleDelete}>Delete {dog.breed}</button>

      </div>
    </div>
  );
}