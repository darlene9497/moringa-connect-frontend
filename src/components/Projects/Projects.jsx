import {React, useState, useEffect} from 'react'
import ProjectsHero from './ProjectsHero'
// // donation form
// import { FormEvent } from 'react';

export default function Projects() {
  const[projects, setProjects] = useState([]);
  
  useEffect( () =>{
    fetch('/projects')
    .then(res => res.json())
    .then(data =>  setProjects(data))
    .catch(error => console.error('Error fetching projects:', error));
  }, [])

  return (
    <div className='projects' style={{ overflowX: 'hidden'}}>
      <ProjectsHero />
      <div>
      <div style={{paddingTop:'5em', marginBottom: '5em', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div class=" w-75" style= {{ maxWidth: '60%', height: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderStyle: 'none'}}>
            <div class="row g-0"  style={{}}>
              <div class="col-md-4">
                <img src="https://cdn-icons-png.flaticon.com/512/4590/4590171.png" class="img-fluid rounded-start" alt="..." width='1000' height='1000' style={{}}/>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title" style={{color: "#00004d", fontWeight: "bold", fontSize: "33px", fontStyle: 'italic'}}>Contribute to upcoming projects</h5>
                  <p class="card-text" style={{fontSize: '22px'}}>There are numerous methods to assist the School and its students. 
                  By donating to projects you contribute to the general fund. 
                  Regardless of your preference for supporting Moringa,
                  we will assist you in achieving your objectives and ensuring that your contribution has a positive impact.</p>
                  <a  href='#donate-project' class="card-text"><small style={{color: '#ff5c33', fontSize: "18px"}}>Projects actively accepting donations</small></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
      <div className='my-cards' style={{backgroundColor: '#f2f2f2'}}> 
      <div class="row row-cols-1 row-cols-md-3 g-4" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      {projects.map((project) => (
      <div class="card" style={{width: "18rem"}}>
        {/* <img src="..." class="card-img-top" alt="..." /> */}
        <div class="card-body h-100">
          <h5 class="card-title" style={{color: "#ff5c33", fontWeight: "bold", fontSize: "28px", fontStyle: 'italic'}}>{project.name}</h5>
            <p class="card-text">{project.description}</p>
            <p class="card-text"><i class="fa-money" aria-hidden="true" style={{ color: '#007ACC' }}></i> Project Amount: {project.amount}</p>
            <p class="card-text"><i class="fa fa-calendar" aria-hidden="true" style={{ color: '#007ACC' }}></i> Starts: {project.start_date}</p>
            <p class="card-text"><i class="fa fa-hourglass-start fa-spin" aria-hidden="true" style={{ color: '#007ACC' }}></i> Ends: {project.end_date}</p>
            <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{fontSize: '15px'}}><i class="fa-s fa-donate" aria-hidden="true" style={{ color: '#007ACC' }}></i> Donate</button> 
        </div>
      </div>
      ))}
        {/* <div class="row row-cols-1 row-cols-md-3 g-4">
          {projects.map((project) => (
            <div class="col">
              <div class="card">
                <div class="card-body w-75">
                  <h5 class="card-title" style={{color: "#ff5c33", fontWeight: "bold", fontSize: "28px", fontStyle: 'italic'}}>{project.name}</h5>
                  <p class="card-text">{project.description}</p>
                  <p class="card-text"><i class="fa-money" aria-hidden="true" style={{ color: '#007ACC' }}></i> Project Amount: {project.amount}</p>
                  <p class="card-text"><i class="fa fa-calendar" aria-hidden="true" style={{ color: '#007ACC' }}></i> Starts: {project.start_date}</p>
                  <p class="card-text"><i class="fa fa-hourglass-start fa-spin" aria-hidden="true" style={{ color: '#007ACC' }}></i> Ends: {project.end_date}</p>
                  <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{fontSize: '15px'}}><i class="fa-s fa-donate" aria-hidden="true" style={{ color: '#007ACC' }}></i> Donate</button> */}

                  {/* donation modal */}
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel" style={{color: '#00004d', fontWeight: 'bold'}}>
                        Donate <i class="fa fa-heart" aria-hidden="true" style={{color: 'red'}}></i></h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                        <div class="modal-body">
                        <label for="Enter amount" class="form-label">Paybill</label><br />
                        </div> 
                        <div class="mb-3 form-check">
                        <label for="Enter amount" class="form-label">Account Number</label>
                        {/* <input type="number" class="form-control" id="js" /> */}
                      </div>
                      <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          {/* <button type="button" class="btn btn-primary">Donate</button> */}
                      </div>
                    </div>
                    
                  </div>
                </div>
                </div>
              </div>
            </div>
  //         ))}
  //         </div>
  //     </div>
  //   </div>
  // </div>
  )
}
