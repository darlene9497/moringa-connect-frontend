import React from "react";
import {useContext, useState} from 'react'
import { AuthContext } from "../AuthContext/AuthContext";
import { Link } from "react-router-dom";

function Signup () {

    const {register} = useContext(AuthContext)

    const [email, setEmail] = useState('')
    const [first_name, setFirstName]= useState('')
    const [last_name, setLastName]= useState('')
    const [is_admin, setIsAdmin] = useState(false)
    const [is_alumni , setIsAlumni] = useState(false);
    const [cohort , setCohort] = useState("");
    const [password, setPassword] = useState('');
    

    const handleSubmit = (e) => {
        e.preventDefault();
        register(first_name, last_name, email, is_admin, password, is_alumni, cohort);
      };
      


    return (
        <div className="my-5" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="container text-center rounded-2 shadow-lg p-5 w-50">
                <form onSubmit={handleSubmit} className="flex flex-col">
                    <h1 className="text-2xl font-bold  text-center">Sign Up</h1>
                    <p className="text-gray-500 mb-3 text-center">Create an account</p>
                    <div className="mb-4">
                        <input
                            value={first_name}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="border-2 rounded border-gray-300 py-2 px-3 w-full focus:outline-none focus:border-black"
                            type="name"
                            id="first_name"
                            name="first_name"
                            placeholder="First Name"
                            
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            value={last_name}
                            onChange={(e) => setLastName(e.target.value)}
                            className="border-2 rounded border-gray-300 py-2 px-3 w-full focus:outline-none focus:border-black"
                            type="name"
                            id="last_name"
                            name="last_name"
                            placeholder="Last Name"
                        
                        />
                    </div>
                    
                    <div className="mb-4">
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="border-2 rounded border-gray-300 py-2 px-3 w-full focus:outline-none focus:border-black"
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            
                        />
                    </div>

                    <div className="mb-4">
                        <input
                            value={is_admin}
                            onChange={(e) => setIsAdmin(e.target.value)}
                            className="border-2 rounded border-gray-300 py-2 px-3 w-full focus:outline-none focus:border-black"
                            type="hidden"
                            id="is_admin"
                            name="is_admin"
                            placeholder="Email"
                        
                        />
                    </div>

                    <div className="mb-4">
                        <input
                            value={is_alumni}
                            onChange={(e) => setIsAlumni(e.target.value)}
                            className="border-2 rounded border-gray-300 py-2 px-3 w-full focus:outline-none focus:border-black"
                            type="hidden"
                            id="is_alumni"
                            name="is_alumni"
                            placeholder="Name"
                            
                        />
                    </div>

                    <div className="mb-4">
                        <input
                            value={cohort}
                            onChange={(e) => setCohort(e.target.value)}
                            className="border-2 rounded border-gray-300 py-2 px-3 w-full focus:outline-none focus:border-black"
                            type="text"
                            id="cohort"
                            name="cohort"
                            placeholder="Cohort"
                            
                        />
                    </div>

                    

                    <div className="reg-input-box">
                        <input className="border-2 rounded border-gray-300 py-2 px-3 w-full focus:outline-none focus:border-black" type="password" placeholder="Password ***" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <button
                        className="bg-black hover:bg-grey-700 text-white font-bold py-2 px-4 mt-3 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Sign Up
                    </button>
                    <p className="text-gray-600 text-center mt-5">
                    Already have an account? <Link to="/login" className="text-blue-500">Log In</Link>
                    </p>
                </form>
            </div>
    </div>
    )
}

export default Signup;