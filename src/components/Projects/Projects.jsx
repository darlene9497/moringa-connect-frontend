import {React, useState, useEffect} from 'react'
import ProjectsHero from './ProjectsHero'

export default function Projects() {
  const[projects, setProjects] = useState([]);
  useEffect( () =>{
    fetch('/projects')
    .then(res => res.json())
    .then(data =>  setProjects(data));
  }, [])
  return (
    <div className='projects' style={{marginBottom: '30em'}}>
      <ProjectsHero />
      <div>
      <div className='my-cards'> 
      <h5 style={{color: '#00004d', fontWeight: 'bold', fontSize: '38px', paddingTop: '4em', paddingLeft: '4em'}}>Projects</h5>
        <div class="row row-cols-1 row-cols-md-3 g-4">
        {projects.map((project) => (
          <div class="col">
            <div class="card h-150">
              {/* <img src="..." class="card-img-top" alt="..." /> */}
              <div class="card-body">
                <h5 class="card-title" style={{color: "#ff5c33", fontWeight: "bold", fontSize: "28px"}}>{project.name}</h5>
                <p class="card-text">{project.description}</p>
                <p class="card-text"><i class="fa-money" aria-hidden="true" style={{ color: '#007ACC' }}></i> Project Amount: {project.amount}</p>
                <p class="card-text"><i class="fa fa-calendar" aria-hidden="true" style={{ color: '#007ACC' }}></i> Starts: {project.start_date}</p>
                <p class="card-text"><i class="fa fa-hourglass-start fa-spin" aria-hidden="true" style={{ color: '#007ACC' }}></i> Ends: {project.end_date}</p>
                {/* <p class="card-text"><i class="fa-s fa-donate" aria-hidden="true" style={{ color: '#007ACC' }}></i> Donate</p> */}
                {/* <p class="card-text donate-text" style={{textAlign: "right"}}>
                  Donate 
                  <a href="https://example.com">
                      <img src="https://w7.pngwing.com/pngs/772/478/png-transparent-computer-icons-symbol-donation-share-icon-symbol-love-miscellaneous-hand-thumbnail.png" class="card-img-top" alt="..." width="50px" height="200" />
                  </a>
                </p> */}
              </div>
            </div>
          </div>
        ))}
      
        </div>
       </div>
      </div>      
    </div>
  )
}
