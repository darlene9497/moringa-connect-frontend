import {React, useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function EditProject() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [start_date, setStartDate] = useState('');
  const [end_date, setEndDate] = useState('');
  const [paybill, setPaybill] = useState('');
  const [acc_no, setAccNo] = useState('');
  const {id} = useParams()
  const navigate = useNavigate()

  useEffect(()=>{
    fetch(`/projects/${id}`)
    .then(res => res.json())
    .then((data)=>{
        setName(data.name)
        setDescription(data.description)
        setStartDate(data.start_date)
        setEndDate(data.end_date)
        setPaybill(data.paybill)
        setAccNo(data.acc_no)
    })
}, [])

  const handleSubmit = (event) => {
    event.preventDefault();
    const projectDetails = {name, description, start_date, end_date, paybill, acc_no}

    fetch(`/projects/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(projectDetails)
    }).then((res)=> {
        return res.json()
    }).then((project)=> {
        console.log(project)
        if (project.error) {
            // console.log(project.error)
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: project.error,
              footer: '<a href="">Why do I have this issue?</a>',
            });
          } else {
            // setUser(project)
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Project Successfully Updated!",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate('/projects');
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

            {/* <div className="form-group my-5">
                <span>
                    amount
                </span>
                <input type="number" className='form-control' value={amount} onChange={(event) => setAmount(event.target.value)} />
            </div> */}

            <div className="form-group my-5">
                <span>
                    Start Date
                </span>
                <input type="date" className='form-control' value={start_date} onChange={(event) => setStartDate(event.target.value)} />
            </div>

            <div className="form-group my-5">
                <span>
                    End Date
                </span>
                <input type="date" className='form-control' value={end_date} onChange={(event) => setEndDate(event.target.value)} />
            </div>
            
            <div className="form-group my-5">
                <span>
                    Paybill
                </span>
                <input type="number" className='form-control' value={paybill} onChange={(event) => setPaybill(event.target.value)} />
            </div>   

            <div className="form-group my-5">
                <span>
                    Account Number
                </span>
                <input type="text" className='form-control' value={acc_no} onChange={(event) => setAccNo(event.target.value)} />
            </div> 
            
            <button className='btn btn-primary my-2' type="submit">Edit Project</button>
        </form>
    </div>
  )
}
