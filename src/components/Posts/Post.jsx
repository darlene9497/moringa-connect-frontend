import React, { useEffect, useState } from 'react'



function Post() {
    const [rooms, setRooms] = useState([])
    const [name, setRoomName] = useState('')
    const [is_private, setIsPrivate] = useState(false)

const handleNewRoom = (e)=>{
    e.preventDefault()
    const roomData = {name, is_private}
    fetch('/rooms',{
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(roomData)
    })
    .then(res => res.json())
    .then((data)=>{
        setRooms(data)
    })
}

// fetch rooms

useEffect(()=>{
    fetch('/rooms')
    .then(res => res.json())
    .then((data)=>{
        setRooms(data)
    })
},[])

  return (
    <div className="container" style={{minHeight: "100vh"}}>
        <div className="room-form">
            <form onSubmit={handleNewRoom}>
                <div className="form-group my-5" >
                    <span>
                        Group Name
                    </span>
                    <input type="text" className='form-control' value={name} onChange={(event) => setRoomName(event.target.value)} />
                </div>

                <div className="form-group my-5" >
                    <span>
                        is private
                    </span>
                    <input type="hidden" className='form-control' value={is_private} onChange={(event) => setIsPrivate(event.target.value)} />
                </div>

                <button className='btn btn-primary my-2' type="submit">Create Group</button>
            </form>
        </div>
        <div className="rooms">
            <h2>Groups</h2>
            {
                rooms.map((room)=>{
                    return(
                        <div className="room" key={room.id}>
                            <h5>{room.name}</h5>
                            <p>lots of Groups</p>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Post