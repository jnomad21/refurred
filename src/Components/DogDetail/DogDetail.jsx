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


    // const renderEmojisWithOpacity = (label, value, tooltipText) => {
    //   const maxScore = 5;
    //   const emojis = Array.from({ length: maxScore }, (_, index) => (
    //     <span
    //       key={index}
    //       style={{
    //         opacity: index < value ? 1 : 0.2,
    //         marginRight: '5px',
    //         fontSize: '1.5rem',
    //       }}
    //     >
    //       🐶
    //     </span>
    //   ));





    //   return (
    //     <div className="emoji-section">
    //       <div className="emoji-title">
    //         <span
    //           className="bi bi-info-circle text-dark custom-tooltip"
    //           data-bs-toggle="tooltip"
    //           data-bs-placement="top"
    //           title={tooltipText}
    //         ></span>
    //         <h4>
    //           {label}:
    //         </h4>
    //         <span className="emoji-container">{emojis}</span>
    //       </div>
    //     </div>
    //   );
    // };
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
      <div className="row text-center">
        <div className="col-md-4">
          <div className="dog-info">
            <h4>Size:</h4> <h5>{dog.sizeActual}</h5>
          </div>
        </div>
        <div className="col-md-4">
          <div className="dog-info">
            <h4>Coat Type:</h4> <h5>{dog.coatType}</h5>
          </div>
        </div>
        <div className="col-md-4">
          <div className="dog-info">
            <h4>Coat Length:</h4> <h5>{dog.coatLength}</h5>
          </div>
        </div>
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