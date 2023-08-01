import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
// import { getUser } from '../../utilities/users-service';
import HomePage from '../HomePage/HomePage';
import NewDogPage from '../NewDogPage/NewDogPage';
import NavBar from '../../Components/NavBar/NavBar';
import './App.css';

export default function App() {
  // const [user, setUser] = useState(getUser());


  return (
    <>
    <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dogs/new" element={<NewDogPage />} />
      </Routes>
    </>
  );
}


