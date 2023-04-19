// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import NavBar from './components/Navbar/NavBar';
import Footer from './components/Footer/Footer';
import Demo from './components/Demo';
import Chapters from './components/community/Chapters';
import Alumni from './components/community/Alumni';
import Mentor from './components/community/Mentor';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Demo />} />
        <Route path='/chapters' element={<Chapters />} />
        <Route path='/chapters/alumni' element={<Alumni />} />
        <Route path='/mentor' element={<Mentor />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
