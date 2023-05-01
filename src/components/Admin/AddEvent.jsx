import {React, useState, useEffect} from 'react'

export default function AddEvent() {

    const [eventData, setEventData] = useState({
        name: '',
        description: '',
        image: '',
        date: '',
        venue: '',
        time: ''
      })
    
      const handleSaveChanges = () => {
        fetch('/events', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(eventData)
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
        setEventData({
          ...eventData,
          [event.target.name]: event.target.value
        })
      }

  return (
    <div>
        {/* <!-- Button trigger modal --> */}
        <div className='btn-add'>
            <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">Add an Event</button>
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
        <h1 class="modal-title fs-5" id="exampleModalLabel">Add Event</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="Event name" class="form-label">Event name:</label>
            <input type="text" class="form-control" id="eventName" name="name" aria-describedby="emailHelp"
            value={eventData.name} onChange={handleInputChange} />
          </div>
          <div class="mb-3">
            <label for="Event name" class="form-label">Description:</label>
            <input type="text" class="form-control" id="eventDescription" name="description" aria-describedby="emailHelp"
            value={eventData.description} onChange={handleInputChange} />
          </div>
          <div class="mb-3">
            <label for="Event image" class="form-label">Image:</label>
            <input type="text" class="form-control" id="eventDescription" name="image" aria-describedby="emailHelp"
            value={eventData.image} onChange={handleInputChange} />
          </div>
          <div class="mb-3">
          </div>
          <div class="mb-3">
            <label for="Event date" class="form-label">Date:</label>
            <input type="datetime-local" class="form-control" id="eventDate" name="start_date" aria-describedby="emailHelp"
            value={eventData.date} onChange={handleInputChange} />
          </div>
          <div class="mb-3">
            <label for="Event venue" class="form-label">Venue:</label>
            <input type="string" class="form-control" id="projectAmount" name="venue" aria-describedby="emailHelp"
            value={eventData.venue} onChange={handleInputChange} />
          </div>
          <div class="mb-3">
            <label for="Event time" class="form-label">Time:</label>
            <input type="datetime-local" class="form-control" id="projectEndDate" name="time" aria-describedby="emailHelp"
            value={eventData.time} onChange={handleInputChange} />
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
