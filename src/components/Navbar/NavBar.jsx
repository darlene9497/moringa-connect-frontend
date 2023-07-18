import React, { useContext } from 'react';
import { Link, NavLink, Outlet } from "react-router-dom";
import { AuthContext } from '../AuthContext/AuthContext';
import Profile from '../Profile/Profile'
import './Navbar.css'

const NavBar = () => {
  const { user, logout} = useContext(AuthContext)
  const isLoggedIn = sessionStorage.getItem("jwtToken")
  const handleLogout = ()=>{
      logout()
  }


  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="d-flex align-items-center" style={{ marginLeft: '4rem' }}>
            <NavLink to='/' className="nav-link active">
              <img className="logo me-4 mr-4" alt="logo"
                src='https://moringaschool.com/wp-content/themes/moringa/public/images/logo.png'
                height='70'
                loading='lazy'
                id='m-logo'
              />
            </NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ marginRight: '4rem', fontSize: "24px" }}>
            {
              isLoggedIn ? (
                <ul className="navbar-nav ms-auto">

                  <li className="nav-item ">
                    <NavLink to="/alumni" className="nav-link active me-4" aria-current="page" >
                      Alumni
                    </NavLink>
                  </li>
                  
                  <li className="nav-item ">
                    <NavLink to="/community" className="nav-link active me-4" aria-current="page" >
                      Community
                    </NavLink>
                  </li>
                  
                  <li className="nav-item ">
                    <NavLink to="/projects" className="nav-link active me-4" aria-current="page" >
                      Projects
                    </NavLink>
                  </li>
                  
                  <li className="nav-item ">
                    <NavLink to="/allevents" className="nav-link active me-4" aria-current="page" >
                      All Events
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    {
                      user && user.is_admin ? (
                        <NavLink to="/admin" className="nav-link active me-4" aria-current="page" >
                          Admin
                        </NavLink>
                      ):(
                        <></>
                      )
                    }
                    
                  </li>
                  
                  <li className="nav-item mb-3">
                    <button onClick={handleLogout} className='btn btn-warning'>logout</button>
                  </li>
                  
                </ul>
              ) : (
                <ul className="navbar-nav ms-auto">
                <li className="nav-item ">
                  <NavLink to="/alumni" className="nav-link active me-4" aria-current="page" >
                    Alumni
                  </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink to="/community" className="nav-link active me-4" aria-current="page" >
                    Community
                  </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink to="/projects" className="nav-link active me-4" aria-current="page" >
                    Projects
                  </NavLink>
                </li>
              </ul>
              )
            }
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;