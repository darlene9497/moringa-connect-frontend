import { useEffect, useState } from 'react';

function SearchAlumni() {
  const [alumni, setAlumni] = useState([]);
  const [filteredAlumni, setFilteredAlumni] = useState([]);
  const [selectedCohort, setSelectedCohort] = useState("");
  const [searchIconClicked, setSearchIconClicked] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch('/details')
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
    setSearchQuery(query);
    setSearchIconClicked(false);
  }

  const handleCohortChange = (event) => {
    setSelectedCohort(event.target.value);
    if (event.target.value === "All") {
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

  const cohortOptions = ["All", "SDF-FT2", "SDF-FT3","SDF-FT4","PDF-FT2","SDF-FT2","CSF-PT1","SDF-FT5","SDF-PT3","PDF-FT3","SDF-PT4","SDF-FT6","PDF-FT4","SDF-FT7","CSF-FI2","SDF-PT5"];

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
            <label className="input-group-text" style={{ height: "40px" }}>
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
              style={{ height: "41px" }}
            />
            <div className="input-group-append">
              <button
                className="btn btn-secondary"
                type="button"
                onClick={handleSearchIconClick}
              >
                <i style={{ fontSize: "24px" }} className="fa fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {(searchIconClicked || searchQuery === "") &&
          filteredAlumni.map((alumni) => (
            <div key={alumni.id} className="col-md-4 mb-4">
              <div className="card card-lg" style={{ width: "20rem" }}>
                <img
                  src={alumni.image_url}
                  alt={alumni.name}
                  style={{ flex: "1 1 auto", objectFit: "cover" }}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">{alumni.name}</h5>
                  <p className="card-text">Email: {alumni.email}</p>
                  <p className="card-text">Cohort: {alumni.cohort}</p>
                  <p className="card-text">Bio: {alumni.bio}</p>
                  {alumni.is_active ? (
                    <p className="card-text">
                      <i
                        style={{ color: "green", fontSize: "24px" }}
                        className="fa fa-check-circle"
                      ></i>{" "}
                      Active
                    </p>
                  ) : (
                    <p className="card-text">
                      <i
                        style={{ color: "red", fontSize: "24px" }}
                        className="fa fa-times-circle"
                      ></i>{" "}
                      Not active
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SearchAlumni;