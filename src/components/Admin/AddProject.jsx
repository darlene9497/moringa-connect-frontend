import {React, useState, useEffect} from 'react'

export default function AddProject() {

    const [projectData, setProjectData] = useState({
        name: '',
        description: '',
        amount: '',
        start_date: '',
        end_date: '',
        paybill: '',
        acc_no: ''
      })
    
      const handleSaveChanges = () => {
        fetch('/projects', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(projectData)
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          console.log(data);
        })
        .catch(error => {
          console.error('Error:', error);
        });
      }
    
      const handleInputChange = (event) => {
        setProjectData({
          ...projectData,
          [event.target.name]: event.target.value
        })
      }

  return (
    <div>
        {/* <!-- Button trigger modal --> */}
        <div className='btn-add'>
            <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">Add Project</button>
        </div>
        {/* modal */}
        
        {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
        </button> */}

        {/* <!-- Modal --> */}
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Add a project</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="Event name" class="form-label">Project name:</label>
            <input type="text" class="form-control" id="projectName" name="name" aria-describedby="emailHelp"
            value={projectData.name} onChange={handleInputChange} />
          </div>
          <div class="mb-3">
            <label for="Event name" class="form-label">Description:</label>
            <input type="text" class="form-control" id="projectDescription" name="description" aria-describedby="emailHelp"
            value={projectData.description} onChange={handleInputChange} />
          </div>
          <div class="mb-3">
            {/* <label for="formFileMultiple" class="form-label">Image</label>
            <input class="form-control" type="file" id="formFileMultiple" multiple  value={event.image}/> */}
          </div>
          <div class="mb-3">
            <label for="Event amount" class="form-label">Amount:</label>
            <input type="number" class="form-control" id="projectAmount" name="amount" aria-describedby="emailHelp"
            value={projectData.amount} onChange={handleInputChange} />
          </div>
          <div class="mb-3">
            <label for="Event date" class="form-label">Start Date:</label>
            <input type="datetime-local" class="form-control" id="projectStartDate" name="start_date" aria-describedby="emailHelp"
            value={projectData.start_date} onChange={handleInputChange} />
          </div>
          <div class="mb-3">
            <label for="Event date" class="form-label">End Date:</label>
            <input type="datetime-local" class="form-control" id="projectEndDate" name="end_date" aria-describedby="emailHelp"
            value={projectData.end_date} onChange={handleInputChange} />
          </div>
          <div class="mb-3">
            <label for="Event paybill" class="form-label">Paybill:</label>
            <input type="number" class="form-control" id="projectPaybill" name="paybill" aria-describedby="emailHelp"
            value={projectData.paybill} onChange={handleInputChange} />
          </div>
          <div class="mb-3">
            <label for="Acc num" class="form-label">Account Number:</label>
            <input type="number" class="form-control" id="projectAccountNumber" name="acc_no" aria-describedby="emailHelp"
            value={projectData.acc_no} onChange={handleInputChange} />
          </div>
        </form>                 
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onClick={handleSaveChanges}>Save changes</button>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}
