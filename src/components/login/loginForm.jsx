import React, { useState } from "react";
<<<<<<< HEAD
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
=======
import { useNavigate,Link } from "react-router-dom";
>>>>>>> 2245e3400f1558873ccc7fe6b4e2cb3b1bf87ff7
import './Styles.css'


function LoginForm({setUserSignedIn}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate()
  
    

  const handleSubmit = (event) => {
    event.preventDefault();
    const loginDetails = {email, password}
    

    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginDetails)
    })
    .then((res)=> {
        if(res.ok){
            res.json().then((user)=>{
                navigate('/', { replace: true })
                setUserSignedIn(user)
            })
        } else{
            res.json().then((errors)=>{
                console.error(errors)
            })
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
                        <h4>Login to Your Account</h4>
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
                                    <button type="submit" className="login-btn" >Login</button>
                                </div>
                            </div>
<<<<<<< HEAD
=======
                            <Link  to="/signup">
>>>>>>> 2245e3400f1558873ccc7fe6b4e2cb3b1bf87ff7
                            <div className="form-row">
                                <div className="col-lg-7">
                                <Link to="/login" className ="link-btn" >Don't have an account ? Register Here</Link>
                                </div>
                            </div>
<<<<<<< HEAD
=======
                            </Link>
>>>>>>> 2245e3400f1558873ccc7fe6b4e2cb3b1bf87ff7
                            
                            
                        </form>
                        {errorMessage && <p>{errorMessage}</p>}
                    </div>
                </div>
            </div>
        </section>
      
    </div>
  );
}

export default LoginForm;
