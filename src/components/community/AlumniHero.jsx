import React from "react";
import './Community.css'   

const BackgroundImagePage = () => {
  return (
    <div className="bg-2">
      <div className="overlay-text">
        <p className='subheading' id="alumni-details">
          {`Welcome to our Community!`.split(' ').map((word, index) => (
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
