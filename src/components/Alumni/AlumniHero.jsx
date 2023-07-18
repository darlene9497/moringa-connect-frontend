import React, { useContext } from "react";
import { Link } from "react-router-dom";
import alumniImage from "../../assets/alumni-image.jpeg";
import './Alumni.css'
import { AuthContext } from "../AuthContext/AuthContext";

function AlumniHero() {
  const {user} = useContext(AuthContext)
  const isLoggedIn = sessionStorage.getItem("jwtToken")

    return (
      <div className="hero">
        <img src={alumniImage} alt="Alumni Network" className="hero-image" />
        <div className="hero-content">
          <p>Connect with fellow alumni, find new opportunities, and stay updated with the latest news.</p>
          <div className="buttons">
            {
              isLoggedIn ? (
                <h3>Hi, {user && user.first_name}!</h3>
              ):(
                <>
                  <Link to="/login" className="btn">Log In</Link>
                  <Link to="/signup" className="btn">Sign Up</Link>
                </>
              )
            }
          </div>
        </div>
      </div>
    );
}

export default AlumniHero;
