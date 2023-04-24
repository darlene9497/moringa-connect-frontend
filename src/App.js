import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import NavBar from './components/Navbar/NavBar';
import Footer from './components/Footer/Footer';
import Demo from './components/Demo';
import Chapters from './components/community/Chapters';
import Alumni from './components/community/Alumni';
import Mentor from './components/community/Mentor';
import Projects from './components/Projects/Projects';

export default function App() {
  const [userSignedIn, setUserSignedIn] = useState(false);
 

  useEffect(()=>{
    fetch('/me')
    .then((res)=>{
      if(res.ok){
        
        res.json().then((user) => {
          setUserSignedIn(user)
        })
      }
    })
  },[])

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Demo />} />
        <Route path='/chapters' element={<Chapters />} />
        <Route path='/chapters/alumni' element={<Alumni />} />
        <Route path='/mentor' element={<Mentor />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
