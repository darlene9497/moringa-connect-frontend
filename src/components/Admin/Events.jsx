import React, { useState, useEffect } from 'react';
import './Admin.css'
import SideNav from './SideNav';
export default function Events() {
  const [events, setEvents] = useState([]);
  // track currently selected events
  const[selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    fetch('/events')
      .then(res => res.json())
      .then(data => setEvents(data))
      .catch(err => console.log(err));
  }, []);

  const handleUpdateClick = (event) =>{
    setSelectedEvent(event);
  }

  return (
    <>
    <SideNav />
    <div class="table-responsive-sm" style={{height: '220vh'}}>
      <h1 className='events-header'>Events</h1>
      <table class="table table-striped table-hover align-middle">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Image</th>
            <th scope="col">Date</th>
            <th scope="col">Venue</th>
            <th scope="col">Time</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          {events.map((event) => (
            <tr key={event.id}>
              <td>{event.id}</td>
              <td>{event.name}</td>
              <td>{event.description}</td>
              <td>{event.Image}</td>
              <td>{event.date}</td>
              <td>{event.venue}</td>
              <td>{event.time}</td>
              <td>
              <button type="button" class="btn btn-primary" 
                data-bs-toggle="modal" 
                data-bs-target={`#exampleModal-${event.id}`}
                onClick={() => handleUpdateClick(event)}
                >
                Update
              </button>
              {/* <!-- Modal --> */}
              <div class="modal fade" id={`exampleModal-${event.id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">Update Event Details</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    {selectedEvent &&(
                    <form>
                      <div class="mb-3">
                        <label for="Event name" class="form-label">Event name:</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={selectedEvent.name} />
                      </div>
                      <div class="mb-3">
                        <label for="Event name" class="form-label">Description:</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={selectedEvent.description} />
                      </div>
                      <div class="mb-3">
                        {/* <label for="formFileMultiple" class="form-label">Image</label>
                        <input class="form-control" type="file" id="formFileMultiple" multiple  value={event.image}/> */}
                      </div>
                      <div class="mb-3">
                        <label for="Event name" class="form-label">Date:</label>
                        <input type="date" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={selectedEvent.date}/>
                      </div>
                      <div class="mb-3">
                        <label for="Event name" class="form-label">Venue:</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={selectedEvent.venue} />
                      </div>
                      <div class="mb-3">
                        <label for="Event name" class="form-label">Time:</label>
                        <input type="date-time" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={selectedEvent.time} />
                      </div>
                    </form> 
                    )}                
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="submit" class="btn btn-primary">Save changes</button>
                    </div>
                  </div>
                </div>
              </div>              
              {/* <button type="button" class="btn btn-danger">Delete</button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='btn-add'>
        <button type="button" class="btn btn-secondary" >Add Event</button>
      </div>
    </div> 
    </>
  );
}
