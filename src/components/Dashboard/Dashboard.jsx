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
  const [profession, setProfession] = useState("");
  const [socialAccount, setSocialAccount] = useState("");
  const [bio, setBio] = useState("");

  useEffect(() => {
    fetch("/profiles")
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
        setIsPublic(data.privacy);
        setName(data.name);
        setEmail(data.email);
        setProfession(data.profession);
        setSocialAccount(data.social_account);
        setBio(data.bio);
      })
      .catch((error) => console.log(error));
  }, []);

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
    formData.append("profession", profession);
    formData.append("socialAccount", socialAccount);
    formData.append("bio", bio);
    fetch("/profiles", {
      method: "GET",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => console.log(error));
  };

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
          <CreateProfile />
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
                <div className="col-lg-6">
                  <h6 className="mb-3">Personal Information</h6>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="profession" className="form-label">
                        Profession
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="profession"
                        name="profession"
                        value={profession}
                        onChange={(e) => setProfession(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="socialAccount" className="form-label">
                        Social Account
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="socialAccount"
                        name="socialAccount"
                        value={socialAccount}
                        onChange={(e) => setSocialAccount(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="bio" className="form-label">
                        Bio
                      </label>
                      <textarea
                        className="form-control"
                        id="bio"
                        name="bio"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                      ></textarea>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="profileImage" className="form-label">
                        Profile Picture
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        id="profileImage"
                        name="profileImage"
                        accept="image/*"
                        onChange={handleProfileImageChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="certificate" className="form-label">
                        Certificate
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        id="certificate"
                        name="certificate"
                        accept="application/pdf"
                        onChange={handleCertificateChange}
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Save Changes
                    </button>
                  </form>
                </div>
                <div className="col-lg-6">
                  <h6 className="mb-3">Privacy Settings</h6>
                  <div className="form-check mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="privacyToggle"
                      checked={isPublic}
                      onChange={handlePrivacyToggle}
                    />
                    <label className="form-check-label" htmlFor="privacyToggle">
                      Profile is {isPublic ? "Public" : "Private"}
                    </label>
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
