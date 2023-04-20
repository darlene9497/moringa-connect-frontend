import React from "react";
import './Community.css'

const BackgroundImagePage = () => {
  return (
    <div className="bg">
      <div className="overlay-text">
        <h1>
          <span className="moringa">Moringa </span> 
          <span className="alumni">Alumni </span> 
          <span className="chapters">Chapters </span>
        </h1>
        <p className='subheading'>
          {`Welcome to our alumni chapter!`.split(' ').map((word, index) => (
            <span key={index} style={{ '--i': index }}>
              {` ${word} `}
            </span>
          ))}
        </p>

      </div>
    </div>
  );
};

export default BackgroundImagePage;
