import React, { useState, useEffect } from "react";
import userImage from "../../assets/userImage.png";
import CreateProfile from "../Profile/CreateProfile";

const Dashboard = () => {
  const [userData, setUserData] = useState({});
  const [isPublic, setIsPublic] = useState(true);
  const [profileImage, setProfileImage] = useState(null);
  const [certificate, setCertificate] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profession,setProfession] = useState("")
  const [socialAccount, setSocialAccount] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/profile")
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
        setIsPublic(data.privacy);
        setName(data.name);
        setEmail(data.email);
        setProfession(data.profession)
        setSocialAccount(data.social_account);
      })
      .catch((error) => console.log(error));
  }, []);

  const handlePrivacyChange = () => {
    setIsPublic(!isPublic);
    fetch("http://localhost:3000/profile", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ privacy: !isPublic }),
    })
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => console.log(error));
  };

  const handleProfileImageChange = (event) => {
    setProfileImage(event.target.files[0]);
  };

  const handleCertificateChange = (event) => {
    setCertificate(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    if (profileImage) {
      formData.append("profileImage", profileImage);
    }
    if (certificate) {
      formData.append("certificate", certificate);
    }
    formData.append("name", name);
    formData.append("email", email);
    formData.append("socialAccount", socialAccount);
    fetch("http://localhost:3000/profile", {
      method: "PUT",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => console.log(error));
  };

  return (
    
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <CreateProfile/>
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
              <div className="row mb-4">
                <div className="col-sm-3">Name:</div>
                <div className="col-sm-9">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-sm-3">Email:</div>
                <div className="col-sm-9">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-sm-3">Profession:</div>
                <div className="col-sm-9">
                  <input
                    type="email"
                    value={profession}
                    onChange={(e) => setProfession(e.target.value)}
                  />
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-sm-3">Social Account:</div>
                <div className="col-sm-9">
                  <input
                    type="text"
                    value={socialAccount}
                    onChange={(e) => setSocialAccount(e.target.value)}
                  />
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-sm-3">Profile Picture:</div>
                <div className="col-sm-9">
                  <input type="file" onChange={handleProfileImageChange} />
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-sm-3">Certificate:</div>
                <div className="col-sm-9">
                  <input type="file" onChange={handleCertificateChange} />
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-sm-3">Public Profile:</div>
                <div className="col-sm-9">
                  <input
                    type="checkbox"
                    checked={isPublic}
                    onChange={handlePrivacyChange}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleSubmit}
                  >
                    Save Changes
                  </button>
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
