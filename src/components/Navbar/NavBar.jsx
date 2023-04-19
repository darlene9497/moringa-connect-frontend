import './Styles.css'
import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';

export default function NavBar() {
  const [showBasic, setShowBasic] = useState(false);
  
  return (
    <MDBNavbar expand='lg' light bgColor='light' className='navbar'>
      <MDBContainer fluid  className='nav-main'>
        <MDBNavbarBrand className='logo'>
        <img
              src='https://moringaschool.com/wp-content/themes/moringa/public/images/logo.png'
              height='120'
              alt=''
              loading='lazy'
              id='m-logo'
            />
        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic} className='nav-it navbar-collapse'>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='/' className='nav' id='nav-or'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' role='button' id='nav-blue'  >
                  About
                </MDBDropdownToggle>
                <MDBDropdownMenu >
                  <MDBDropdownItem link >History</MDBDropdownItem>
                  <MDBDropdownItem link>Mission</MDBDropdownItem>
                  <MDBDropdownItem link>Vision</MDBDropdownItem>
                  <MDBDropdownItem link>Executive Commitee</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBDropdown>
              <MDBDropdownToggle tag='a' className='nav-link dropdown-toggle' role='button' id='nav-blue' >
                  Community
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link onClick={() => { window.location.href = "/chapters/alumni"; }}>Alumni Connect</MDBDropdownItem>
                  <MDBDropdownItem link onClick={() => { window.location.href = "/chapters"; }}>Alumni Chapters</MDBDropdownItem>
                  <MDBDropdownItem link onClick={() => { window.location.href = "/mentor"; }}>Find a Mentor</MDBDropdownItem>
                  <MDBDropdownItem link onClick={() => { window.location.href = "/news"; }}>News</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
            {/* <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' role='button' id='nav-or'>
                  Careers
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>Job Board</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem> */}
            {/* <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' role='button' id='nav-or'>
                  Fundraisers
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>Donations</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem> */}
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='/' className='nav' id='nav-or'>
                Donation
              </MDBNavbarLink>
            </MDBNavbarItem>            
            <MDBNavbarItem>
            <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' role='button' id='nav-blue'>
                  Membership
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>Categories</MDBDropdownItem>
                  <MDBDropdownItem link>Register</MDBDropdownItem>
                  <MDBDropdownItem link>Login</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='/profile' className='nav' id='nav-or'>
                Profile
              </MDBNavbarLink>       
            </MDBNavbarItem>                        
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}