import React, { useState } from 'react'

function DetailForm() {
    const [name, setName] = useState('') 
    const [email, setEmail] = useState('')
    const [bio, setBio] = useState('')
    const [cohort, setCohort] = useState('')
    const [profession,setProfession] = useState('')
    const [is_active, setIsActive] = useState(true)
    const [privacy, setPrivacy] = useState(true)
    const [user_id, setUserId] = useState('')
    const [image, setImage] = useState([])
   

    const cohorts = ["","SDF-FT2", "SDF-FT3","SDF-FT4","PDF-FT2","SDF-FT2","CSF-PT1","SDF-FT5","SDF-PT3","PDF-FT3","SDF-PT4","SDF-FT6","PDF-FT4","SDF-FT7","CSF-FI2","SDF-PT5"];
    function handleSubmit(event){
        event.preventDefault();
        const data = new FormData();

        data.append("[name]", name)
        data.append("[email]", email)
        data.append("[bio]", bio)
        data.append("[cohort]", cohort)
        data.append("[profession]", profession)
        data.append("[is_active]", is_active)
        data.append("[privacy]", privacy)
        data.append("[user_id]", user_id)
        data.append("[image]", image)

        submitToApi(data)
    }

    function submitToApi(data){
        fetch('/details', {
            method: 'POST',
            body: data
        })
        .then(response => response.json())
        .then(data => console.log(data))
    }

  return (
    <div className="container mt-5">
      <div className="card p-4">
        <h1 className="mb-4">Create Your Profile</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="row">
            <div className="col-md-6">
              <h3>Personal Information</h3>
              <div className="form-group mb-3">
                <label htmlFor="name">Name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                  required
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="email">Email</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  required
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="bio">Bio</label>
                <input
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  type="text"
                  className="form-control"
                  name="bio"
                  id="bio"
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="cohort">Cohort</label>
                <select
                  value={cohort}
                  onChange={(e) => setCohort(e.target.value)}
                  className="form-control"
                  name="cohort"
                  id="cohort"
                  required
                >
                  {cohorts.map((cohort) => (
                    <option key={cohort} value={cohort}>
                      {cohort}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group mb-3">
                <label htmlFor="profession">Profession</label>
                <input
                  value={profession}
                  onChange={(e) => setProfession(e.target.value)}
                  type="text"
                  className="form-control"
                  name="profession"
                  id="profession"
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="image">Image</label>
                <input
                  onChange={(e) => setImage(e.target.files[0])}
                  type="file"
                  className="form-control-file"
                  name="image"
                  id="image"
                />
              </div>
            </div>

            <div className="col-md-6">
              <h3>Privacy Settings</h3>
              <div className="form-group mb-3">
                <label htmlFor="privacy">Profile Visibility</label>
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="privacy"
                    checked={privacy === "public"}
                    onChange={(e) =>
                      setPrivacy(e.target.checked ? "public" : "private")
                    }
                  />
                  <label className="form-check-label" htmlFor="privacy">
                    {privacy === "public" ? "Public" : "Private"}
                  </label>
                </div>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="is_active">Profile Status</label>
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="is_active"
                    checked={is_active}
                    onChange={() => setIsActive(!is_active)}
                  />
                  <label className="form-check-label" htmlFor="is_active">
                    {is_active ? "Active" : "Inactive"}
                  </label>
                </div>
              </div>

              <input
                value={user_id}
                onChange={(e) => setUserId(e.target.value)}
                type="hidden"
                name="user_id"
                id="user_id"
              />

              <button type="submit" className="btn btn-primary">
                Create
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DetailForm
