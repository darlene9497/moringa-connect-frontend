import React from 'react';
import './Community.css'
import MentorHero from './MentorHero'
import {
  MDBContainer,
  MDBNavbar,
  MDBBtn,
  MDBInputGroup, 
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardText,
  MDBPopover,
  MDBPopoverBody,
  MDBPopoverHeader, 
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';



export default function Mentor(){
    return(
        <div id='mentor-body'>
            <MentorHero />
                {/* search button */}
                {/* <p> WTF</p> */}
                <MDBNavbar light bgColor='light' id='search-btn'>
                    <MDBContainer fluid>
                        <MDBInputGroup tag="form" className='d-flex w-auto mb-3'>
                        <input className='form-control' placeholder="Type query" aria-label="Search" type='Search' />
                        <MDBBtn outline>Search</MDBBtn>
                        </MDBInputGroup>
                    </MDBContainer>
                </MDBNavbar>

                {/* User/mentor details */}   
                {/* side nav */}
                <div id='mentor-card'>
                    <div className="side-container">
                        <ul className='mentor-sidenav'>
                            <li>Mentorship overview</li>
                            <li id='mentor-li'>Item 1</li>
                            <li id='mentor-li'>Item 2</li>
                            <li id='mentor-li'>Item 3</li>
                            <li id='mentor-li'>Item 3</li>
                            <li id='mentor-li'>Item 3</li>
                            <li id='mentor-li'>Item 3</li>
                            <li id='mentor-li'>Item 3</li>
                        </ul>
                    </div>  
                    <div id='mentor-info'>
                        <MDBCard className='mb-3' id='m-card'>
                        <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/182.webp' alt='...' position='top' id='mentor-img' />
                            <MDBCardBody id='mentortext'>
                                <MDBCardText>
                                Name: <br />
                                Description: Some quick example text to build on the card title and make up the bulk of the card's content.<br />
                                Skills:
                                {/* <MDBListGroup flush>
                                    <MDBListGroupItem>Cras justo odio</MDBListGroupItem>
                                    <MDBListGroupItem>Dapibus ac facilisis in</MDBListGroupItem>
                                    <MDBListGroupItem>Vestibulum at eros</MDBListGroupItem>
                                </MDBListGroup> */}
                                </MDBCardText>
                                {/* popover */}
                                <MDBPopover size='lg' color='primary' btnChildren='Connect' style={{marginTop: '2em'}}>
                                    <MDBPopoverHeader>Social media:</MDBPopoverHeader>
                                    <MDBPopoverBody><MDBIcon fab icon="linkedin" />: </MDBPopoverBody>
                                </MDBPopover>
                            </MDBCardBody>
                        </MDBCard>  
                        <MDBCard className='mb-3' id='m-card'>
                        <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/182.webp' alt='...' position='top' id='mentor-img' />
                            <MDBCardBody id='mentortext'>
                                <MDBCardText>
                                Name: <br />
                                Description: Some quick example text to build on the card title and make up the bulk of the card's content.<br />
                                Skills:
                                {/* <MDBListGroup flush>
                                    <MDBListGroupItem>Cras justo odio</MDBListGroupItem>
                                    <MDBListGroupItem>Dapibus ac facilisis in</MDBListGroupItem>
                                    <MDBListGroupItem>Vestibulum at eros</MDBListGroupItem>
                                </MDBListGroup> */}
                                </MDBCardText>
                                {/* popover */}
                                <MDBPopover size='lg' color='primary' btnChildren='Connect' style={{marginTop: '2em'}}>
                                    <MDBPopoverHeader>Social media:</MDBPopoverHeader>
                                    <MDBPopoverBody><MDBIcon fab icon="linkedin" />: </MDBPopoverBody>
                                </MDBPopover>
                            </MDBCardBody>
                        </MDBCard>
                        <MDBCard className='mb-3' id='m-card'>
                        <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/182.webp' alt='...' position='top' id='mentor-img' />
                            <MDBCardBody id='mentortext'>
                                <MDBCardText>
                                Name: <br />
                                Description: Some quick example text to build on the card title and make up the bulk of the card's content.<br />
                                Skills:
                                {/* <MDBListGroup flush>
                                    <MDBListGroupItem>Cras justo odio</MDBListGroupItem>
                                    <MDBListGroupItem>Dapibus ac facilisis in</MDBListGroupItem>
                                    <MDBListGroupItem>Vestibulum at eros</MDBListGroupItem>
                                </MDBListGroup> */}
                                </MDBCardText>
                                {/* popover */}
                                <MDBPopover size='lg' color='primary' btnChildren='Connect' style={{marginTop: '2em'}}>
                                    <MDBPopoverHeader>Social media:</MDBPopoverHeader>
                                    <MDBPopoverBody><MDBIcon fab icon="linkedin" />: </MDBPopoverBody>
                                </MDBPopover>
                            </MDBCardBody>
                        </MDBCard>                                                             
                        <MDBCard className='mb-3' id='m-card'>
                        <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/182.webp' alt='...' position='top' id='mentor-img' />
                            <MDBCardBody id='mentortext'>
                                <MDBCardText>
                                Name: <br />
                                Description: Some quick example text to build on the card title and make up the bulk of the card's content.<br />
                                Skills:
                                {/* <MDBListGroup flush>
                                    <MDBListGroupItem>Cras justo odio</MDBListGroupItem>
                                    <MDBListGroupItem>Dapibus ac facilisis in</MDBListGroupItem>
                                    <MDBListGroupItem>Vestibulum at eros</MDBListGroupItem>
                                </MDBListGroup> */}
                                </MDBCardText>
                                {/* popover */}
                                <MDBPopover size='lg' color='primary' btnChildren='Connect' style={{marginTop: '2em'}}>
                                    <MDBPopoverHeader>Social media:</MDBPopoverHeader>
                                    <MDBPopoverBody><MDBIcon fab icon="linkedin" />: </MDBPopoverBody>
                                </MDBPopover>
                            </MDBCardBody>
                        </MDBCard>
                    </div>
                </div>
        </div>
    )
}