import React, { useState, useEffect } from 'react';
import './Admin.css'
import AddEvent from './AddEvent';
import { useNavigate } from 'react-router-dom';

export default function Events() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const navigate = useNavigate()

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
    <div style={{height: '600vh'}}>
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
                <button type="button" className="btn btn-primary me-3 custom-button" data-bs-toggle="modal" data-bs-target={`#exampleModal-${event.id}`} onClick={() => navigate(`/allevents/${event.id}/edit`)}>Update</button>
                <button type="button" className="btn red-btn" onClick={() => handleDeleteClick(event)}><i className="fas fa-trash"></i></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <AddEvent />
    </div>
    </div>
  );
}