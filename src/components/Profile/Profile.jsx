import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import userImage from '../../assets/userImage.png';

const Profile = (props) => {
  const [profilePicture, setProfilePicture] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/profile')
      .then(response => response.json())
      .then(data => {
        if (data.profile_picture) {
          setProfilePicture(data.profile_picture);
        }
      })
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    const handleOutsideClick = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [dropdownRef]);

  const handleProfileClick = () => {
    setDropdownOpen(prevState => !prevState);
  };

//   function handleLogOut() {
//     fetch("/logout", { method: "DELETE" }).then((r) => {
//       if (r.ok) {
//         navigate('/', { replace: true })
//         props.setUserSignedIn(false);
//       }
//     });
// }

  const handleLogoutClick = () => {
    fetch('/logout', {
      method: 'DELETE',
      credentials: 'include', // send cookies to server
    })
      .then(response => {
        if (response.ok) {
          navigate('/login'); // redirect to login page
          props.setUserSignedIn(false);
        } else {
          console.error('Failed to logout');
        }
      })
      .catch(error => console.error(error));
  };

  return (
    <div className="container">
      <div className="col-4" style={{ marginBottom: '3rem',marginRight: '2rem' }}>
        <div style={{ position: 'relative' }}>
          <img
            style={{ width: '45px', height: '45px', verticalAlign: 'middle', cursor: 'pointer' }}
            src={profilePicture || userImage}
            alt="User profile"
            className="rounded-circle profile-image"
            onClick={handleProfileClick}
          />
          {dropdownOpen && (
            <div ref={dropdownRef} className="dropdown-menu dropdown-menu-right show" style={{ marginTop: '0.5rem'}}>
              <Link to="/create-profile" className="dropdown-item" style={{ color: 'inherit' }}>
                Create Profile
              </Link>
              <div className="dropdown-divider"></div>
              <Link to="/dashboard" className="dropdown-item" style={{ color: 'inherit' }}>
                Dashboard
              </Link>
              <div className="dropdown-divider"></div>
              <div className="dropdown-item" style={{ cursor: 'pointer' }} onClick={handleLogoutClick}>
                Logout
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
