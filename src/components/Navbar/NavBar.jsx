import React from 'react';
import { Link, Outlet } from "react-router-dom";
import Profile from '../Profile/Profile'
import './Navbar.css'

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="d-flex align-items-center" style={{ marginLeft: '4rem' }}>
            <Link to='/' className="nav-link active">
              <img className="logo me-4 mr-4" alt="logo"
                src='https://moringaschool.com/wp-content/themes/moringa/public/images/logo.png'
                height='70'
                loading='lazy'
                id='m-logo'
              />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ marginRight: '4rem', fontSize: "24px" }}>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item ">
                <Link to="/alumni" className="nav-link active me-4" aria-current="page" style={{ color: '#00004d' }}>
                  Alumni
                </Link>
              </li>
              <li className="nav-item ">
                <Link to="/community" className="nav-link active me-4" aria-current="page" style={{ color: '#ff5c33' }}>
                  Community
                </Link>
              </li>
              <li className="nav-item ">
                <Link to="/projects" className="nav-link active me-4" aria-current="page" style={{ color: '#00004d' }}>
                  Projects
                </Link>
              </li>
              <li className="nav-item mt-6">
                  <Profile />
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;