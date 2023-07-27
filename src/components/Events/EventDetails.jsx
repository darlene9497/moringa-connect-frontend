import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthContext";

const EventDetails = () => {
    const [event, setEvent] = useState([])
    const {user} = useContext(AuthContext)
    let { id } = useParams();
    const navigate = useNavigate()

    useEffect(()=>{
        fetch(`http://localhost:3000/events/${id}`)
        .then((res)=> res.json())
        .then((data)=> {
            console.log(data)
            return setEvent(data)
        })
    },[])

    return ( 
        <div>
            <img
                src={event.img_url}
                className="img-fluid"
                alt="photo"
                style={{
                height: "35rem",
                width: "100%",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Add a box shadow for a nice effect
                }}
            />
            <div className="container p-3 m-0">
                <span className="me-4 h3"><i class="bi bi-calendar-check"></i> {event.date}</span> <span className="h1">|</span>
                <span className="mx-4 h3"><i class="bi bi-clock-fill"></i> {event.formatted_time}</span> <span className="h1">|</span>
                <span className="mx-4 h3"><i class="bi bi-geo-alt-fill"></i> {event.venue}</span>
                <hr />
                <h1 style={{color: "#F97004", fontWeight:'bolder'}}>{event.name}</h1>
                <hr />
                <div className="">
                    <p className="ms-3">{event.description}</p>
                </div>
                {
                    user && user.is_admin? (
                        <div className="mt-5">
                            <button className="me-5 btn btn-primary" onClick={()=> navigate(`/allevents/${event.id}/edit`)} >Edit</button>
                        </div>
                    ):(
                        <></>
                    )
                }
            </div>
        </div>
     );
}
 
export default EventDetails;