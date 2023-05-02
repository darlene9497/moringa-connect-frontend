import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import './Styles.css'

function SignUp({setUserSignedIn}) {
    const [name, setName] = useState('') 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [bio, setBio] = useState('')
    const [cohort, setCohort] = useState('')
    const [is_active, setIsActive] = useState(true)
    const [image, setImage] = useState([])


  const navigate = useNavigate()
  const [login, setLogin] = useState('')
  const [errors, setErrors] = useState([])

  function handleSubmit(event){
    event.preventDefault();
    const data = new FormData();

    data.append("[name]", name)
    data.append("[email]", email)
    data.append("[password]", password)
    // data.append("[bio]", bio)
    data.append("[cohort]", cohort)
    data.append("[is_active]", is_active)
    data.append("[image]", image)

    submitToApi(data)
}


  const submitToApi = (data) => {
    fetch('/users', {
        method: 'POST',
        body: data
        // headers: {
        //     'Content-Type': 'application/json'
        // },
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
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div className="row">
                            <div className="col-md-6">
                            <h3>Personal Information</h3>
                            <div className="form-group mb-3">
                                <label htmlFor="name">Name</label>
                                <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                className="form-control"
                                name="name"
                                id="name"
                                required
                                />
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="email">Email</label>
                                <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                required
                                />
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="password">password</label>
                                <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                className="form-control"
                                name="password"
                                id="password"
                                required
                                />
                            </div>

                            {/* <div className="form-group mb-3">
                                <label htmlFor="bio">Bio</label>
                                <input
                                value={bio}
                                onChange={(e) => setBio(e.target.value)}
                                type="text"
                                className="form-control"
                                name="bio"
                                id="bio"
                                />
                            </div> */}

                            <div className="form-group mb-3">
                                <label htmlFor="cohort">Cohort</label>
                                <input
                                value={cohort}
                                onChange={(e) => setCohort(e.target.value)}
                                type="text"
                                className="form-control"
                                name="cohort"
                                id="cohort"
                                required
                                />
                                
                            </div>

                            <div className="form-group mb-3">
                                {/* <label htmlFor="is_active">is_active</label> */}
                                <input
                                value={is_active}
                                onChange={(e) => setIsActive(e.target.value)}
                                type="hidden"
                                className="form-control"
                                name="is_active"
                                id="is_active"
                                required
                                />
                                
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="image">Choose Profile Image</label>
                                <input
                                onChange={(e) => setImage(e.target.files[0])}
                                type="file"
                                className="form-control-file"
                                name="image"
                                id="image"
                                />
                            </div>
                            </div>

                            <div className="col-md-6">
                            <button type="submit" className="btn btn-primary">
                                Create
                            </button>
                            </div>
                        </div>
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
