import React, { useState, useEffect } from 'react';
import userImage from '../../assets/userImage.png';

const Profile = () => {
  const [profilePicture, setProfilePicture] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/profile')
      .then(response => response.json())
      .then(data => {
        if (data.profile_picture) {
          setProfilePicture(data.profile_picture);
        }
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-4" style={{marginBottom:'4rem'}}>
          {profilePicture ? (
            <img style={{ width: "45px", height: "45px", verticalAlign: "middle" }} src={profilePicture} alt="User profile" className="rounded-circle profile-image" />
          ) : (
            <img style={{ width: "45px", height: "45px", verticalAlign: "middle" }} src={userImage} alt="User profile" className="rounded-circle profile-image" />
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
