import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import NavBar from './components/Navbar/NavBar';
import Footer from './components/Footer/Footer';
// import Home
// import Demo from './components/Demo';
// import Chapters from './components/community/Chapters';
import Alumni from './components/community/Alumni';
// import Mentor from './components/community/Mentor';
import Projects from './components/Projects/Projects';
import Community from './components/community/Community';
import EventsA from './components/community/EventsA';
import SignUp from './components/signup/signup';
import LoginForm from './components/login/loginForm';
import Home from './components/Home/Home';
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
        {/* <Route path='/' element={<Demo />} /> */}
        {/* <Route path='/chapters' element={<Chapters />} /> */}
        <Route path='/alumni' element={<Alumni />} />
        {/* <Route path='/mentor' element={<Mentor />} /> */}
        <Route path='/projects' element={<Projects />} />
        <Route path='/' element={<Home />}/>
        {/* <Route path='/Membership/#Membership Categories' element={<Categories/>} />
        <Route path='/Membership/#Membership Benefits' element={<Benefits/>} /> */}
        <Route path='/signup' element={< SignUp setUserSignedIn={setUserSignedIn} />} />
        <Route path='/login' element={<LoginForm userSignedIn={userSignedIn} setUserSignedIn={setUserSignedIn} />} />
        <Route path='/community' element={<Community />} />
        <Route path='/community/eventsa' element={<EventsA />} />      
      </Routes>
     <Footer />
    </BrowserRouter>
  );
}
