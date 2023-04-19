import './Community.css'
import React from 'react';
import Bg from './Bg';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage, 
  MDBBtn,
} from 'mdb-react-ui-kit';

export default function Chapters() {
  return (
    <div id='remove-shadow'>
        <Bg />      
           {/* Opening statement */}
        <p className='alumnus'>Moringa School is committed to providing its alumni with the necessary resources and programs to help them succeed at every stage of their careers.
        Our School offers a variety of programs and resources for its graduates at every stage of their career,
         so we invite you to explore our groups and take advantage of these opportunities:</p>

        {/* community/cohort cards */}
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', borderRadius: '10px'}}  className='my-cards'>
            <MDBCard style={{width: '680px', margin: '1em', display: 'flex', flexDirection: 'row-reverse', borderRadius: '150px'}} className='chapter-cards'>
            <MDBCardImage src='https://moringaschool.com/wp-content/uploads/2023/03/aws-768x384.jpg' position='top' alt='...' style={{order: '1', width: '55%'}} />
                    <MDBCardBody className='card-body'>
                        <MDBCardTitle className='title'>AWS Cloud Practitioners</MDBCardTitle>
                        <MDBCardText className='title-text'>
                            We are AWS Cloud Practitioner certified professionals. Join our alumni group.
                        </MDBCardText>
                        <MDBBtn href='#' className='group-btn'>Explore Group</MDBBtn>
                </MDBCardBody>
            </MDBCard>        
            <MDBCard style={{width: '680px', margin: '1em', display: 'flex', flexDirection: 'row-reverse', borderRadius: '150px'}} className='chapter-cards'>
                    <MDBCardImage src='https://moringaschool.com/wp-content/uploads/2023/03/product-design-768x514.jpg' position='top' alt='...' style={{order: '1', width: '55%'}} />
                    <MDBCardBody className='card-body'>
                        <MDBCardTitle className='title'>Product Design(UX/UI)</MDBCardTitle>
                        <MDBCardText className='title-text'>
                            Join our chapter of product designers to grow personally and professionally, regardless of your experience level. Become part of our community today.
                        </MDBCardText>
                        <MDBBtn href='#' className='group-btn'>Explore Group</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
                <MDBCard style={{width: '680px', margin: '1em', display: 'flex', flexDirection: 'row-reverse', borderRadius: '150px'}} className='chapter-cards'>
                    <MDBCardImage src='https://moringaschool.com/wp-content/uploads/2023/02/cyber-security-768x468.jpg' position='top' alt='...' style={{order: '1', width: '55%'}} />
                    <MDBCardBody className='card-body'>
                        <MDBCardTitle className='title'>Cybersecurity Prep</MDBCardTitle>
                        <MDBCardText className='title-text'>
                            This group is designed for professionals who are new to the world of cybersecurity or are interested in starting a career in this exciting and ever-changing field.
                        </MDBCardText>
                        <MDBBtn href='#' className='group-btn'>Explore Group</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
                <MDBCard style={{width: '680px', margin: '1em', display: 'flex', flexDirection: 'row-reverse', borderRadius: '150px'}} className='chapter-cards'>
                    <MDBCardImage src='https://moringaschool.com/wp-content/uploads/2023/02/data-visualization-with-python-kenya-768x522.jpg' position='top' alt='...' style={{order: '1', width: '55%'}} />
                    <MDBCardBody className='card-body'>
                        <MDBCardTitle className='title'>Data Science</MDBCardTitle>
                        <MDBCardText className='title-text'>
                            Learn how to unlock business insights and accelerate digital transformation and enable data-driven decision making
                        </MDBCardText>
                        <MDBBtn href='#' className='group-btn'>Explore Group</MDBBtn>
                    </MDBCardBody>
                </MDBCard>            
                <MDBCard style={{width: '680px', margin: '1em', display: 'flex', flexDirection: 'row-reverse', borderRadius: '150px'}} className='chapter-cards'>
                    <MDBCardImage src='https://moringaschool.com/wp-content/uploads/2021/12/team_work-768x512.jpg' position='top' alt='...' style={{order: '1', width: '55%'}} />
                    <MDBCardBody className='card-body'>
                        <MDBCardTitle className='title'>Software Engineering</MDBCardTitle>
                        <MDBCardText className='title-text'>
                            Connect, share experiences, and continue to learn and grow with like-minded individuals passionate about using technology to solve real-world problems.
                        </MDBCardText>
                        <MDBBtn href='#' className='group-btn'>Explore Group</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
                <MDBCard style={{width: '680px', margin: '1em', display: 'flex', flexDirection: 'row-reverse', borderRadius: '150px'}} className='chapter-cards'>
                    <MDBCardImage src='https://moringaschool.com/wp-content/uploads/2022/09/moringa-devops-ms002-768x432.jpg' position='top' alt='...' style={{order: '1', width: '55%'}} />
                    <MDBCardBody className='card-body'>
                        <MDBCardTitle className='title'>DevOps</MDBCardTitle>
                        <MDBCardText className='title-text' >
                            Join our community to network, share knowledge, and stay current with the latest trends and technologies in DevOps.
                        </MDBCardText>
                        <MDBBtn href='#' className='group-btn'>Explore Group</MDBBtn>
                    </MDBCardBody>
                </MDBCard>   
                
                {/* get involved */}
                {/* <div className='get-involved'> */}
                    {/* <div className='conn-bot'>
                        <MDBCardBody className='connect'>
                            <MDBCardTitle className='in-title'>Get involved</MDBCardTitle>
                            <MDBCardText className='in-title-text'>
                                Learn more about how to get involved with Moringa School as an alumnus/a and see how Moringa Connect can serve you.
                            </MDBCardText>
                        </MDBCardBody>  
                    </div>    */}

                    {/* alumni directory accordion */}
                    {/* <div className='alumni-dirs'>
                        <MDBAccordion initialActive={1}>
                            <MDBAccordionItem collapseId={1} headerTitle='Alumni Directory'>
                                The Moringa Connect Alumni Directory is your comprehensive resource 
                                for staying in touch with classmates
                                within the <code>Moringa School Fraternity</code>, though the transition does limit overflow.
                            </MDBAccordionItem>
                            <MDBAccordionItem collapseId={2} headerTitle='Benefits and Resources'>
                                Explore the benefits and services of joining Moringa Connect made available to all alumni/us <a href='/chapters/alumni'>here.</a>
                            </MDBAccordionItem>
                            <MDBAccordionItem collapseId={3} headerTitle='Programs and Events'>
                                Engage with the worldwide community of Moringa alumni wherever you are on campus, online, and in your region through Moringa connect Events
                            </MDBAccordionItem>
                            <MDBAccordionItem collapseId={4} headerTitle='Find a mentor'>
                                Looking for a tech mentor? Start here! Check out our list of available mentors by clicking <a href='/chapters/alumni'>here</a>
                            </MDBAccordionItem>                              
                            <MDBAccordionItem collapseId={4} headerTitle='News'>
                                Discover emerging news and updates from Moringa School.
                            </MDBAccordionItem>                            
                        </MDBAccordion>
                    </div>     
                </div>                                        */}
        </div>
    </div>
  );
}