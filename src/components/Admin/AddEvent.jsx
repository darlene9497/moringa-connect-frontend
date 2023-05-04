import {React, useState, useEffect} from 'react'

export default function AddEvent() {

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [date, setDate] = useState('');
  const [venue, setVenue] = useState('');
  const [time, setTime] = useState('');
  // const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    const eventDetails = {name, description, image, date, venue, time}

    fetch('/events', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(eventDetails)
    }).then((res)=> {
        alert("successfully created!")
        // navigate('/projects')
        return res.json()
    }).then((event)=> console.log(event))
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
            <input type="text" className='form-control' value={image} onChange={(event) => setImage(event.target.value)} />
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
        
        <button className='btn btn-primary my-2' type="submit">Create Project</button>
    </form>
</div>
  )
}
