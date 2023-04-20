// import { Link, Outlet } from "react-router-dom";
// import './Styles.css'

// const NavBar = () => {
//   return (
//     <>
//     <nav className="navbar navbar-expand-lg bg-body-tertiary">
//   <div className="container-fluid">
//     <img className="logo" alt="logo"
//               src='https://moringaschool.com/wp-content/themes/moringa/public/images/logo.png'
//               height='70'
//               loading='lazy'
//               id='m-logo'
//     />
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//         {/* <li className="nav-item">
//           <Link to ="/" className="nav-link active" aria-current="page">
//             Alumni
//           </Link>
//         </li> */}
//         <li  className="nav-item">
//           <Link to ="/about" className="nav-link active" aria-current="page">
//               Alumni
//           </Link>
//         </li>
//  <li  className="nav-item">
//           <Link to ="/community" className="nav-link active" aria-current="page">
//               Community
//           </Link>
//         </li>
//         {/* <li className="nav-item">
//           <Link to ="/fundraiser" className="nav-link active" aria-current="page">
//               Alumni Chapter
//           </Link>
//         </li> */}
//       {/* <li className="nav-item">
//           <Link to ="/fundraiser" className="nav-link active" aria-current="page">
//               Alumni Connect
//           </Link>
//       </li> */}
//       <li className="nav-item">
//           <Link to ="/projects" className="nav-link active" aria-current="page">
//               Projects
//           </Link>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>
// <Outlet />
// </>
//   )
// }

// export default NavBar

import React from 'react';
import { Link, Outlet } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid justify-content-between">
          <div className="d-flex align-items-center">
            <img className="logo me-4" alt="logo"
              src='https://moringaschool.com/wp-content/themes/moringa/public/images/logo.png'
              height='70'
              loading='lazy'
              id='m-logo'
            />
            {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button> */}
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Alumni
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link" aria-current="page">
                  Community
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link to="/alumni-connect" className="nav-link" aria-current="page">
                  Alumni Connect
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/alumni-chapter" className="nav-link" aria-current="page">
                  Alumni Chapter
                </Link>
              </li> */}
              <li className="nav-item">
                <Link to="/projects" className="nav-link" aria-current="page">
                  Projects
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};
export default NavBar;