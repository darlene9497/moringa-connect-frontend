import {React, useState, useEffect} from 'react'
import BackgroundImagePage from './BackgroundImagePage'
import './Community.css'
export default function Community() {
  const [events, setEvents] =useState([]);

  useEffect( () =>{
    fetch('/events')
    .then(res =>res.json())
    .then(data => setEvents(data));
  }, [])
  return (
    <div style={{overflowX: 'hidden'}}>
        <BackgroundImagePage />
        <div className='alumni-list' style={{marginRight:'5rem'}}>
        <div className="row">
            <div className="col-4">
              <nav id="navbar-example3" className="h-100 flex-column align-items-stretch pe-4 border-end">
                <nav className="nav nav-pills flex-column">
                <a className="nav-link" href="#item-1" style={{fontSize: '22px', fontWeight: 'bold'}}><span style={{color: '#FF5C33'}}>Discover</span>.<span style={{color: '#4D4D00'}}>Grow</span>.<span style={{color: '#007ACC'}}>Transform</span></a>
                  <a className="nav-link" href="#item-1">Meet our Alumni</a>
                  {/* <nav className="nav nav-pills flex-column"> */}
                    <a className="nav-link" href="#item-1-1">Our communities</a>
                    <a className="nav-link" href="#item-2">Alumni Relations</a>
                    <a className="nav-link" href="#item-3">Volunteer Opportunities</a>
                    <a className="nav-link" href="#item-4">FAQs</a>
                    <a className="nav-link" href="#item-5">Stay Connected</a>
                    <a className="nav-link" href="#events">Events</a>
                </nav>
              </nav>
            </div>

            <div className="col-8">
              <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-smooth-scroll="true" className="scrollspy-example-2" tabindex="0">
                <div id="item-1">
                  {/* <h4>Meet our alumni</h4> */}
                  <p>
                    <iframe width="100%" height="450" src="https://www.youtube.com/embed/eTmiWC3-L2E?list=PLSEr6vQWk10F-n5x6ps-TJgOWObECLwfO" title="Meet Moringa Alumni!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </p>
                    <p className='welcome-p'>At Moringa, we take immense pride in our alumni community - a diverse and talented group of individuals who have gone on to achieve great things in the tech industry. We believe that strong professional relationships are key to success, and we're committed to fostering a lifelong connection with our alumni.</p>
                </div>
                <div id="item-1-1">
                  <h5 style={{color: '#ff5c33', fontWeight: 'bold', fontSize: '34px'}}>Moringa communities and Groups <i className="fa fa-users" aria-hidden="true"></i></h5>
                  <p className='welcome-p'>
                      At Moringa School, we're dedicated to helping our alumni succeed throughout their careers. We provide a range of programs and resources designed to support our graduates at every stage of their professional journey.
                      As part of this commitment, we offer a variety of groups and communities where alumni can connect, collaborate, and learn from one another. Whether you're looking for job opportunities, mentorship, or simply a community of like-minded individuals,
                      we invite you to explore<a href='#item-1-1' style={{color: '#ff5c33'}}> our communities</a> and take advantage of the opportunities they offer.
                      Joining one of our <a href='#item-1-1'  style={{color: '#ff5c33'}}>communities</a> can help you build your network, develop new skills, and stay up-to-date with the latest industry trends. We believe that together, we can help each other achieve our career goals and make a positive impact in our communities.
                      Join one or as many as you can below:
                  </p>
                  </div>
                <div id="item-2">
                  <h5 style={{color: '#ff5c33', fontWeight: 'bold', fontSize: '34px'}}>Alumni Relations <i className="fa fa-graduation-cap" aria-hidden="true"></i></h5>
                  <p className='welcome-p'>
                    As an alumnus of Moringa, you are part of a community that values diversity, creativity, and growth. We are committed to helping you build your future with confidence and capability. Our team of talented mentors is always available to support you, 
                    whether you need help navigating the job market, developing new skills, or simply connecting with other professionals in your field 
                  </p>
                </div>  
                <div id="item-3">
                  <h5 style={{color: '#ff5c33', fontWeight: 'bold', fontSize: '34px'}}>Volunteer Opportunities <i className="fa fa-handshake" aria-hidden="true"></i></h5>
                  <p className='welcome-p'>
                    As an alumnus, you have the unique opportunity to give back to your community by volunteering your time and skills to support the next generation of tech professionals.
                  </p>
                </div>                                
                <div id="item-4">
                <h5 style={{color: '#ff5c33', fontWeight: 'bold', fontSize: '34px'}}>FAQs <i className="fa fa-question-circle"></i></h5>
                  <p>
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          1. What values does the Moringa alumni community uphold?
                        </button>
                      </h2>
                      <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{fontSize: '20px',style: 'none'}}>
                          The Moringa alumni community values <span id='discover'>diversity, creativity, and growth</span>. 
                          As an alumnus, you are part of a community that is dedicated to helping each other succeed in the tech industry.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          2. What kind of support can I expect from Moringa School as an alumnus?
                        </button>
                      </h2>
                      <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{fontSize: '20px',style: 'none'}}>
                          Moringa School provides ongoing support and resources to help its alumni succeed in the tech industry. 
                          This includes <span  style={{color: '#ff5c33'}}>mentorship, job market navigation assistance, skills development, networking opportunities</span>, and more.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          3. How do I connect with other Moringa alumni?
                        </button>
                      </h2>
                      <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{fontSize: '20px',style: 'none'}}>
                          Moringa School provides opportunities for alumni to connect with each other through networking <a href='/events' style={{color: '#ff5c33'}}> events</a>, social media, and other online platforms.
                          Alumni can also participate in <a href='/mentor' style={{color: '#ff5c33'}}>mentorship programs</a> and speak at <a href='/events' style={{color: '#ff5c33'}}> events</a> to <a href='/chapters'  style={{color: '#ff5c33'}}> connect</a> with other professionals in their field.
                        </div>
                      </div>
                    </div>                     
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                          4. Can Moringa alumni attend industry events?
                        </button>
                      </h2>
                      <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body"  style={{fontSize: '20px',style: 'none'}}>
                          Yes, Moringa alumni are encouraged to attend industry <a href='#events' style={{color: '#ff5c33'}}> events</a> and stay connected with the school's community.
                          The school provides resources and support to help alumni stay up-to-date with the latest industry trends 
                          and connect with other professionals in their field.
                        </div>
                      </div>
                    </div>                   
                  </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Extra links */}
        <div className='links' style={{backgroundColor: '#f2f2f2', paddingTop: '7rem', paddingBottom: '8em', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
  <div className="row  g-4 d-flex justify-content-center">
    <div className="col" style={{width: '35rem', height:'15rem',marginBottom: '5rem'}}>
      <div className="card h-100">
        {/* <img src="..." className="card-img-top" alt="..." /> */}
        <div className="card-body">
          <p className="card-title" href='#events'><i className="fa fa-users" aria-hidden="true" style={{color: '#00004D', fontSize: '3em', display: 'flex', justifyContent: 'center', alignItems: 'center'}}></i></p>
          <p className="card-text" href='#events' style={{ color: '#00004D', fontSize: '24px',paddingTop: '1.6em', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Alumni Events <i className="fa fa-long-arrow-right" aria-hidden="true" style={{color: '#00004D', marginLeft: '8px', transform: "rotate(-45deg)"}}></i></p>
        </div>
      </div>
    </div>
    <div className="col" style={{width: '35rem', height:'15em'}}>
      <div className="card h-100">
        <div className="card-body">
          <p className="card-title"><i className="fa fa-list-alt" aria-hidden="true" style={{color: '#00004D', fontSize: '3em', display: 'flex', justifyContent: 'center', alignItems: 'center'}}></i></p>
          <p className="card-text" href='/projects' style={{ color: '#00004D', fontSize: '24px',paddingTop: '1.6em', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Projects <i className="fa fa-long-arrow-right" aria-hidden="true" style={{color: '#00004D', marginLeft: '8px', transform: "rotate(-45deg)"}}></i></p>
        </div>
      </div>
    </div>
    <div className="col" style={{width: '35rem', height:'15em'}}>
      <div className="card h-100">
        <div className="card-body">
          <p className="card-title"><i className="fa fa-user-circle" aria-hidden="true" style={{color: '#00004D', fontSize: '3em', display: 'flex', justifyContent: 'center', alignItems: 'center'}}></i></p>
          <p className="card-text" href='/membership' style={{ color: '#00004D', fontSize: '24px',paddingTop: '1.6em', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Membership <i className="fa fa-long-arrow-right" aria-hidden="true" style={{color: '#00004D', marginLeft: '8px', transform: "rotate(-45deg)"}}></i></p>
        </div>
      </div>
    </div> 
  </div>
</div>

        {/* <BodyHero /> */}
        <div id='item-5'>
        <div style={{width: '100%', position: 'relative'}}>
            <img src="https://bit.ly/3UYfeGS" className="container-fluid " alt="Responsive" style={{maxHeight: '100% !important'}} />
            {/* overlay  */}
            <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 77, 0.8)', 
            display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white',
            fontSize: '30px', alignContent: 'center', fontWeight: 'bold', paddingBottom: '4em', fontStyle: 'italic'}}>
              {/* overlay text */}
              <br />
              <i className="fa fa-quote-left" aria-hidden="true" style={{marginRight: '10px', alignSelf: 'center', paddingBottom: '9em', color: '#ff5c33'}}></i>
              {/* <h1 style={{textAlign: 'center', color: '#FF5C33 ', fontWeight: 'bold', paddingBottom: '5em'}}> Stay Connected</h1> <br /> */}
              <p style={{textAlign: 'center'}}>
                We are committed to fostering lifelong professional connections with our alumni to support <br />
                their continued growth and success.Our commitment to building lasting relationships
                and<br /> providing unwavering support means that you'll always have a home 
                within the<br /> Moringa community, no matter where your journey takes you.<br /><br />
                {/* button hover effecr */}
                <a className="btn btn-primary" href="/alumni" role="button" style={{textTransform: 'capitalize', color: '#FF5C33', backgroundColor: 'transparent',
                 border: '2px solid #FF5C33', borderRadius: '20px', fontSize: '20px', fontWeight: 'bold'}}>
                 Connect with Alums</a>
              </p>
            </div>
          </div>
        </div>

        {/* events */}
          <div className="container-fluid" style={{justifyContent: 'center', marginLeft: '3em', marginTop: '10em', paddingBottom: '2em' }} id='events'>
            <h1 style={{fontSize: '40px', color: '#00004D', fontWeight: 'bold', paddingLeft: '2em' }}>Upcoming alumni <br />events</h1>         
            <p style={{fontSize: '20px', paddingLeft: '4em'}}>We’re working hard to bring your search<br /> for alumni events under one roof.<br /> Until then, you can browse alumni events here:</p>
          </div>
          
          <div>
          {/* slice first 5 events */}
          {events.slice(0, 5).map((event) => (
            <div className='card mb-3' style={{ paddingTop: '2em', paddingBottom: '2em'}}>

                <div className='row g-0' style={{ display: "flex", justifyContent: "center"}}>
                  <div key={event.id} className="card-container" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: '4em'}}>
                  <div className="card mb-3" style={{ maxWidth: "80%", height: 'fitContent', borderStyle: 'none'}}>
                      <div className="row g-0">
                          <div className="col-md-4">
                            <img src={event.image} className="img-fluid rounded-start" alt="..."  width='80%' />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <h5 className="card-title" style={{ fontStyle: 'italic', color: '#007ACC', fontWeight: 'bold' }}> {event.name}</h5>
                            <p className="card-text" style={{ fontSize: '20px', color: '#00004D', fontWeight: 'bold' }}><i className="fa fa-calendar" aria-hidden="true" style={{ color: '#007ACC' }}></i> {event.date}</p>
                            <p className="card-text" style={{ color: '#00004D' }}>{event.description}</p>
                            <p className="card-text"><i className="fa fa-clock" aria-hidden="true" style={{ color: '#007ACC' }}></i> {event.time}</p>
                            <p className="card-text"><i className="fa fa-map-marker" aria-hidden="true" style={{ color: '#007ACC' }}></i> {event.venue}</p>
                            {/* <p className="card-text"><i className="fa fa-link" aria-hidden="true" style={{ color: '#007ACC' }}></i> Virtual Meetup link </p> */}
                          </div>
                        </div>
                      </div>
                    </div>
                </div>    
              </div>           
            </div>
            ))} 

              {/* pagination */}
              <nav aria-label="Page navigation example" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: '4em'}}>
                <ul className="pagination justify-content-end">
                  {/* <li className="page-item disabled">
                    <a className="page-link">Previous</a>
                  </li> */}
                  <li className="page-item"><a className="page-link" href="/community/#events">1</a></li>
                  <li className="page-item"><a className="page-link" href="/community/eventsa">2</a></li>
                  {/* <li className="page-item"><a className="page-link" href="/community/eventsb">3</a></li> */}
                  <li className="page-item">
                    <p className="page-link" href="/community/events">Next</p>
                  </li>
                </ul>
              </nav>          
            </div>
          </div>    
  );
}
