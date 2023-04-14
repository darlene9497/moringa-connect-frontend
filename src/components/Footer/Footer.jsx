import './Footer.css'
import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted' id='footer'>
      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4' id='text-r'>
                <img src='https://moringaschool.com/wp-content/themes/moringa/public/images/logo-white.png' alt='logo' id='foot-img'/>
              <p id='topics'>
                {/* <a href='#!' className='text-reset' id='top'>
                  Alumni
                </a> */}
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Alumni
                </a>
                </p>
                <p>
                <a href='#!' className='text-reset'>
                  Careers
                </a>                
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Contact Us
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Events
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              {/* <h6 className='text-uppercase fw-bold mb-4'>Contact</h6> */}
              <p>
            <MDBIcon icon="home" className="me-2" />
                Ngong Lane, Ngong Lane Plaza, 1st Floor, Nairobi Kenya
              </p>
              <div  className='text-r'>
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
              </div>                                       
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Map goes here</h6>
              {/* <p>
                <a href='#!' className='text-reset'>
                  Angular
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Vue
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Laravel
                </a>
              </p> */}
            </MDBCol>

            {/* <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol> */}

            {/* <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol> */}
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4'>
        © 2023 Moringa School. All rights reserved.
      </div>
    </MDBFooter>
  );
}