import React from "react";
import { Link } from "react-router-dom";
import { useContext, useState } from 'react'
import { AuthContext } from "../AuthContext/AuthContext";

function Login() {

    const { login } = useContext(AuthContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        login(email, password)
    }


    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw', backgroundColor: '#F3F4F6' }}>
            <div className="container text-center rounded-2 shadow-lg p-5 w-50">
                <form onSubmit={handleSubmit} className="flex flex-col">
                    <h1 className="text-2xl font-bold  text-center">Login</h1>
                    <p className="text-gray-500 mb-3 text-center">Login to your account</p>
                    <div className="mb-5">
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control rounded-md border-gray-300 py-2 px-3 focus:outline-none focus:border-bg-black"
                            type="email"
                            id="email"
                            name="email"
                            placeholder="your@email.com"
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control rounded-md border-gray-300 py-2 px-3 w-full focus:outline-none focus:border-bg-black"
                            type="password"
                            id="password"
                            name="password"
                            placeholder="******"
                            required
                        />
                    </div>
                    <button
                        className="bg-black hover:bg-grey-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Login
                    </button>
                    <p className="text-gray-600 text-center mt-5">
                        Don't have an account? <Link to="/signup" className="text-blue-500">Sign Up</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}
export default Login;
