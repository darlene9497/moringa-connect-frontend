import { React, useState, useEffect } from 'react';
import BackgroundImagePage from './BackgroundImagePage'
import './Community.css'
export default function EventsA() {
  const [events, setEvents] =useState([]);

  // fetch events
  // slice from index -6
  useEffect( () =>{
    fetch('/events')
    .then(res =>res.json())
    .then(data => setEvents(data.slice(5)))
    .catch(err => console.log(err));
  }, [])
  return (
    <div>
      <BackgroundImagePage />
      <div class="container-fluid" style={{justifyContent: 'center', marginLeft: '3em', marginTop: '10em'}} id='events'>
            <h1 style={{fontSize: '40px', color: '#00004D', fontWeight: 'bold', paddingLeft: '2em', paddingBottom: '2em' }}>More events:</h1>         
            {/* <p style={{fontSize: '20px', paddingLeft: '4em'}}>We’re working hard to bring your search<br /> for alumni events under one roof.<br /> Until then, you can browse alumni events here:</p> */}
          </div>

      <div className='card mb-3' style={{ paddingTop: '2em', paddingBottom: '2em'}}>
      <div className='row g-0' style={{ display: "flex", justifyContent: "center"}}>
      {events.map(event => (
        <div key={event.id} className="card-container" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: '4em'}}>
          <div className="card mb-3" style={{ maxWidth: "80%", height: 'fitContent', borderStyle: 'none'}}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={event.image} className="img-fluid rounded-start" alt="..."  width='100%'/>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title" style={{ fontStyle: 'italic', color: '#007ACC', fontWeight: 'bold' }}> {event.name}</h5>
                  <p className="card-text" style={{ fontSize: '20px', color: '#00004D', fontWeight: 'bold' }}><i className="fa fa-calendar" aria-hidden="true" style={{ color: '#007ACC' }}></i> {event.date}</p>
                  <p className="card-text" style={{ color: '#00004D' }}>{event.description}</p>
                  <p className="card-text"><i className="fa fa-clock" aria-hidden="true" style={{ color: '#007ACC' }}></i> {event.time}</p>
                  <p className="card-text"><i className="fa fa-map-marker" aria-hidden="true" style={{ color: '#007ACC' }}></i> {event.venue}</p>
                  {/* <p class="card-text"><i class="fa fa-link" aria-hidden="true" style={{ color: '#007ACC' }}></i> Virtual Meetup link </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}          
 
        {/* pagination */}
        <nav aria-label="Page navigation example" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: '4em'}}>
        <ul class="pagination justify-content-end">
          <li class="page-item">
            <a class="page-link" href='/community/#events'>Previous</a>
          </li>
          <li class="page-item"><a class="page-link" href="/community/#events">1</a></li>
                <li class="page-item"><a class="page-link" href="/community/eventsa">2</a></li>
                {/* <li class="page-item"><a class="page-link" href="/community/eventsb">3</a></li> */}
          {/* <li class="page-item">
            <a class="page-link" href="/community/eventsb">Next</a>
          </li> */}
        </ul>
        </nav>          
        </div>      
    </div>
    </div>
  )
}