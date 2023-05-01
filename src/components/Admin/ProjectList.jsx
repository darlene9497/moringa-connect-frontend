import { React, useState, useEffect } from "react";
import './Admin.css'
import { Modal } from 'bootstrap';
import SideNav from "./SideNav";
// import bootstrap from 'bootstrap';


export default function ProjectList() {

  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    fetch('/projects')
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch(err => console.log(err));
  }, []);

  
  const handleProjectUpdate = (project) => {
    setSelectedProject(project);
  }

  // edit project details
  const handleSaveChanges = () => {
    fetch(`/projects/${selectedProject.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: selectedProject.name,
        description: selectedProject.description,
        amount: selectedProject.amount,
        start_date: selectedProject.start_date,
        end_date: selectedProject.end_date  
      })
    })
    .then((res) => res.json())
    .then((updatedProject) => {
      const updatedProjects = projects.map((project) =>{
        if(project.id === updatedProject.id){
          return updatedProject;
        }else{
          return project;
        }
      });
      setProjects(updatedProjects);
      // reset project state
      setSelectedProject(null);
      // close modal
      const modal = document.getElementById(`exampleModal-${selectedProject.id}`);
      const bootstrapModal = Modal.getInstance(modal);
      bootstrapModal.hide();
    })
    .catch((error) => console.error("Error updating project:", error));
  }

  return (
    <>
    <SideNav />
    <div class="table-responsive-md" style={{height: '70vh'}}>
    <h1 className='events-header'>Projects</h1>
    <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Start date</th>
            <th scope="col">End date</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        {projects.map((project) =>(
        <tbody>
          <tr key={project.name}>
            <th scope="row">{project.id}</th>
            <td>{project.name}</td>
            <td>{project.description}</td>
            <td>{project.amount}</td>
            <td>{project.start_date}</td>
            <td>{project.end_date}</td>
            <button type="button" class="btn btn-primary"
              data-bs-toggle="modal" 
              data-bs-target={`#exampleModal-${project.id}`}
              onClick={() => handleProjectUpdate(project)}
            >
              Update
            </button>
            {/* <!-- Modal --> */}
            <div class="modal fade" id={`exampleModal-${project.id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Update Project Details</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                  {selectedProject &&(
                  <form onSubmit={handleSaveChanges}>
                    <div class="mb-3">
                      <label for="Event name" class="form-label">Project name:</label>
                      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                      value={selectedProject.name} onChange={(e) => setSelectedProject({...selectedProject, name: e.target.value})} />
                    </div>
                    <div class="mb-3">
                      <label for="Event name" class="form-label">Description:</label>
                      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                      value={selectedProject.description} onChange={(e) => setSelectedProject({...selectedProject, description: e.target.value})} />
                    </div>
                    <div class="mb-3">
                      {/* <label for="formFileMultiple" class="form-label">Image</label>
                      <input class="form-control" type="file" id="formFileMultiple" multiple  value={event.image}/> */}
                    </div>
                    <div class="mb-3">
                      <label for="Event name" class="form-label">Amount:</label>
                      <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                      value={selectedProject.amount} onChange={(e) => setSelectedProject({...selectedProject, amount: e.target.value})} />
                    </div>
                    <div class="mb-3">
                      <label for="Event name" class="form-label">Start Date:</label>
                      <input type="date-time" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                      value={selectedProject.start_date} onChange={(e) => setSelectedProject({...selectedProject, start_date: e.target.value})} />
                    </div>
                    <div class="mb-3">
                      <label for="Event name" class="form-label">End Date:</label>
                      <input type="date-time" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                      value={selectedProject.end_date} onChange={(e) => setSelectedProject({...selectedProject, end_date: e.target.value})} />
                    </div>
                  </form> 
                  )}                
                  </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <input type="submit" value="Save changes" class="btn btn-primary" />
                    </div>
                  </div>
                </div>
              </div>
          </tr>
        </tbody>
        ))}
      </table>
      <div className='btn-add'>
        <button type="button" class="btn btn-secondary" >Add Project</button>
      </div>
      
    </div>
    </>
  );
}
