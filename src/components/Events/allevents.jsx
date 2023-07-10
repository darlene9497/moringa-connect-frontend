import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const AllEvents = () => {
    const [events, setEvents] = useState([])
    let { id } = useParams();

    useEffect(()=>{
        fetch('http://localhost:3000/events')
        .then(res => res.json())
        .then((data) => {

            console.log(data)
            setEvents(data)
        })
    },[])
    return ( 
        <div className="row">
            {
                events.map((event)=>{
                    return(
                            <div key={event.id} className="card col-12 col-md-4 col-xl-3 col-xxl-2 text-start shadow ms-5 me-0 my-5 p-0" style={{width: "22rem"}}>
                                <Link to={`/allevents/${event.id}`} >
                                    {/* <div className="col-md-4">
                                        <img src={event.image_url} className="img-fluid card-img-top" alt="photo" style={{height: "100%", width: "100%", objectFit: "cover"}} />
                                    </div> */}
                                    <img src={event.image_url} className="card-img-top img-fluid img-fit" alt="..." style={{height: "14rem", width: "100%", objectFit: "cover"}} />
                                    <div className="card-body">
                                        <h5 className="card-title">{event.name}</h5>
                                        <p className="card-text">{event.description.substring(0, 90)}...</p>
                                        <span>{event.date}</span> |
                                        <span>{event.formatted_time}</span> |
                                        <span>{event.venue}</span>
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