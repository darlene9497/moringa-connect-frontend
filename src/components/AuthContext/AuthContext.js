import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [change, setOnChange] = useState(false);

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
        setOnChange(!change);
        sessionStorage.setItem("jwtToken", response.jwt);
        sessionStorage.setItem("user", JSON.stringify(response.user));
        localStorage.setItem("jwtToken", response.jwt);
        localStorage.setItem("user", JSON.stringify(response.user));
        document.cookie = `jwtToken=${response.jwt}; path=/`;
        document.cookie = `user=${JSON.stringify(response.user)}; path=/`;
        if (response.error) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: response.error,
            footer: '<a href="">Why do I have this issue?</a>',
          });
        } else {
          setUser(response.user); // Set the user in the state
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
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: response.error,
            footer: '<a href="">Why do I have this issue?</a>',
          });
        } else {
          setUser(response.user); // Set the user in the state
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

  // Fetch user details on initial mount and store it in the state
  useEffect(() => {
    const jwtToken = sessionStorage.getItem("jwtToken");
    if (jwtToken) {
      fetch("http://localhost:3000/users/me", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwtToken}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setUser(data);
        })
        .catch((error) => {
          console.error("Error fetching user details:", error);
        });
    }
  }, []);

  const contextData = {
    user,
    login,
    register,
    logout,
  };

  return (
    <>
      <AuthContext.Provider value={contextData}>
        {children}
      </AuthContext.Provider>
    </>
  );
}
