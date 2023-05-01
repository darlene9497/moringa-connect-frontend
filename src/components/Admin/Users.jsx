import React, { useState, useEffect } from 'react';
import './Admin.css'
import SideNav from './SideNav';

export default function Users() {
    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
      fetch('/profiles')
        .then(res => res.json())
        .then(data => setProfiles(data))
        .catch(err => console.log(err));
    }, []);
  return (
    <>
    <SideNav />
    <div class="table-responsive-sm" style={{height: '70vh'}}>
      <h1 className='events-header'>Users</h1>
      <table class="table table-striped table-hover align-middle">
        <thead>
          <tr>
            {/* <th scope="col">ID</th> */}
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Cohort</th>
            <th scope="col">Graduation year</th>
            <th scope="col">Profession</th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
        {profiles.map((profile) =>(
          <tr key={profile.name}>
            {/* <td>{profile.id}</td> */}
            <td>{profile.name}</td>
            <td>{profile.email}</td>
            <td>{profile.cohort}</td>
            <td>{profile.graduation_year}</td>
            <td>{profile.profession}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}
