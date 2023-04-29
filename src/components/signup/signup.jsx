import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import './Styles.css'

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
            navigate('/', { replace: true })
            res.json().then(setUserSignedIn)
        } else {
            res.json().then(e => setErrors(Object.entries(e.error).flat()))
        }
    })
    
  };

  return (
    <div className="container ps-0" style={{minHeight: "100vh"}}>

    <section className="Form ps-0 mt-5">
        <div className="container">
            <div className="row no-gutters">
                <div className="col-lg-5">
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/78c4af118001599.608076cf95739.jpg" alt="" className="img-fluid login-img" />
                </div>
                <div className="col-lg-7 px-5 pt-5">
                    <h1 className="font-weight-bold py-3">Moringa Connect</h1>
                    <h4>Create New Account</h4>
                    <form onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="col-lg-7">
                                <input type="text" className="form-control my-5 p-2" placeholder="email" value={email} onChange={(event) => { return setEmail(event.target.value)}} />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-lg-7">
                                <input type="password" className="form-control my-5 p-2" placeholder="******" value={password} onChange={(event) => { return setPassword(event.target.value);}} />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-lg-7">
                                <button type="submit" className="login-btn" >Sign Up</button>
                            </div>
                        </div>
                        <Link  to="/login">
                            <div className="form-row">
                                <div className="col-lg-7">
                                    <button  className ="link-btn" >Already have an account? Login Here</button>
                                </div>
                            </div>
                            </Link>
                    </form>
                    {/* {errorMessage && <p>{errorMessage}</p>} */}
                </div>
            </div>
        </div>
    </section>
  
</div>
  );
}

export default SignUp;
