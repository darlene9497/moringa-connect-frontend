import './Community.css'
import React, { useRef } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBScrollspy, MDBScrollspyLink, MDBAccordion, MDBAccordionItem, MDBIcon } from 'mdb-react-ui-kit';
import AlumniHero from './AlumniHero'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage, 
    MDBBtn
  } from 'mdb-react-ui-kit';

export default function Alumni() {
  const section1 = useRef(null);
  const section2 = useRef(null);
  const section3 = useRef(null);
  const section4 = useRef(null);
  const section5 = useRef(null);
  const containerRef = useRef(null);

  return (
    <>  
        {/* Hero */}
        <AlumniHero />
        <div className='alumni-list'>
            <MDBContainer>
                <MDBRow>
                    {/* Body text */}
                    <MDBCol md='8'>
                        <div id='element' ref={containerRef} className='scrollspy-example'>
                            {/* Youtube video link */}
                            <section ref={section1} id='section-1'>
                            <iframe width="810" height="450" src="https://www.youtube.com/embed/eTmiWC3-L2E?list=PLSEr6vQWk10F-n5x6ps-TJgOWObECLwfO" title="Meet Moringa Alumni!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            </section>
                            <p className='welcome-p'>
                                At Moringa, we take immense pride in our alumni community 
                                - a diverse and talented group of individuals who have gone on to achieve great things in the tech industry.
                                We believe that strong professional relationships are key to success, 
                                and we're committed to fostering a lifelong connection with our alumni.
                            </p>
                            {/* Scrollspy text */}
                            <section ref={section2} id='section-2'>
                            <h3 id='head-title'>Alumni relations <MDBIcon fas icon="graduation-cap" /></h3>
                            <p className='welcome-p'>
                                As an alumnus of Moringa, you are part of a community that values diversity, creativity, and growth. We are committed to helping you build your future with confidence and capability. Our team of talented mentors is always available to support you, 
                                whether you need help navigating the job market, developing new skills, or simply connecting with other professionals in your field 
                            </p>
                            <section ref={section3} id='section-3'>
                                <h3 id='head-title'>Volunteer Opportunities <MDBIcon fas icon="hands-helping" /></h3>
                                <p className='welcome-p'>
                                As an alumnus, you have the unique opportunity to
                                give back to your community by volunteering your time and skills to 
                                support the next generation of tech professionals.
                                </p>
                            </section>
                            </section>
                            <section ref={section4} id='section-4'>
                            <h3 id='head-title'>Our communities <MDBIcon fas icon="users" /></h3>
                            <p className='welcome-p'>
                                At Moringa School, we're dedicated to helping our alumni succeed throughout their careers. We provide a range of programs and resources designed to support our graduates at every stage of their professional journey.
                                As part of this commitment, we offer a variety of groups and communities where alumni can connect, collaborate, and learn from one another. Whether you're looking for job opportunities, mentorship, or simply a community of like-minded individuals,
                                we invite you to explore<a href='/chapters' id='links'> our communities</a> and take advantage of the opportunities they offer.
                                Joining one of our <a href='/chapters' id='links'>communities</a> can help you build your network, develop new skills, and stay up-to-date with the latest industry trends. We believe that together, we can help each other achieve our career goals and make a positive impact in our communities.
                            </p>
                            </section>
                            {/* FAQs */}
                            <section ref={section5} id='section5'>
                                <h3 id='head-title'>FAQs <MDBIcon far icon="question-circle" /></h3>
                                <p className='welcome-p'>
                                    <MDBAccordion initialActive={1}>
                                        <MDBAccordionItem collapseId={1} headerTitle='1. What values does the Moringa alumni community uphold?'>
                                            The Moringa alumni community values <span id='discover'>diversity, creativity, and growth</span>. 
                                            As an alumnus, you are part of a community that is dedicated to helping each other succeed in the tech industry.
                                        </MDBAccordionItem>
                                        <MDBAccordionItem collapseId={2} headerTitle='2. What kind of support can I expect from Moringa School as an alumnus? '>
                                            Moringa School provides ongoing support and resources to help its alumni succeed in the tech industry. 
                                            This includes <span id='discover'>mentorship, job market navigation assistance, skills development, networking opportunities</span>, and more.
                                        </MDBAccordionItem>
                                        <MDBAccordionItem collapseId={3} headerTitle='3. How do I connect with other Moringa alumni?'>
                                            Moringa School provides opportunities for alumni to connect with each other through networking <a href='/events' id='discover'> events</a>, social media, and other online platforms.
                                            Alumni can also participate in <a href='/mentor'>mentorship programs</a> and speak at <a href='/events' id='discover'> events</a> to <a href='/chapters'> connect</a> with other professionals in their field.
                                        </MDBAccordionItem>
                                        <MDBAccordionItem collapseId={4} headerTitle='4. Can Moringa alumni attend industry events?'>
                                            Yes, Moringa alumni are encouraged to attend industry <a href='/events' id='discover'> events</a> and stay connected with the school's community.
                                            The school provides resources and support to help alumni stay up-to-date with the latest industry trends 
                                            and connect with other professionals in their field.
                                        </MDBAccordionItem>                                
                                    </MDBAccordion>                        
                                </p>
                            </section>                    
                        </div>
                    </MDBCol>

                    {/* side navbar */}
                    <MDBCol md='4'>
                        <MDBScrollspy className='side-nav'>
                            <MDBScrollspyLink targetRef={containerRef} id='scroll-main'><span id='discover'>Discover</span>.<span id='grow'>Grow</span>.<span id='transform'>Transform</span></MDBScrollspyLink>
                            <MDBScrollspyLink targetRef={section1} id='scroll-title'>Meet our Alumni</MDBScrollspyLink>
                            <MDBScrollspyLink targetRef={section2} id='scroll-title'>Alumni relations</MDBScrollspyLink>
                            <MDBScrollspyLink targetRef={section3} id='scroll-title'>Volunteer Opportunities</MDBScrollspyLink>
                            <MDBScrollspyLink targetRef={section4} id='scroll-title'>Our communities</MDBScrollspyLink>
                            <MDBScrollspyLink targetRef={section5} id='scroll-title'>FAQs</MDBScrollspyLink>
                            {/* <MDBScrollspyLink targetRef={section5} id='scroll-title'>Mentorship</MDBScrollspyLink>
                            <MDBScrollspyLink targetRef={section5} id='scroll-title'>Stay Connected</MDBScrollspyLink> */}
                        </MDBScrollspy>
                    </MDBCol>

                </MDBRow>
            </MDBContainer>  
        </div>

                {/* Find a mentor */}
                <div className='get-involved'>
                    <div className='conn-bot'>
                        <MDBCardBody className='connect'>
                            <MDBCardTitle className='in-title'>Mentorship</MDBCardTitle>
                            <MDBCardText className='in-title-text'>
                            We believe in the power of strong, professional relationships and are dedicated to providing you 
                                with ongoing support and resources to help you succeed. 
                                <br /> Whether you are looking to network with fellow alumni, 
                                attend industry events, or simply stay connected with the <a href='/chapters' id='links'> Moringa community</a>, we are here to help.
                            </MDBCardText>
                        </MDBCardBody>  
                    </div>   

                    {/* add this to scrollspy//refer */}
                    {/* <p>https://alumni.harvard.edu/community/careers-networking</p> */}
                            {/* find mentor: https://alumni.harvard.edu/community/stories?page=1 */}


                    {/* alumni directory accordion */}
                    <div className='alumni-dirs'>
                        <MDBAccordion initialActive={1}>
                            {/* <MDBAccordionItem collapseId={1} headerTitle='Find a mentor'> */}
                            <MDBAccordionItem collapseId={1} headerTitle='Find a mentor' headerContent={<><MDBIcon fas icon="plus-circle" /> Find a mentor</>}>
                                We believe in the power of strong, professional relationships and are dedicated to providing you 
                                with ongoing support and resources to help you succeed. Whether you are looking to network with fellow alumni, 
                                attend industry events, or simply stay <a href='/chapters' id='links'>connected </a>with the Moringa community, we are here to help.
                            </MDBAccordionItem>
                            <MDBAccordionItem collapseId={2} headerTitle='Volunteer to be a mentor'>
                                Explore the benefits and services of joining Moringa Connect made available to all alumni/us <a href='/chapters/alumni'>here.</a>
                            </MDBAccordionItem>
                            {/* <MDBAccordionItem collapseId={3} headerTitle='Join a Community'>
                                Engage with the worldwide community of Moringa alumni wherever you are on campus, online, and in your region through Moringa connect Events
                            </MDBAccordionItem> */}
                            {/* <MDBAccordionItem collapseId={4} headerTitle='Find a mentor'>
                                Looking for a tech mentor? Start here! Check out our list of available mentors by clicking <a href='/chapters/alumni'>here</a>
                            </MDBAccordionItem>                              
                            <MDBAccordionItem collapseId={4} headerTitle='News'>
                                Discover emerging news and updates from Moringa School.
                            </MDBAccordionItem>                             */}
                        </MDBAccordion>
                    </div>     
                </div>                                       
        
        {/* <h2 className='titl-e'>Join our communities</h2>
        <div className='stay-connected'>
            <MDBCard className='chapter-ca'>
                <MDBCardImage src='https://media.licdn.com/dms/image/C5603AQG3WgYbx-ozMA/profile-displayphoto-shrink_800_800/0/1652101618147?e=2147483647&v=beta&t=J_fg14lvIXjPvzoMeto_6y7Bl4_sL5WoG5N2EZNEHOc' position='top' alt='...' id='image-bot' style={{order: '1', width: '50%'}} />
                    <MDBCardBody className='card-bo'>
                        <MDBCardTitle className='title'>Stay Connected</MDBCardTitle>
                            <MDBCardText className='title-te' >
                                "Stay connected, stay empowered. Our commitment to building lasting relationships
                                and providing unwavering support means that you'll always have a home within the Moringa community, no matter where your journey takes you."
                            </MDBCardText>
                            <MDBBtn href='/chapters' className='group-bt'>Connect with alumni</MDBBtn>
                    </MDBCardBody>
            </MDBCard> 
        </div> */}

    </> 
  );
}