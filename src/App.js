import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import NavBar from './components/Navbar/NavBar';
import Footer from './components/Footer/Footer';
// import Demo from './components/Demo';
import Home from './components/Home/Home'
import Categories from './components/Membership/Categories';
import Benefits from './components/Membership/Benefits';
import History from './components/History/History';
import About from './components/About';
import Chapters from './components/community/Chapters';
import Alumni from './components/community/Alumni';
import Mentor from './components/community/Mentor';

export default function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />}/>
      {/* <Route path='/' element={<Demo />} /> */}
      <Route path='/about' element={<About />}/>
      <Route path='/home/#history' element={<History />} />
      <Route path='/Membership/#Membership Categories' element={<Categories/>} />
      <Route path='/Membership/#Membership Benefits' element={<Benefits/>} />
      <Route path='/chapters' element={<Chapters />} />
      <Route path='/chapters/alumni' element={<Alumni />} />
      <Route path='/mentor' element={<Mentor />} />
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