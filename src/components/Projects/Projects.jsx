import React from 'react'
import ProjectsHero from './ProjectsHero'

export default function Projects() {
  return (
    <div className='projects' style={{marginBottom: '30em'}}>
      <ProjectsHero />
      <div className='cards'> 
      <h5 style={{color: '#ff5c33', fontWeight: 'bold', fontSize: '34px', paddingTop: '4em', paddingLeft: '4em'}}>Projects</h5>
        <div class="row row-cols-1 row-cols-md-3 g-4" id='project-cards'>
          <div class="col">
            <div class="card h-100">
              <img src="https://bit.ly/3NbUQjE" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="https://bit.ly/3NbUQjE" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="https://bit.ly/3NbUQjE" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
          {/* <div class="col">
            <div class="card h-100">
              <img src="https://bit.ly/3NbUQjE" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>      
    </div>
  )
}
