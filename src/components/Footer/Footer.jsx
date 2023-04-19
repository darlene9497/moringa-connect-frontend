import './Footer.css'
import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted' id='footer'>
      <section >
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="2" lg="4" xl="3" className='mx-auto mb-4' id='text-r'>
                <img src='https://moringaschool.com/wp-content/themes/moringa/public/images/logo-white.png' alt='logo' id='foot-img'/>
              <p id='topics'>
              </p>
                <p>
                <a href='#!' className='text-reset'>
                  Community
                </a>                
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Events
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Membership
                </a>
              </p>
            </MDBCol>

            <MDBCol md="8" lg="3" xl="3" className='mx-auto mb-md-0 mb-4' id='contact-details'>
                <p className='text-r'>
            <MDBIcon icon="home" className="me-2" />
                 Ngong Lane, Ngong Lane Plaza, 1st Floor, Nairobi Kenya
              </p>
              <div className='text-r'>
                <p>
                  <MDBIcon icon="phone" className="me-3" /> 0205002167 (General Enquiries)
                </p>
                <p>
                  <MDBIcon icon="phone" className="me-3" /> 020 7643533 (Admissions)
                </p>
                <p>
                  <MDBIcon icon="phone" className="me-3" /> 0738368319 (Corporate Inquiries)

                </p>
                <p>
                  <MDBIcon icon="phone" className="me-3" /> 0795872461 (WhatsApp)
                </p>                                                        
                <p>
                  <MDBIcon icon="envelope" className="me-3" />
                  contact@moringaschool.com 
                </p>
                <p>
                  <MDBIcon icon="envelope" className="me-3" />
                  admissions@moringaschool.com
                </p>
                <p>
                  <MDBIcon icon="envelope" className="me-3" />
                  corporate@moringaschool.com
                </p>   
                <p>
                  <MDBIcon icon="envelope" className="me-3" />
                  P.O Box 28860 - 00100, Nairobi
                </p> 
                <div className='footer-icons'>
                <a href='https://web.facebook.com/moringaschool/?_rdc=1&_rdr' className='me-4 text-reset'>
                  <MDBIcon color='secondary' fab icon='facebook-f' />
                </a>
                <a href='https://www.linkedin.com/company/moringa-school' className='me-4 text-reset'>
                  <MDBIcon fab icon="linkedin" />
                </a>                
                <a href='https://twitter.com/moringaschool' className='me-4 text-reset'>
                  <MDBIcon color='secondary' fab icon='twitter' />
                </a>
                <a href='https://www.youtube.com/MoringaSchoolVideos/videos' className='me-4 text-reset'>
                  <MDBIcon color='secondary' fab icon='youtube' />
                </a>
              </div>
              </div>                                       
            </MDBCol>

             <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <iframe src="https://maps.google.com/maps?q=MQXM+RR5,+Ngong+Ln,+Nairobi,+Kenya&output=embed"  title='Location' style={{width:"350px", height:"300px", frameborder:"0", style:"border:0"}} allowFullScreen></iframe>
            </MDBCol> 
          </MDBRow>
        </MDBContainer>
      </section>
   
      <div className='text-center p-4' id='copyright'>
        © 2023 Moringa School. All rights reserved.
      </div>
    </MDBFooter>
  );
}