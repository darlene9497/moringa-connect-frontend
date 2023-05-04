import {React, useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

export default function AddProject() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [start_date, setStartDate] = useState('');
  const [end_date, setEndDate] = useState('');
  const [paybill, setPaybill] = useState('');
  const [acc_no, setAccNo] = useState('');
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    const projectDetails = {name, description, amount, start_date, end_date, paybill, acc_no}

    fetch('/projects', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(projectDetails)
    }).then((res)=> {
        alert("successfully created!")
        // navigate('/projects')
        return res.json()
    }).then((project)=> console.log(project))
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
                    amount
                </span>
                <input type="number" className='form-control' value={amount} onChange={(event) => setAmount(event.target.value)} />
            </div>

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
            
            <button className='btn btn-primary my-2' type="submit">Create Project</button>
        </form>
    </div>
  )
}
