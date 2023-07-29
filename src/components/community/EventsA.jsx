import { React, useState, useEffect } from 'react';
import BackgroundImagePage from './BackgroundImagePage'
import './Community.css'
import { useNavigate } from 'react-router-dom';
export default function EventsA() {
  const [events, setEvents] =useState([]);
  const isLoggedIn = sessionStorage.getItem("jwtToken")
  let navigate = useNavigate();

  const formatTime = (isoTime) => {
    const date = new Date(isoTime);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

  // fetch events
  // slice from index -6
  useEffect( () =>{
    fetch('https://moringa-connect.onrender.com/events')
    .then(res =>res.json())
    .then(data => setEvents(data.slice(4)))
    .catch(err => console.log(err));
  }, [])
  return (
    <div style={{overflowX: 'hidden'}}>
      <BackgroundImagePage />
      <div class="container-fluid" style={{justifyContent: 'center', marginLeft: '2em', marginTop: '10em'}} id='events'>
            <h1 style={{color: '#00004D', fontWeight: 'bold'}}>More events:</h1>         
      </div>

      <div className='mb-3' style={{ paddingTop: '2em', paddingBottom: '2em'}}>
      <div className='row g-0' style={{ display: "flex", justifyContent: "center"}}>
      {events.map(event => (
          <div className="container ps-5">
            <div key={event.id} className="card mx-5 p-0 shadow-lg" style={{maxWidth: "80vw", height: "18rem"}}>
              <div className="row g-0 p-0 m-0">
                <div className="col-md-4" style={{maxHeight: "15rem"}}>
                    <img src={event.img_url} alt="photo" className="img-fluid rounded-start"  style={{height: "18rem", width: "100%", objectFit: "cover"}} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title" style={{ fontStyle: 'italic', color: '#007ACC', fontWeight: 'bold' }}> {event.name}</h5>
                      <p className="card-text" style={{ fontSize: '20px', color: '#00004D', fontWeight: 'bold' }}><i className="fa fa-calendar" aria-hidden="true" style={{ color: '#007ACC' }}></i> {event.date}</p>
                      <p className="card-text" style={{ color: '#00004D' }}>{event.description.substring(0, 250)}...<button
                        onClick={() => {
                          isLoggedIn? (navigate(`/allevents/${event.id}`)) : (navigate(`/login`))   
                        }}
                          class='border-top-0 border-end-0 border-bottom-0 border-start-0 btn-outline-secondary fst-italic bg-body p-0'>more</button>
                      </p>
                      <p className="card-text"><i className="fa fa-clock" aria-hidden="true" style={{ color: '#007ACC' }}></i> {formatTime(event.time)}</p>
                      <p className="card-text"><i className="fa fa-map-marker" aria-hidden="true" style={{ color: '#007ACC' }}></i> {event.venue}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      ))}          
 
      {/* pagination */}
      <nav aria-label="Page navigation example " style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <ul class="pagination justify-content-end">
          <li class="page-item">
            <a class="page-link" href='/community/#events'>Previous</a>
          </li>
          <li class="page-item"><a class="page-link" href="/community/#events">1</a></li>
            <li class="page-item"><a class="page-link" href="/community/eventsa">2</a></li>
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
