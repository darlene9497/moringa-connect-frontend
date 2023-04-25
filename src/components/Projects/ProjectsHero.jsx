import React from 'react'
import './Projects.css'
export default function ProjectsHero() {
    return (
        <div className="project-hero">
          <div className="overlay-text">
              <p className='subheading' id="project-details" style={{marginTop: '1em'}}>
                Projects
            </p>
            {/* <a class="btn btn-primary" href="/alumni" role="button" style={{textTransform: 'capitalize', color: '#FF5C33', backgroundColor: 'rgba(0, 0, 77, 0.8)',
                 borderRadius: '20px', fontSize: '20px', fontWeight: 'bold', width: '100%', height: '5em'}}>
                 Explore upcoming projects</a> */}
          </div>
        </div>
      );
}
