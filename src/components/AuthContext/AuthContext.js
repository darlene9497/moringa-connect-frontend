import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import NavBar from "../Navbar/NavBar";
export const AuthContext = createContext();
export default function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [change, setOnChange] = useState(false);
  const [first_name, setFirstName]= useState('')
  const [last_name, setLastName]= useState('')
  const [is_admin, setIsAdmin] = useState(false)
  const [username , setUserName] = useState("");
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  // login
  const login = (email, password) => {
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        // console.log(email);
        console.log(response);
        setOnChange(!change);
        sessionStorage.setItem("jwtToken", response.jwt);
        sessionStorage.setItem("user", JSON.stringify(response.user));
        localStorage.setItem("jwtToken", response.jwt);
        localStorage.setItem("user", JSON.stringify(response.user));
        document.cookie = `jwtToken=${response.jwt}; path=/`;
        document.cookie = `user=${JSON.stringify(response.user)}; path=/`;
        if (response.error) {
          // console.log(response.error)
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: response.error,
            footer: '<a href="">Why do I have this issue?</a>',
          });
        } else {
          // setUser(response)
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Logged In Successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        }
      });
  };


  // Register
  const register = (first_name, last_name, email, is_admin, password, is_alumni, cohort) => {
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name,
        last_name,
        is_admin,
        email,
        password,
        is_alumni,
        cohort
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        setOnChange(!change);
        if (response.error) {
          // console.log(response.error)
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: response.error,
            footer: '<a href="">Why do I have this issue?</a>',
          });
        } else {
          // setUser(response)
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Registered successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/login");
        }
      });
  };

  const logout = () => {
    setUser(null);
    sessionStorage.removeItem("jwtToken");
    sessionStorage.removeItem("user");
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("user");
    document.cookie = "jwtToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    navigate("/");
  };


  const contextData = {
    user,
    login,
    register,
    logout,
  };
  // fectch users
  useEffect(() => {
    fetch("http://localhost:3000/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
      });
  }, []);
 
  return (
    <>
      <AuthContext.Provider value={contextData}>
        {children}
      </AuthContext.Provider>
    </>
  );
}