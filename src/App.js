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
import Chapters from './components/community/Chapters';
import Alumni from './components/community/Alumni';
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
      <Route path='/' element={<Home />}/>
      <Route path='/Membership/#Membership Categories' element={<Categories/>} />
      <Route path='/Membership/#Membership Benefits' element={<Benefits/>} />
      <Route path='/signup' element={< SignUp setUserSignedIn={setUserSignedIn} />} />
      <Route path='/login' element={<LoginForm userSignedIn={userSignedIn} setUserSignedIn={setUserSignedIn} />} />
      <Route path='/community' element={<Chapters />} />
      <Route path='/alumni' element={<Alumni />} />
      <Route path='/projects' element={<Projects />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}


// import React from 'react';
// import './App.css';
// import { BrowserRouter, Route, Routes} from 'react-router-dom';
// import NavBar from './components/Navbar/NavBar';
// import Footer from './components/Footer/Footer';
// // import Demo from './components/Demo';
// import Home from './components/Home/Home'
// import Categories from './components/Membership/Categories';
// import Benefits from './components/Membership/Benefits';
// import History from './components/History/History';
// import About from './components/About';
// import Chapters from './components/community/Chapters';
// import Alumni from './components/community/Alumni';
// import Mentor from './components/community/Mentor';

// export default function App() {
//   return (
//     <BrowserRouter>
//     <NavBar />
//     <Routes>
//       <Route exact path='/' element={<Home />}/>
//       {/* <Route path='/' element={<Demo />} /> */}
//       <Route exact path='/about' element={<About />}/>
//       <Route exact path='/home/history' element={<History />} />
//       <Route exact path='membership categories' element={<Categories/>} />
//       <Route exact path='/membership benefits' element={<Benefits/>} />
//       <Route exact path='/chapters' element={<Chapters />} />
//       <Route exact path='/chapters/alumni' element={<Alumni />} />
//       <Route exact path='/mentor' element={<Mentor />} />
//     </Routes>
//     <Footer />
//     </BrowserRouter>
//   );
// }