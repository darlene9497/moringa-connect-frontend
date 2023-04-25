import React, { useContext } from "react";
import { themeContext } from "./Context";
import "./Stats.css";

const Stats = () => {
    const theme = useContext(themeContext);
    const darkMode = theme?.state?.darkMode;
    
    return (
      <div className="stats" id='stats'>
        <div className="achievement">
          <div className="circle" style={{color: darkMode?'var(--orange)':''}}>4000+</div>
          <span  style={{color: darkMode?'white':''}}>Enrolled </span>
          <span>Students</span>
        </div>
        <div className="achievement">
          <div className="circle" style={{color: darkMode?'var(--orange)':''}}>85%</div>
          <span  style={{color: darkMode?'white':''}}>Employment </span>
          <span>Rate</span>
        </div>
        <div className="achievement">
          <div className="circle" style={{color: darkMode?'var(--orange)':''}}>3000+</div>
          <span  style={{color: darkMode?'white':''}}><br/></span>
          <span>Graduates</span>
        </div>
        <div className="achievement">
          <div className="circle" style={{color: darkMode?'var(--orange)':''}}>95%</div>
          <span  style={{color: darkMode?'white':''}}>Approval </span>
          <span>Rating</span>
        </div>
        <div className="achievement">
          <div className="circle" style={{color: darkMode?'var(--orange)':''}}>300+</div>
          <span  style={{color: darkMode?'white':''}}>Employer </span>
          <span>Partners</span>
        </div>
      </div>
    );  
};

export default Stats;