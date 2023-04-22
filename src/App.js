import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import NavBar from './components/Navbar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home'
import Categories from './components/Membership/Categories';
import Benefits from './components/Membership/Benefits';
import SignUp from './components/signup/signup';
import LoginForm from './components/login/loginForm';
// import Alumni from './components/community/Alumni';
import Projects from './components/Projects/Projects';
import Community from './components/community/Community';
import EventsA from './components/community/EventsA';
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
      <Route path='/' element={<Home />}/>
      <Route path='/Membership/#Membership Categories' element={<Categories/>} />
      <Route path='/Membership/#Membership Benefits' element={<Benefits/>} />
      <Route path='/signup' element={< SignUp setUserSignedIn={setUserSignedIn} />} />
      <Route path='/login' element={<LoginForm userSignedIn={userSignedIn} setUserSignedIn={setUserSignedIn} />} />
      {/* <Route path='/alumni' element={<Alumni />} /> */}
      <Route path='/projects' element={<Projects />} />
      <Route path='/community' element={<Community />} />
      {/* demo community events links */}
      <Route path='/community/#events' element={<Community />} />
      <Route path='/community/eventsa' element={<EventsA />} />      
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}
