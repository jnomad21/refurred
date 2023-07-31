import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
// import { getUser } from '../../utilities/users-service';
import NewDogPage from '../NewDogPage/NewDogPage';
import NavBar from '../../Components/NavBar';
import './App.css';

export default function App() {
  // const [user, setUser] = useState(getUser());


  return (
    <>
    <NavBar/>
    <h1>Pet App</h1>
      <Routes>
        <Route path="/dogs/new" element={<NewDogPage />} />
      </Routes>
    </>
  );
}


