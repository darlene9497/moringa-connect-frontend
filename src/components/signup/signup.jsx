import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp({setUserSignedIn}) {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');


  const navigate = useNavigate()
  const [login, setLogin] = useState('')
  const [errors, setErrors] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    const signUpDetails = { password, email}

    fetch('/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(signUpDetails)
    }).then((res)=> {
        if(res.ok){
            // navigate('/blogs', { replace: true })
            res.json().then(setUserSignedIn)
        } else {
            res.json().then(e => setErrors(Object.entries(e.error).flat()))
        }
    })
    
  };

  return (
    <div className="container" style={{minHeight: "100vh"}}>
    <div className="container reg-cont mt-5" >
        <div className="reg-title">User Registration</div>
        <form onSubmit={handleSubmit}>

            <div className="reg-input-box">
                <span className='reg-details'>Email</span>
                <input className="form-control form-control-sm" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="reg-input-box">
                <span className='reg-details'>Password</span>
                <input className="form-control form-control-sm" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div className="reg-button">
                <button type="submit" style={{width: "100%", height: "100%", outline: "none", color: "#fff", border: "none", background: "linear-gradient(135deg, #71b7e6, #9b59b6)"}}>Sign Up</button>
            </div>
        </form>

    </div>
    </div>
  );
}

export default SignUp;
