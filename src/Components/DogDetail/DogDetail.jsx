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

  const renderEmojisWithOpacity = (label, value, tooltipText) => {
    const maxScore = 5;
    const emojis = Array.from({ length: maxScore }, (_, index) => (
      <span
        key={index}
        style={{
          opacity: index < value ? 1 : 0.2,
          marginRight: '5px',
          fontSize: '1.5rem',
        }}
      >
        🐶
      </span>
    ));

    return (
      <div className="emoji-section">
        <div className="emoji-title">
          <span
            className="bi bi-info-circle text-dark custom-tooltip"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title={tooltipText}
          ></span>
          <h4>
            {label}:
          </h4>
          <span className="emoji-container">{emojis}</span>
        </div>
      </div>
    );
  };



  return (
    <div className="container mt-5">
      <h1 className="dog-breed-title">{dog.breed}</h1>
      <div className="dog-about lead mb-4">
        <p>{dog.about}</p>
      </div>
      <div className="row text-center">
        <div className="col-md-4">
          <div className="dog-info">
            <h4>Size: {dog.sizeActual}</h4>
          </div>
        </div>
        <div className="col-md-4">
          <div className="dog-info">
            <h4>Coat Type: {dog.coatType}</h4>
          </div>
        </div>
        <div className="col-md-4">
          <div className="dog-info">
            <h4>Coat Length: {dog.coatLength}</h4>
          </div>
        </div>
      </div>
      <div className="row m-2">
        <div className="col-md-6">
          <div className="dog-emojis">
            {renderEmojisWithOpacity('Affectionate with Family', dog.affection, toolTipData.affection)}
            {renderEmojisWithOpacity('Good With Children', dog.children, toolTipData.children)}
            {renderEmojisWithOpacity('Good With Other Dogs', dog.otherDogs, toolTipData.otherDogs)}
            {renderEmojisWithOpacity('Shedding Level', dog.shed, toolTipData.shed)}
            {renderEmojisWithOpacity('Drooling Level', dog.drool, toolTipData.drool)}
            {renderEmojisWithOpacity('Coat Grooming Frequency', dog.groom, toolTipData.groom)}
            {renderEmojisWithOpacity('Openness to Strangers', dog.strangers, toolTipData.strangers)}
          </div>
        </div>

        <div className="col-md-6">
          <div className="dog-emojis">
            {renderEmojisWithOpacity('Playfulness Level', dog.play, toolTipData.play)}
            {renderEmojisWithOpacity('Watchdog/Protective Nature', dog.protect, toolTipData.protect)}
            {renderEmojisWithOpacity('Adaptivity Level', dog.adapt, toolTipData.adapt)}
            {renderEmojisWithOpacity('Trainability Level', dog.train, toolTipData.train)}
            {renderEmojisWithOpacity('Energy Level', dog.energy, toolTipData.energy)}
            {renderEmojisWithOpacity('Barking Level', dog.vocal, toolTipData.vocal)}
            {renderEmojisWithOpacity('Mental Stimulation Needs', dog.mentalStim, toolTipData.mentalStim)}
          </div>
        </div>
      </div>
      <div className="button-section">
        <Link to={`/dogs/${dog._id}/edit`}>
          <button className="btn btn-dark" >Edit {dog.breed}</button>
        </Link>
        <button className="btn btn-danger me-2" onClick={handleDelete}>Delete {dog.breed}</button>

      </div>
    </div>
  );
}