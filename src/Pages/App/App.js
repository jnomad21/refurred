import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import { LoadScript } from '@react-google-maps/api';
import GoogleMaps from '../GoogleMaps/GoogleMaps';
import HomePage from '../HomePage/HomePage';
import NewDogPage from '../NewDogPage/NewDogPage';
import NavBar from '../../Components/NavBar/NavBar';
import AuthPage from '../AuthPage/AuthPage'
import './App.css';
import DogIndexPage from '../DogIndexPage/DogIndexPage';
import DogDetailPage from '../DogDetailPage/DogDetailPage'
import QuizPage from '../QuizPage/QuizPage';
import EditDogPage from '../EditDogPage/EditDogPage';

const googleKey = process.env.REACT_APP_GOOGLE;
export default function App() {
  const [user, setUser] = useState(getUser());


  return (
    <>
    <LoadScript googleMapsApiKey={googleKey}>
      <NavBar />
      <Routes>
        <Route path="/map" element={<GoogleMaps/>} />
        <Route path="/" element={<HomePage />} />
        <Route path="/dogs" element={<DogIndexPage />} />
        <Route path="/dogs/new" element={<NewDogPage />} />
        <Route path="/dogs/:dogId" element={<DogDetailPage />} />
        <Route path="/dogs/quiz" element={<QuizPage />} />
        <Route path="/dogs/auth" element={<AuthPage setUser={setUser} />} />
        <Route path="/dogs/:dogId/edit" element={<EditDogPage />} />
      </Routes>
    </LoadScript>
    </>
  );
}


