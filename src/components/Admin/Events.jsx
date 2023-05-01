import React, { useState, useEffect } from 'react';
import './Admin.css'
import AddEvent from './AddEvent';

export default function Events() {
  const [events, setEvents] = useState([]);
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

  const handleDeleteClick = (event) => {
    fetch(`/events/${event.id}`, {
      method: 'DELETE'
    })
    .then(res => {
      if (res.ok) {
        // Call a function to handle the successful deletion of the event
        handleSuccessfulDeletion(event.id);
      } else {
        throw new Error('Network response was not ok');
      }
    })
    .catch(err => console.log(err));
  }
  
  // Define a function to handle the successful deletion of an event
  const handleSuccessfulDeletion = (deletedEventId) => {
    // Update the events state after successful deletion
    setEvents(events.filter(e => e.id !== deletedEventId));
  }
  
  

  return (
    < div style={{height: '600vh'}}>
    <div className="container-fluid mt-5">
      <h1 className='events-header'>Events</h1>
      <table className="table table-striped table-hover align-middle">
        <thead>
          <tr>
            {/* <th scope="col">ID</th> */}
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Date</th>
            <th scope="col">Venue</th>
            <th scope="col">Time</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {events.map((event) => (
            <tr key={event.id}>
              {/* <td>{event.id}</td> */}
              <td>{event.name}</td>
              <td>{event.description}</td>
              <td>{event.date}</td>
              <td>{event.venue}</td>
              <td>{event.time}</td>
              <td>
                <button type="button" className="btn btn-primary me-3" data-bs-toggle="modal" data-bs-target={`#exampleModal-${event.id}`} onClick={() => setSelectedEvent(event)}>Update</button>
                <button type="button" className="btn btn-danger" onClick={() => handleDeleteClick(event)}><i className="fas fa-trash"></i></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <div className='btn-add'>
        <button type="button" className="btn btn-secondary" >Add Event</button>
      </div> */}
      <AddEvent />
    </div>

    {/* Modal */}
    {selectedEvent && (
      <div className="modal fade" id={`exampleModal-${selectedEvent.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Update Event Details</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="event-name" className="form-label">Event name:</label>
                  <input type="text" className="form-control" id="event-name" value={selectedEvent.name} />
                </div>
                <div className="mb-3">
                  <label htmlFor="event-description" className="form-label">Description:</label>
                  <textarea className="form-control" id="event-description" rows="3" value={selectedEvent.description}></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="event-date" className="form-label">Date:</label>
                  <input type="date" className                ="form-control" id="event-date" value={selectedEvent.date} />
                </div>
                <div className="mb-3">
                  <label htmlFor="event-venue" className="form-label">Venue:</label>
                  <input type="text" className="form-control" id="event-venue" value={selectedEvent.venue} />
                </div>
                <div className="mb-3">
                  <label htmlFor="event-time" className="form-label">Time:</label>
                  <input type="time" className="form-control" id="event-time" value={selectedEvent.time} />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    )}
    </div>
  );
}


