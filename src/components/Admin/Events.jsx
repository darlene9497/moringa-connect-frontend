import React, { useState, useEffect } from 'react';
import './Admin.css'

export default function Events() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    fetch('/events')
      .then(res => res.json())
      .then(data => setEvents(data))
      .catch(err => console.log(err));
  }, []);

  const handleUpdateClick = (event) => {
    setSelectedEvent(event);
  }

  const handleDeleteClick = (event) => {
    fetch(`/events/${event.id}`, {
      method: 'DELETE'
    })
      .then(res => {
        if (res.ok) {
          // Update the events state after successful deletion
          setEvents(events.filter(e => e.id !== event.id));
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

  const handleUpdateEvent = () => {
    const updatedEvent = {
      ...selectedEvent,
      name: document.getElementById('event-name').value,
      description: document.getElementById('event-description').value,
      date: document.getElementById('event-date').value,
      venue: document.getElementById('event-venue').value,
      time: document.getElementById('event-time').value,
    };

    fetch(`/events/${selectedEvent.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedEvent),
    })
      .then(res => res.json())
      .then(data => {
        // Replace the updated event in the events array
        const updatedEvents = events.map(e => e.id === data.id ? data : e);
        setEvents(updatedEvents);
        setSelectedEvent(null);
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <div className="container-fluid mt-5">
        <h1 className='events-header'>Events</h1>
        <table className="table table-striped table-hover align-middle">
          <thead>
            <tr>
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
                <td>{event.name}</td>
                <td>{event.description}</td>
                <td>{event.date}</td>
                <td>{event.venue}</td>
                <td>{event.time}</td>
                <td>
                  <button type="button" className="btn btn-primary me-3 custom-button" data-bs-toggle="modal" data-bs-target={`#exampleModal-${event.id}`} onClick={() => handleUpdateClick(event)}>Update</button>
                  <button type="button" className="btn red-btn" onClick={() => handleDeleteClick(event)}><i className="fas fa-trash-alt"></i></button>
                    {/* Modal */}
                    <div className="modal fade" id={`exampleModal-${event.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">Update Event</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                          <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="event-name" placeholder="Name" defaultValue={selectedEvent?.name} />
                            <label htmlFor="event-name">Name</label>
                          </div>
                          <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="event-description" placeholder="Description" defaultValue={selectedEvent?.description} />
                            <label htmlFor="event-description">Description</label>
                          </div>
                          <div className="form-floating mb-3">
                            <input type="date" className="form-control" id="event-date" placeholder="Date" defaultValue={selectedEvent?.date} />
                            <label htmlFor="event-date">Date</label>
                          </div>
                          <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="event-venue" placeholder="Venue" defaultValue={selectedEvent?.venue} />
                            <label htmlFor="event-venue">Venue</label>
                          </div>
                          <div className="form-floating mb-3">
                            <input type="time" className="form-control" id="event-time" placeholder="Time" defaultValue={selectedEvent?.time} />
                            <label htmlFor="event-time">Time</label>
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          <button type="button" className="btn btn-primary" onClick={handleUpdateEvent}>Save changes</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

                  


