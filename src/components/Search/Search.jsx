import { useEffect, useState } from 'react';

function SearchAlumni() {
  const [alumni, setAlumni] = useState([]);
  const [filteredAlumni, setFilteredAlumni] = useState([]);
  const [selectedCohort, setSelectedCohort] = useState("");
  const [searchIconClicked, setSearchIconClicked] = useState(false);

  useEffect(() => {
    fetch('/profiles')
      .then(response => response.json())
      .then(data => {
        setAlumni(data);
        setFilteredAlumni(data);
      })
      .catch(error => console.error(error));
  }, []);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    const filteredData = alumni.filter((alum) => {
      return alum.name.toLowerCase().includes(query);
    });
    setFilteredAlumni(filteredData);
    setSearchIconClicked(false);
  }

  const handleCohortChange = (event) => {
    setSelectedCohort(event.target.value);
    if (event.target.value === "") {
      setFilteredAlumni(alumni);
    } else {
      const filteredData = alumni.filter((alum) => {
        return alum.cohort === event.target.value;
      });
      setFilteredAlumni(filteredData);
    }
    setSearchIconClicked(false);
  }

  const handleSearchIconClick = () => {
    setSearchIconClicked(true);
  }

  const cohortOptions = ["All", "SDF-T03", "SDT-713"];

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center mt-4">
          <h2>Search for an Alumni</h2>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="input-group mt-4">
            <label className="input-group-text" style={{ width: "auto",height: '40px' }}>
              Filter by cohort:
            </label>
            <select
              className="form-select"
              value={selectedCohort}
              onChange={handleCohortChange}
            >
              {cohortOptions.map((cohort) => (
                <option key={cohort} value={cohort}>
                  {cohort}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="col-md-4">
          <div className="input-group mt-4">
            <input
              type="text"
              className="form-control"
              onChange={handleSearch}
              placeholder="Search a name"
              style={{height: '41px'}}
            />
            <div className="input-group-append">
              <button className="btn btn-secondary" type="button" onClick={handleSearchIconClick}>
                <i style={{ fontSize: "24px" }} className="fa fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        {searchIconClicked && filteredAlumni.map((alumni) => (
          <div key={alumni.id} className="col-md-4 mb-4">
            <div className="card">
              <img
                src={alumni.profilePicture}
                alt={alumni.name}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{alumni.name}</h5>
                <p className="card-text">Email: {alumni.email}</p>
                <p className="card-text">Profession: {alumni.profession}</p>
                <p className="card-text">Cohort: {alumni.cohort}</p>
                <p className="card-text">Bio: {alumni.bio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchAlumni;