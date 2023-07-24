import React, { createContext, useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import NavBar from './components/Navbar/NavBar';
import Footer from './components/Footer/Footer';
import Alumni from './components/Alumni/Alumni';
import Projects from './components/Projects/Projects';
import Community from './components/community/Community';
import EventsA from './components/community/EventsA';
import SignUp from './components/signup/signup';
import LoginForm from './components/login/loginForm';
import Home from './components/Home/Home';
import Search from './components/Search/Search';
import DetailForm from './components/DetailForm/DetailForm';
import Admin from './components/Admin/Admin';
import Events from './components/Admin/Events';
import ProjectList from './components/Admin/ProjectList';
import Users from './components/Admin/Users'
import EditDetail from './components/DetailForm/EditDetail';
import Post from './components/Posts/Post';
import Signup from './components/signup/signup';
import Login from './components/login/loginForm';
import AuthProvider from './components/AuthContext/AuthContext';
import AllEvents from './components/Events/allevents';
import EventDetails from './components/Events/EventDetails';
import EditEvent from './components/Events/EditEvent';
import EditProject from './components/Projects/EditProject';
export const AppContext = createContext(null)

export default function App() {

  const [userSignedIn, setUserSignedIn] = useState(false);
 

  useEffect(()=>{
    fetch('http://localhost:3000/me')
    .then((res)=>{
      if(res.ok){
        
        res.json().then((user) => {
          console.log(user)
          setUserSignedIn(user)
        })
      }
    })
  },[])



  // const user = JSON.parse(sessionStorage.getItem('user'));
  // const isLoggedIn = sessionStorage.getItem('jwtToken') ? true : false;
  // // const navigate = useNavigate();
  // // eslint-disable-next-line no-unused-vars
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   const pathname = window.location.pathname;
  
  //   // check if the user is authenticated, except for the signup page
  //   if (isLoggedIn && pathname !== '/signup') {
  //     setLoading(false);
  //   } else if (!isLoggedIn && pathname !== '/login' && pathname !== '/signup') {
  //     // navigate('/login', { replace: true });
  //     setLoading(false);
  //   } else {
  //     setLoading(false);
  //   }
  // }, [isLoggedIn]);

  return (
    <BrowserRouter>
      <AuthProvider>
        <NavBar userSignedIn={userSignedIn} />
        <Routes>
          <Route path='/alumni' element={<Alumni />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/projects/:id/edit' element={<EditProject />} />
          <Route path='/' element={<Home />}/>
          <Route path='/signup' element={< Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/community' element={<Community />} />
          <Route path='/community/eventsa' element={<EventsA />} />  
          <Route path='/search-alumni' element={<Search />} />
          <Route path='/creat-profile' element={<DetailForm />} /> 
          <Route path='/allevents' element={<AllEvents />} /> 
          <Route path='/allevents/:id' element={<EventDetails />} /> 
          <Route path='/allevents/:id/edit' element={<EditEvent />}  />
          <Route path='/admin' element={<Admin />} /> 
          <Route path='/eventlist' element={<Events />} /> 
          <Route path='/projectlist' element={<ProjectList />} /> 
          <Route path='/userlist' element={<Users />} /> 
          <Route path='editprofile' element={<EditDetail />} />
          <Route path='chat' element={<Post />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
}
