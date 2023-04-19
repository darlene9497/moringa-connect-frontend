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

        <MDBCollapse navbar show={showBasic} className='nav-it'>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='/' className='nav' id='nav-or'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            {/* <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' role='button' id='nav-blue' >
                  About
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href='/history'>History</MDBDropdownItem>
                  <MDBDropdownItem link>Mission</MDBDropdownItem>
                  <MDBDropdownItem link>Vision</MDBDropdownItem>
                  <MDBDropdownItem link>Executive Commitee</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem> */}
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='/about' className='nav' id='nav-or'>
                About
              </MDBNavbarLink>
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
            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' role='button' id='nav-or'>
                  Events
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>News</MDBDropdownItem>
                  <MDBDropdownItem link>Reunions</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
            <MDBNavbarItem>
            <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' role='button' id='nav-blue'>
                  Membership
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>Register</MDBDropdownItem>
                  <MDBDropdownItem link>Membership Categories</MDBDropdownItem>
                  <MDBDropdownItem link>Membership Benefits</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}