import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import NavBar from './components/Navbar/NavBar';
import Footer from './components/Footer/Footer';
import Demo from './components/Demo';
import Home from './components/Home/Home'
import Categories from './components/Membership/Categories';
import Benefits from './components/Membership/Benefits';
import History from './components/History/History';

export default function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/' element={<Demo />} />
      <Route path='/home/#history' element={<History />} />
      <Route path='/Membership/#Membership Categories' element={<Categories/>} />
      <Route path='/Membership/#Membership Benefits' element={<Benefits/>} />
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}


