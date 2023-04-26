import React, { useState } from "react";
import './Search.css'

const alumniData = [
  {
    name: "Mercy Nzau",
    email: "mercy.nzau@example.com",
    cohort: "2021",
    profilePicture: "https://i.pinimg.com/236x/66/c3/31/66c331a7757b9d87397a05c46a678527.jpg",
    bio: "Experienced software engineer with expertise in full-stack development, including proficiency in JavaScript, React, and Ruby on Rails.",
    profession: "Software Engineer"
  },
  {
    name: "John Doe",
    email: "john.doe@example.com",
    cohort: "2018",
    profilePicture: "https://i.pinimg.com/564x/47/91/f0/4791f027dcad85f85883359daf191c5d.jpg",
    bio: " I'm a UI/UX designer with a passion for creating beautiful, intuitive interfaces that are both user-friendly and visually stunning. ",
    profession: "UI/UX Designer"
  },
  {
    name: "Amani Imani",
    email: "amani.imani@example.com",
    cohort: "2020",
    profilePicture: "https://i.pinimg.com/236x/0a/de/3e/0ade3ec185e090494d4db87c30be7bac.jpg",
    bio: "I'm a data scientist with expertise in analyzing complex data sets to identify patterns and insights that can drive business decisions. I have experience in developing statistical models, building predictive algorithms, and performing data mining and machine learning techniques",
    profession: "Data Scientist"
  },
];

const SearchAlumni = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredAlumni = alumniData.filter((alumni) =>
    alumni.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input type="text" onChange={handleChange} placeholder="Search alumni" />
      <table>
        <thead>
          <tr>
            <th>Profile</th>
            <th>Name</th>
            <th>Email</th>
            <th>Profession</th> 
            <th>Cohort</th>
            <th>Bio</th>
          </tr>
        </thead>
        <tbody>
          {filteredAlumni.map((alumni) => (
            <tr key={alumni.email}>
              <td className="profile-picture">
                <img src={alumni.profilePicture} alt={alumni.name} />
              </td>
              <td>{alumni.name}</td>
              <td>{alumni.email}</td>
              <td>{alumni.profession}</td>
              <td>{alumni.cohort}</td>
              <td>{alumni.bio}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchAlumni; 

