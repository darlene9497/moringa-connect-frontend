import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EventDetails = () => {
    const [event, setEvent] = useState([])
    let { id } = useParams();

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
            {/* <div className="col-md-4"> */}
                <img src={event.image_url} className="img-fluid" alt="photo" style={{height: "70vh", width: "100%", objectFit: "cover"}} />
            {/* </div> */}
            <div className="container p-3 m-0">
                <h1>{event.name}</h1>
                <div className="">
                    <p className="ms-3">{event.description}</p>
                    <p>{event.date}</p>
                    <p>{event.formatted_time}</p>
                    <p>{event.venue}</p>
                </div>
            </div>


        </div>
     );
}
 
export default EventDetails;