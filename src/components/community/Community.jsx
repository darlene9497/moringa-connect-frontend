import {React, useState, useEffect} from 'react'
import BackgroundImagePage from './BackgroundImagePage'
import './Community.css'
export default function Community() {
  const [events, setEvents] =useState([]);

  useEffect( () =>{
    fetch('/events')
    .then(res =>res.json())
    .then(data => setEvents(data))
    .catch(err => console.log(err));
  }, [])
  return (
    <div style={{overflowX: 'hidden'}} id='comm'>
        <BackgroundImagePage />
        {/* <div className='container-fluid'> */}
        <div className="row">
        
            {/* <div className="col-2"> */}
              {/* <nav id="navbar-example3" className="navbar navbar-light bg-light"> */}
                {/* <nav className="nav nav-pills flex-row">
                

                <div id="list-example" class="list-group">
                  <a className="navbar-brand" href="#item-1" style={{fontWeight: 'bold'}}>
                  <span style={{color: '#FF5C33'}}>Discover</span>
                  <span style={{color: '#4D4D00'}}>.Grow.</span>
                  <span style={{color: '#007ACC'}}>Transform</span>
                </a>
                  <a className="list-group-item list-group-item-action" href="#item-1">Meet our Alumni</a>
                    <a className="list-group-item list-group-item-action" href="#item-1-1">Our communities</a>
                    <a className="list-group-item list-group-item-action" href="#item-2">Alumni Relations</a>
                    <a className="list-group-item list-group-item-action" href="#item-3">Volunteer Opportunities</a>
                    <a className="list-group-item list-group-item-action" href="#item-4">FAQs</a>
                    <a className="list-group-item list-group-item-action" href="#item-5">Stay Connected</a>
                    <a className="list-group-item list-group-item-action" href="#events">Events</a>
                </div>
                </nav> */}
              {/* </nav> */}
            {/* </div> */}
            <div className="col-8">
            <div data-spy="scroll" data-bs-target="#navbar-example3" data-offset="0">
                <div id="item-1">
                    <iframe width="80%" src="https://www.youtube.com/embed/eTmiWC3-L2E?list=PLSEr6vQWk10F-n5x6ps-TJgOWObECLwfO" title="Meet Moringa Alumni!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <p className='welcome-p'>At Moringa, we take immense pride in our alumni community - a diverse and talented group of individuals who have gone on to achieve great things in the tech industry. We believe that strong professional relationships are key to success, and we're committed to fostering a lifelong connection with our alumni.</p>
                </div>
                <div id="item-1-1">
                  <h5 style={{color: '#ff5c33'}}>Moringa communities and Groups <i className="fa fa-users" aria-hidden="true"></i></h5>
                  <p className='welcome-p'>
                      At Moringa School, we're dedicated to helping our alumni succeed throughout their careers. We provide a range of programs and resources designed to support our graduates at every stage of their professional journey.
                      As part of this commitment, we offer a variety of groups and communities where alumni can connect, collaborate, and learn from one another. Whether you're looking for job opportunities, mentorship, or simply a community of like-minded individuals,
                      we invite you to explore<a href='#item-1-1' style={{color: '#ff5c33'}}> our communities</a> and take advantage of the opportunities they offer.
                      Joining one of our <a href='#item-1-1'  style={{color: '#ff5c33'}}>communities</a> can help you build your network, develop new skills, and stay up-to-date with the latest industry trends. We believe that together, we can help each other achieve our career goals and make a positive impact in our communities.
                      Join one or as many as you can below:
                  </p>
                  </div>
                <div id="item-2">
                  <h5 style={{color: '#ff5c33'}}>Alumni Relations <i className="fa fa-graduation-cap" aria-hidden="true"></i></h5>
                  <p className='welcome-p'>
                    As an alumnus of Moringa, you are part of a community that values diversity, creativity, and growth. We are committed to helping you build your future with confidence and capability. Our team of talented mentors is always available to support you, 
                    whether you need help navigating the job market, developing new skills, or simply connecting with other professionals in your field 
                  </p>
                </div>  
                <div id="item-3">
                  <h5 style={{color: '#ff5c33'}}>Volunteer Opportunities <i className="fa fa-handshake" aria-hidden="true"></i></h5>
                  <p className='welcome-p'>
                    As an alumnus, you have the unique opportunity to give back to your community by volunteering your time and skills to support the next generation of tech professionals.
                  </p>
                </div>                                
                <div id="item-4">
                <h5 style={{color: '#ff5c33'}}>FAQs <i className="fa fa-question-circle"></i></h5>
                  <p>
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          1. What values does the Moringa alumni community uphold?
                        </button>
                      </h2>
                      <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
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
                        <div className="accordion-body">
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
                        <div className="accordion-body">
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
                        <div className="accordion-body">
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
          {/* </div> */}
        </div>

        {/* Extra links */}
        <div className='links' style={{backgroundColor: '#f2f2f2', paddingBottom: '5em', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <div className="row  g-4 d-flex justify-content-center">
            <div className="col" style={{width: '35rem', height:'15rem', marginBottom: '3rem'}}>
              <div className="card h-100">
                <div class="card-body">
                      <a class="card-title" href='/alumni'><i class="fa fa-users" aria-hidden="true" style={{color: '#00004D', fontSize: '3em', display: 'flex', justifyContent: 'center', alignItems: 'center'}}></i></a>
                      <a class="card-text" href='/alumni' style={{ color: '#00004D', fontSize: '24px',paddingTop: '1.6em', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Alumni <i class="fa fa-long-arrow-right" aria-hidden="true" style={{color: '#00004D', marginLeft: '8px', transform: "rotate(-45deg)"}}></i></a>
                    </div>
              </div>
            </div>

            <div className="col" style={{width: '35rem', height:'15rem',marginBottom: '5rem'}}>
              <div className="card h-100">
                <div class="card-body">
                      <a class="card-title"><i class="fa fa-list-alt" aria-hidden="true" style={{color: '#00004D', fontSize: '3em', display: 'flex', justifyContent: 'center', alignItems: 'center'}}></i></a>
                      <a class="card-text" href='/projects' style={{ color: '#00004D', fontSize: '24px',paddingTop: '1.6em', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Projects <i className="fa fa-long-arrow-right" aria-hidden="true" style={{color: '#00004D', marginLeft: '8px', transform: "rotate(-45deg)"}}></i></a>
                    </div>
              </div>
            </div>
          </div>
        </div>
        {/* events */}
          <div className="container-fluid " style={{marginLeft: '3em', marginTop: '5em'}} id='events'>
            <h1 style={{ color: '#00004D', fontWeight: 'bold'}}>Upcoming alumni <br />events</h1>         
            <p>We’re working hard to bring your search<br /> for alumni events under one roof.<br /> Until then, you can browse alumni events here:</p>
          </div>
          
          <div>
          {/* slice first 5 events */}
          {events.slice(0, 5).map((event) => (
            <div className='mb-3'>
                <div className='row g-0'>
                  <div key={event.id} className="card-container d-flex justify-content-center">
                  <div className="card mb-3">
                      <div className="row g-0">
                          <div className="col-md-4">
                            <img src={event.image} className="img-fluid rounded-start" alt="..."  width='50%' />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <h5 className="card-title" style={{ fontStyle: 'italic', color: '#007ACC', fontWeight: 'bold' }}> {event.name}</h5>
                            <p className="card-text" style={{ fontSize: '20px', color: '#00004D', fontWeight: 'bold' }}><i className="fa fa-calendar" aria-hidden="true" style={{ color: '#007ACC' }}></i> {event.date}</p>
                            <p className="card-text" style={{ color: '#00004D' }}>{event.description}</p>
                            <p className="card-text"><i className="fa fa-clock" aria-hidden="true" style={{ color: '#007ACC' }}></i> {event.time}</p>
                            <p className="card-text"><i className="fa fa-map-marker" aria-hidden="true" style={{ color: '#007ACC' }}></i> {event.venue}</p>
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
              <li className="page-item">
              <a class="page-link" href="/community/eventsa">Next</a>
              </li>
            </ul>
          </nav>          
        </div>
      </div>    
  );
}
