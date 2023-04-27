import React, { useState } from "react";

const CreateProfile = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    social_account: "",
    cohort: "",
    profession: "",
    certificate: null,
    privacy: true,
    profile_picture: null,
    votes: 0,
  });

  const handleChange = (event) => {
    const { name, value, type, files } = event.target;
    if (type === "file") {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formDataToSend = new FormData();
    for (const [key, value] of Object.entries(formData)) {
      formDataToSend.append(key, value);
    }
    fetch("/profiles", {
      method: "POST",
      body: formDataToSend,
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h1>Create Profile</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-4">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group mb-4">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group mb-4">
              <label>Social Account</label>
              <input
                type="text"
                className="form-control"
                name="social_account"
                value={formData.social_account}
                onChange={handleChange}
              />
            </div>
            <div className="form-group mb-4">
              <label>Cohort</label>
              <input
                type="number"
                className="form-control"
                name="cohort"
                value={formData.cohort}
                onChange={handleChange}
              />
            </div>
            <div className="form-group mb-4">
              <label>Profession</label>
              <input
                type="text"
                className="form-control"
                name="profession"
                value={formData.profession}
                onChange={handleChange}
              />
            </div>
            <div className="form-group mb-4">
              <label>Certificate</label>
              <input
                type="file"
                className="form-control"
                name="certificate"
                onChange={handleChange}
              />
            </div>
            <div className="form-group mb-4">
              <div className="d-flex justify-content-center align-items-center">
                <input
                  type="checkbox"
                  className="form-check-input"
                  name="privacy"
                  checked={formData.privacy}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      privacy: event.target.checked,
                    })
                  }
                />
                <label className="form-check-label ms-2">Privacy</label>
              </div>
            </div>

            <div className="form-group mb-4">
              <label>Profile Picture</label>
              <input
                type="file"
                className="form-control"
                name="profile_picture"
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Create Profile
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProfile;
