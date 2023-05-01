import React, { useState, useEffect } from "react";
import "./Admin.css";
import { Modal } from "bootstrap";
import AddProject from "./AddProject";

export default function ProjectList() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    fetch("/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.log(err));
  }, []);

  const handleProjectUpdate = (project) => {
    setSelectedProject(project);
  };

  // edit project details
  const handleSaveChanges = () => {
    if (!selectedProject) {
    return;
  }
    fetch(`/projects/${selectedProject.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: selectedProject.name,
        description: selectedProject.description,
        amount: selectedProject.amount,
        start_date: selectedProject.start_date,
        end_date: selectedProject.end_date,
      }),
    })
      .then((res) => res.json())
      .then((updatedProject) => {
        const updatedProjects = projects.map((project) => {
          if (project.id === updatedProject.id) {
            return updatedProject;
          } else {
            return project;
          }
        });
        setProjects(updatedProjects);
        // reset project state
        setSelectedProject(null);
        // close modal
        const modal = document.getElementById(
          `exampleModal-${selectedProject.id}`
        );
        const bootstrapModal = Modal.getInstance(modal);
        bootstrapModal.hide();
      })
      .catch((error) =>
        console.error("Error updating project:", error)
      );
  };

  // delete project
  const handleProjectDelete = (id) => {
    fetch(`/projects/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        // remove deleted project from state
        const updatedProjects = projects.filter(
          (project) => project.id !== id
        );
        setProjects(updatedProjects);
      })
      .catch((error) =>
        console.error("Error deleting project:", error)
      );
  };

  return (
    <>
      {/* <SideNav /> */}
      <div className="table-responsive-md" style={{height: '140vh'}}>
        <h1 className="events-header">Projects</h1>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Amount</th>
              <th scope="col">Start date</th>
              <th scope="col">End date</th>
              <th scope="col">Action</th>
            </tr>
          </thead>

          {projects.map((project) => (
          <tbody>
              <tr key={project.name}>
                <td>{project.name}</td>
                <td>{project.description}</td>
                <td>{project.amount}</td>
                <td>{project.start_date}</td>
                <td>{project.end_date}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary me-3 custom-button"
                    data-bs-toggle="modal"
                    data-bs-target={`#exampleModal-${project.id}`}
                    onClick={() => handleProjectUpdate(project)}
                  >
                    Update
                  </button>
                  <button
                    type="button"
                    className="btn red-btn"
                    onClick={() => handleProjectDelete(project.id)}
                  >
                    Delete
                  </button>
                </td>
              {/* Modal */}
              <div
                className="modal fade"
                id={`exampleModal-${project.id}`}
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Edit project details
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                          Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          value={
                            selectedProject ? selectedProject.name : ""
                          }
                          onChange={(e) =>
                            setSelectedProject({
                              ...selectedProject,
                              name: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="description" className="form-label">
                          Description
                        </label>
                        <textarea
                          className="form-control"
                          id="description"
                          rows="3"
                          value={
                            selectedProject
                              ? selectedProject.description
                              : ""
                          }
                          onChange={(e) =>
                            setSelectedProject({
                              ...selectedProject,
                              description: e.target.value,
                            })
                          }
                        ></textarea>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="amount" className="form-label">
                          Amount
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="amount"
                          value={
                            selectedProject ? selectedProject.amount : ""
                          }
                          onChange={(e) =>
                            setSelectedProject({
                              ...selectedProject,
                              amount: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="start-date" className="form-label">
                          Start date
                        </label>
                        <input
                          type="date"
                          className="form-control"
                          id="start-date"
                          value={
                            selectedProject
                              ? selectedProject.start_date
                              : ""
                          }
                          onChange={(e) =>
                            setSelectedProject({
                              ...selectedProject,
                              start_date: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="end-date" className="form-label">
                          End date
                        </label>
                        <input
                          type="date"
                          className="form-control"
                          id="end-date"
                          value={
                            selectedProject ? selectedProject.end_date : ""
                          }
                          onChange={(e) =>
                            setSelectedProject({
                              ...selectedProject,
                              end_date: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={handleSaveChanges}
                      >
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              </tr>
            </tbody>
          ))}
         </table>
        <div className='btn-add'>
      <AddProject />
      </div>
      </div>
    </>
  )
}
