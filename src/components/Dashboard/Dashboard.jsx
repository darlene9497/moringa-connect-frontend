import React, { useState, useEffect } from "react";
import userImage from "../../assets/userImage.png";

const Dashboard = () => {
  const [userData, setUserData] = useState({});
  const [isPublic, setIsPublic] = useState(true);

  useEffect(() => {
    fetch("/profiles")
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
        setIsPublic(data.privacy);
      })
      .catch((error) => console.log(error));
  }, []);

  const handlePrivacyToggle = () => {
    setIsPublic(!isPublic);
    fetch("/profiles", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ privacy: !isPublic }),
    })
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => console.log(error));
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <img
                  src={userData.profile_picture || userImage}
                  alt="Profile"
                  className="rounded-circle profile-image me-3"
                  width="75"
                  height="75"
                />
                <h5 className="card-title mb-0">
                  Welcome to your Dashboard, {userData.name}!
                </h5>
              </div>
              <hr className="my-4" />
              <div className="row">
              <div className="col-lg-6 text-center">
  <h6 className="mb-3 ">Personal Information</h6>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">
      Name
    </label>
    <div>{userData.name}</div>
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">
      Email
    </label>
    <div>{userData.email}</div>
  </div>
  <div className="mb-3">
    <label htmlFor="cohort" className="form-label">
      Cohort
    </label>
    <div>{userData.cohort}</div>
  </div>
  <div className="mb-3">
    <label htmlFor="graduation_year" className="form-label">
      Graduation year
    </label>
    <div>{userData.graduation_year}</div>
  </div>
  <div className="mb-3">
    <label htmlFor="profession" className="form-label">
      Profession
    </label>
    <div>{userData.profession}</div>
  </div>
  <div className="mb-3">
    <label htmlFor="socialAccount" className="form-label">
      Social Account
    </label>
    <div>{userData.social_account}</div>
  </div>
  <div className="mb-3">
    <label htmlFor="bio" className="form-label">
      Bio
    </label>
    <div>{userData.bio}</div>
  </div>
</div>
          <hr className="my-4" />
          <div className="row">
            <div className="col-lg-6">
              <h6 className="mb-3">Privacy Settings</h6>
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={isPublic}
                  onChange={handlePrivacyToggle}
                />
                <label className="form-check-label">
                  Make my profile public
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
);
};

export default Dashboard;