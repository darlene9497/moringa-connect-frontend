import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import './events.css'

const AllEvents = () => {
    const [events, setEvents] = useState([])
    const [searchEvent, setSearchEvent] = useState('')
    let { id } = useParams();

    const formatTime = (isoTime) => {
        const date = new Date(isoTime);
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };
      

    useEffect(()=>{
        fetch('/events')
        .then(res => res.json())
        .then((data) => {

            console.log(data)
            setEvents(data)
        })
    },[events])
    return ( 
        <div className="row px-5">
            <div className="d-flex justify-content-end ">
                <input
                    type="text" 
                    className="form-control mx-4 mb-4 search-event border border-3 border-warning border-top-0 border-end-0 border-start-0" 
                    style={{width: '50%'}} 
                    placeholder="Search Event..." 
                    onChange={e => setSearchEvent(e.target.value)}
                />
                
            </div>
            
            {
                events.filter((event) => {
                    if (searchEvent === '') {
                      return event;
                    } else {
                      // Convert the event object values to an array
                      const eventValues = Object.values(event);
                      // Check if any of the values includes the searchEvent
                      return eventValues.some((value) =>
                        String(value).toLowerCase().includes(searchEvent.toLowerCase().trim())
                      );
                    }
                  }).map((event)=>{
                    return(
                            <div key={event.id} className="card col-11 col-md-4 col-xl-3 col-xxl-2 text-start shadow ms-5 me-0 mb-5 p-0" style={{width: "22rem"}}>
                                <Link to={`/allevents/${event.id}`} style={{height: "32rem"}} >
                                {event.img_url ? (
                                        <img src={event.img_url} className="card-img-top img-fluid img-fit" alt="Event Photo" style={{ height: "16rem", width: "100%", objectFit: "cover" }} />
                                    ) : event.image_url ? (
                                        <img src={event.image_url} className="card-img-top img-fluid img-fit" alt="Event Photo" style={{ height: "16rem", width: "100%", objectFit: "cover" }} />
                                    ) : (
                                        <img src="https://images.pexels.com/photos/4350207/pexels-photo-4350207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top img-fluid img-fit" alt="Event Photo" style={{ height: "16rem", width: "100%", objectFit: "cover" }} />
                                    )}
                                    <div className="card-body">
                                        <h5 className="card-title" style={{color: "#F97004", fontWeight: 'bold'}}>{event.name}</h5>
                                        <p className="card-text">{event.description.substring(0, 90)}...</p>
                                        <span className='me-1'><i class="bi bi-calendar-check"></i> {event.date}</span>|
                                        <span className='mx-1'><i class="bi bi-clock-fill"></i> {formatTime(event.time)}</span>|
                                        <span className='ms-1'><i class="bi bi-geo-alt-fill"></i> {event.venue}</span>
                                    </div>
                                </Link>
                            </div>
                    )
                })
            }
        </div>
     );
}
 
export default AllEvents;