import React, { useState, useEffect } from 'react';
import './Admin.css'

export default function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      fetch('/users')
        .then(res => res.json())
        .then(data => setUsers(data))
        .catch(err => console.log(err));
    }, []);
  return (
    <>
    <div class="table-responsive-sm" style={{height: '70vh'}}>
      {/* <h1 className='events-header'>Users</h1> */}
      <table class="table table-striped table-hover align-middle">
        <thead>
          <tr>
            {/* <th scope="col">ID</th> */}
            <th scope="col" className='h4 fw-bold'>First Name</th>
            <th scope="col" className='h4 fw-bold'>Last Name</th>
            <th scope="col" className='h4 fw-bold'>Email</th>
            <th scope="col" className='h4 fw-bold'>Cohort</th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
        {users.map((user) =>(
          <tr key={user.id}>
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
            <td>{user.email}</td>
            <td>{user.cohort}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}
