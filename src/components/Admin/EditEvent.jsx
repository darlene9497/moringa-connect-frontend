import {React, useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function EditEvent() {

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image_url, setImageUrl] = useState('');
  const [date, setDate] = useState('');
  const [venue, setVenue] = useState('');
  const [time, setTime] = useState('');
  const navigate = useNavigate()
  const {id} = useParams()

  const handleSubmit = (event) => {
    event.preventDefault();
    const eventDetails = {name, description, image_url, date, venue, time}

    // useEffect(()=>{
    //     fetch(`/events/${id}`)
    //     .then(res => res.json())
    //     .then((data)=>{
    //         setName(data.name)
    //         setDescription(data.description)
    //         setImageUrl(data.image_url)
    //         setDate(data.date)
    //         setVenue(data.venue)
    //         setTime(data.time)
    //     })
    // }, [])


    fetch(`/events/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(eventDetails)
    }).then((res)=> {
        return res.json()
    }).then((event)=> {
        console.log(event)
        if (event.error) {
            // console.log(event.error)
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: event.error,
              footer: '<a href="">Why do I have this issue?</a>',
            });
          } else {
            // setUser(event)
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Event Created Successfully!",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/allevents");
          }
    })
  }


  return (
    <div className="container" style={{minHeight: "100vh"}}>
    <form onSubmit={handleSubmit}>
        <div className="form-group my-5" >
            <span>
                Name
            </span>
            <input type="text" className='form-control' value={name} onChange={(event) => setName(event.target.value)} />
        </div>
        
        <div className="form-group my-5">
            <span>
                Description:
            </span>
            <textarea className='form-control' value={description} style={{height: "5rem"}} onChange={(event) => setDescription(event.target.value)} />
        </div>

        <div className="form-group my-5">
            <span>
                image url
            </span>
            <input type="text" className='form-control' value={image_url} onChange={(event) => setImageUrl(event.target.value)} />
        </div>

        <div className="form-group my-5">
            <span>
                Date
            </span>
            <input type="date" className='form-control' value={date} onChange={(event) => setDate(event.target.value)} />
        </div>

        
        <div className="form-group my-5">
            <span>
                venue
            </span>
            <input type="text" className='form-control' value={venue} onChange={(event) => setVenue(event.target.value)} />
        </div>   

        <div className="form-group my-5">
            <span>
                Time
            </span>
            <input type="time" className='form-control' value={time} onChange={(event) => setTime(event.target.value)} />
        </div> 
        
        <button className='btn btn-primary my-2' type="submit">Create Event</button>
    </form>
</div>
  )
}
