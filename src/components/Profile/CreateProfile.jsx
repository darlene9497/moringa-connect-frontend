import React,{ useState }  from 'react'

const CreateProfile = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [profession, setProfession] = useState("");
    const [socialAccount, setSocialAccount] = useState("");
    const [profileImage, setProfileImage] = useState(null);
    const [certificate, setCertificate] = useState(null);
  
    const handleNameChange = (event) => {
      setName(event.target.value);
    };
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handleProfessionChange = (event) => {
      setProfession(event.target.value);
    };
  
    const handleSocialAccountChange = (event) => {
      setSocialAccount(event.target.value);
    };
  
    const handleProfileImageChange = (event) => {
      setProfileImage(event.target.files[0]);
    };
  
    const handleCertificateChange = (event) => {
      setCertificate(event.target.files[0]);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // code to submit form data to server
    };
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title mb-4">Create Profile</h5>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={handleNameChange}
              required
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
              value={email}
              onChange={handleEmailChange}
              required
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
              value={profession}
              onChange={handleProfessionChange}
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
              value={socialAccount}
              onChange={handleSocialAccountChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="profileImage" className="form-label">
              Profile Image
            </label>
            <input
              type="file"
              className="form-control"
              id="profileImage"
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
              onChange={handleCertificateChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Create Profile
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateProfile