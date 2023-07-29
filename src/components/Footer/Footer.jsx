import './Footer.css';
import React from 'react';
export default function Footer() {
  return (
    <>
      <div className="container" /*style={{backgroundColor: "#00004d"}}*/>
        <footer className="py-5" >
          <div className="row">
            <div className="col-12 col-md-2 col-lg-3 mb-3 px-3">
              <ul className="nav flex-column">
                <li>
                  <img src='https://moringaschool.com/wp-content/themes/moringa/public/images/logo-white.png' alt='logo' className='mb-4' width='275' height='70'/>
                </li>
                <li><a href='/alumni' className='text-reset'>Community</a></li>
                <li><a href='/community' className='text-reset'>Alumni</a></li>
                <li><a href='/projects' className='text-reset'>Projects</a></li>
              </ul>
            </div>

            <div className="col-12 col-md-5 col-lg-4 ms-1 mb-3 px-3">
              <ul className="nav flex-column">
                <li style={{marginBottom: '1.5rem'}}><i className='fas fa-home me-3'></i>Ngong Lane, Ngong Lane Plaza, 1st Floor, Nairobi Kenya</li>
                 <li style={{marginBottom: '1.5rem'}}><i className='fas fa-phone me-3'></i>0205002167 (General Enquiries)</li>
                 <li style={{marginBottom: '1.5rem'}}><i className='fas fa-phone me-3'></i>020 7643533 (Admissions)</li>
                 <li style={{marginBottom: '1.5rem'}}><i className='fas fa-phone me-3'></i>0738368319 (Corporate Inquiries)</li>
                 <li style={{marginBottom: '1.5rem'}}><i className='fas fa-phone me-3'></i>0795872461 (WhatsApp)</li>
                 <li style={{marginBottom: '1.5rem'}}><i className='fas fa-envelope me-3'></i>contact@moringaschool.com</li>
                 <li style={{marginBottom: '1.5rem'}}><i className='fas fa-envelope me-3'></i>admissions@moringaschool.com</li>
                 <li style={{marginBottom: '1.5rem'}}><i className='fas fa-envelope me-3'></i>corporate@moringaschool.com</li>
                 <li style={{marginBottom: '1.5rem'}}><i className='fas fa-envelope me-3'></i>P.O Box 28860 - 00100, Nairobi</li>
              </ul>
            </div>

            <div className="col-md-3 col-lg-3 offset-md-1 mb-3 px-3">
              <div className='mb-4 p-0 m-0'>
                <iframe
                  src='https:maps.google.com/maps?q=MQXM+RR5,+Ngong+Ln,+Nairobi,+Kenya&output=embed'
                  style={{ width: '240px', height: '250px', border: '0' }}
                  allowFullScreen title='Location'
                ></iframe>
              </div>
            </div>
          </div>

          <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 px-5 border-top">
            <p>© 2023 Moringa School. All rights reserved.</p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3">
                <a href='https://web.facebook.com/moringaschool/?_rdc=1&_rdr' className='me-4 text-reset'>
                   <i className='fab fa-facebook-f' style={{ color: 'var(--bs-secondary)' }}></i>
                </a>
              </li>

              <li className="ms-3">
                <a href='https://www.linkedin.com/company/moringa-school' className='me-4 text-reset'>
                   <i className='fab fa-linkedin' style={{ color: 'var(--bs-secondary)' }}></i>
                </a>
              </li>

              <li className="ms-3">
                <a href='https://twitter.com/moringaschool' className='me-4 text-reset'>
                   <i className='fab fa-twitter' style={{ color: 'var(--bs-secondary)' }}></i>
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>











    // <div className='container p-0 m-0'>
    //   <footer className='bg-light text-muted py-1 mt-4' id='footer'>
    //     <div className='row mt-5 g-3'>
    //       <div className='col-md-3'>
    //         <img src='https://moringaschool.com/wp-content/themes/moringa/public/images/logo-white.png' alt='logo' className='mb-4' width='275' height='70'/>
    //         <ul className='list-unstyled'>
    //           <li><a href='/alumni' className='text-reset'>Community</a></li>
    //           <li><a href='/community' className='text-reset'>Alumni</a></li>
    //           <li><a href='/projects' className='text-reset'>Projects</a></li>
    //         </ul>
    //       </div>
    //       <div className='col-md-6'>
    //         <ul className='list-unstyled'>
    //           <li style={{marginBottom: '1.5rem'}}><i className='fas fa-home me-3'></i>Ngong Lane, Ngong Lane Plaza, 1st Floor, Nairobi Kenya</li>
    //           <li style={{marginBottom: '1.5rem'}}><i className='fas fa-phone me-3'></i>0205002167 (General Enquiries)</li>
    //           <li style={{marginBottom: '1.5rem'}}><i className='fas fa-phone me-3'></i>020 7643533 (Admissions)</li>
    //           <li style={{marginBottom: '1.5rem'}}><i className='fas fa-phone me-3'></i>0738368319 (Corporate Inquiries)</li>
    //           <li style={{marginBottom: '1.5rem'}}><i className='fas fa-phone me-3'></i>0795872461 (WhatsApp)</li>
    //           <li style={{marginBottom: '1.5rem'}}><i className='fas fa-envelope me-3'></i>contact@moringaschool.com</li>
    //           <li style={{marginBottom: '1.5rem'}}><i className='fas fa-envelope me-3'></i>admissions@moringaschool.com</li>
    //           <li style={{marginBottom: '1.5rem'}}><i className='fas fa-envelope me-3'></i>corporate@moringaschool.com</li>
    //           <li style={{marginBottom: '1.5rem'}}><i className='fas fa-envelope me-3'></i>P.O Box 28860 - 00100, Nairobi</li>
    //         </ul>
    //         <div className='footer-icons' style={{display: 'flex', justifyContent: 'center', paddingTop: '2em'}}>
    //           <a href='https://web.facebook.com/moringaschool/?_rdc=1&_rdr' className='me-4 text-reset'>
    //             <i className='fab fa-facebook-f' style={{ color: 'var(--bs-secondary)' }}></i>
    //           </a>
    //           <a href='https://www.linkedin.com/company/moringa-school' className='me-4 text-reset'>
    //             <i className='fab fa-linkedin' style={{ color: 'var(--bs-secondary)' }}></i>
    //           </a>
    //           <a href='https://twitter.com/moringaschool' className='me-4 text-reset'>
    //             <i className='fab fa-twitter' style={{ color: 'var(--bs-secondary)' }}></i>
    //           </a>
    //         </div>
    //       </div>
    //       <div className='col-md-3'>
    //         <div className='mb-4'>
    //           <iframe
    //             src='https://maps.google.com/maps?q=MQXM+RR5,+Ngong+Ln,+Nairobi,+Kenya&output=embed'
    //             style={{ width: '250px', height: '250px', border: '0' }}
    //             allowFullScreen title='Location'
    //           ></iframe>
    //         </div>
    //         <br />
    //       </div>
    //     </div>
    //     <hr />
    //     <div className='text-center'>
    //       <p className='mt-3 mb-0'>
    //         © 2023 Moringa School. All rights reserved.
    //       </p>
    //     </div>
    //   </footer>
    // </div>
  )
}