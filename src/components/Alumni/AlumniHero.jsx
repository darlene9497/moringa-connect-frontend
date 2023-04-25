import React from "react";
import { Link } from "react-router-dom";
import alumniImage from "../../assets/alumni-image.png";
import './Alumni.css'

function AlumniHero() {
    return (
      <div className="hero">
        <img src={alumniImage} alt="Alumni Network" className="hero-image" />
        <div className="hero-content">
          <p>Connect with fellow alumni, find new opportunities, and stay updated with the latest news.</p>
          <div className="buttons">
            <Link to="/login" className="btn">Log In</Link>
            <Link to="/signup" className="btn">Sign Up</Link>
          </div>
        </div>
      </div>
    );
}

export default AlumniHero;
