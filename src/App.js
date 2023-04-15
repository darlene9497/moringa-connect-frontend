// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import NavBar from './components/Navbar/NavBar';
import Footer from './components/Footer/Footer';
import Demo from './components/Demo';
import Home from './components/Home/Home'

export default function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/' element={<Demo />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}


