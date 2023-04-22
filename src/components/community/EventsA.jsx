import React from 'react'
import BackgroundImagePage from './BackgroundImagePage'
import './Community.css'
export default function EventsA() {
  return (
    <div>
      <BackgroundImagePage />
      <div class="container-fluid" style={{justifyContent: 'center', marginLeft: '3em', marginTop: '10em'}} id='events'>
            <h1 style={{fontSize: '40px', color: '#00004D', fontWeight: 'bold', paddingLeft: '2em', paddingBottom: '2em' }}>More events:</h1>         
            {/* <p style={{fontSize: '20px', paddingLeft: '4em'}}>We’re working hard to bring your search<br /> for alumni events under one roof.<br /> Until then, you can browse alumni events here:</p> */}
          </div>
      <div className='card mb-3' style={{ paddingTop: '2em', paddingBottom: '2em'}}>
        <div className='row g-0' style={{ display: "flex", justifyContent: "center"}}>
          <div className="card-container" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: '4em'}}>
          <div class="card mb-3" style={{ maxWidth: "80%", height: 'fitContent', borderStyle: 'none'}}>
              <div class="row g-0">
                {/* <div class="col-md-4" style={{ display: 'flex', alignItems: 'center', borderRight: '3px solid #007ACC' }}>
                  <p class="card-text" style={{ fontSize: '24px', color: '#00004D', fontWeight: 'bold' }}><i class="fa fa-calendar" aria-hidden="true" style={{ color: '#007ACC' }}></i> 21st June </p> */}
                  <div class="col-md-4">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpVTiGs9lBydVDTKjzvMkkU-zzMpCQpC6MNA&usqp=CAU" class="img-fluid rounded-start" alt="..."  width='100%'/>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title" style={{ fontStyle: 'italic', color: '#007ACC', fontWeight: 'bold' }}>Event </h5>
                    <p class="card-text" style={{ fontSize: '20px', color: '#00004D', fontWeight: 'bold' }}><i class="fa fa-calendar" aria-hidden="true" style={{ color: '#007ACC' }}></i>  21st June </p>
                    <p class="card-text" style={{ color: '#00004D' }}>Description: This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><i class="fa fa-clock" aria-hidden="true" style={{ color: '#007ACC' }}></i> 6:30 pm </p>
                    <p class="card-text"><i class="fa fa-map-marker" aria-hidden="true" style={{ color: '#007ACC' }}></i> Location </p>
                    <p class="card-text"><i class="fa fa-link" aria-hidden="true" style={{ color: '#007ACC' }}></i> Virtual Meetup link </p>
                  </div>
                </div>
              </div>
            </div>
        </div>    
        </div>            

        <div className='row g-0' style={{ display: "flex", justifyContent: "center"}}>
          <div className="card-container" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: '4em'}}>
          <div class="card mb-3" style={{ maxWidth: "80%", height: 'fitContent', borderStyle: 'none'}}>
              <div class="row g-0">
              <div class="col-md-4">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpVTiGs9lBydVDTKjzvMkkU-zzMpCQpC6MNA&usqp=CAU" class="img-fluid rounded-start" alt="..."  width='100%'/>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title" style={{ fontStyle: 'italic', color: '#007ACC', fontWeight: 'bold' }}>Event </h5>
                    <p class="card-text" style={{ fontSize: '20px', color: '#00004D', fontWeight: 'bold' }}><i class="fa fa-calendar" aria-hidden="true" style={{ color: '#007ACC' }}></i>  21st June </p>
                    <p class="card-text" style={{ color: '#00004D' }}>Description: This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><i class="fa fa-clock" aria-hidden="true" style={{ color: '#007ACC' }}></i> 6:30 pm </p>
                    <p class="card-text"><i class="fa fa-map-marker" aria-hidden="true" style={{ color: '#007ACC' }}></i> Location </p>
                    <p class="card-text"><i class="fa fa-link" aria-hidden="true" style={{ color: '#007ACC' }}></i> Virtual Meetup link </p>
                  </div>
                </div>
              </div>
            </div>
        </div>    
        </div> 
          {/* irrelevant info, for design only */}
        <div className='row g-0' style={{ display: "flex", justifyContent: "center"}}>
          <div className="card-container" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: '4em'}}>
          <div class="card mb-3" style={{ maxWidth: "80%", height: 'fitContent', borderStyle: 'none'}}>
              <div class="row g-0">
              <div class="col-md-4">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpVTiGs9lBydVDTKjzvMkkU-zzMpCQpC6MNA&usqp=CAU" class="img-fluid rounded-start" alt="..."  width='100%'/>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title" style={{ fontStyle: 'italic', color: '#007ACC', fontWeight: 'bold' }}>Event </h5>
                    <p class="card-text" style={{ fontSize: '20px', color: '#00004D', fontWeight: 'bold' }}><i class="fa fa-calendar" aria-hidden="true" style={{ color: '#007ACC' }}></i>  21st June </p>
                    <p class="card-text" style={{ color: '#00004D' }}>Description: This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><i class="fa fa-clock" aria-hidden="true" style={{ color: '#007ACC' }}></i> 6:30 pm </p>
                    <p class="card-text"><i class="fa fa-map-marker" aria-hidden="true" style={{ color: '#007ACC' }}></i> Location </p>
                    <p class="card-text"><i class="fa fa-link" aria-hidden="true" style={{ color: '#007ACC' }}></i> Virtual Meetup link </p>
                  </div>
                </div>
              </div>
            </div>
        </div>    
        </div> 

        <div className='row g-0' style={{ display: "flex", justifyContent: "center"}}>
          <div className="card-container" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: '4em'}}>
          <div class="card mb-3" style={{ maxWidth: "80%", height: 'fitContent', borderStyle: 'none'}}>
              <div class="row g-0">
              <div class="col-md-4">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpVTiGs9lBydVDTKjzvMkkU-zzMpCQpC6MNA&usqp=CAU" class="img-fluid rounded-start" alt="..."  width='100%'/>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title" style={{ fontStyle: 'italic', color: '#007ACC', fontWeight: 'bold' }}>Event </h5>
                    <p class="card-text" style={{ fontSize: '20px', color: '#00004D', fontWeight: 'bold' }}><i class="fa fa-calendar" aria-hidden="true" style={{ color: '#007ACC' }}></i>  21st June </p>
                    <p class="card-text" style={{ color: '#00004D' }}>Description: This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><i class="fa fa-clock" aria-hidden="true" style={{ color: '#007ACC' }}></i> 6:30 pm </p>
                    <p class="card-text"><i class="fa fa-map-marker" aria-hidden="true" style={{ color: '#007ACC' }}></i> Location </p>
                    <p class="card-text"><i class="fa fa-link" aria-hidden="true" style={{ color: '#007ACC' }}></i> Virtual Meetup link </p>
                  </div>
                </div>
              </div>
            </div>
        </div>    
        </div>                         

        <div className='row g-0' style={{ display: "flex", justifyContent: "center"}}>
        <div className="card-container" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: '4em'}}>
        <div class="card mb-3" style={{ maxWidth: "80%", height: 'fitContent', borderStyle: 'none'}}>
          <div class="row g-0">
          <div class="col-md-4">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpVTiGs9lBydVDTKjzvMkkU-zzMpCQpC6MNA&usqp=CAU" class="img-fluid rounded-start" alt="..."  width='100%'/>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title" style={{ fontStyle: 'italic', color: '#007ACC', fontWeight: 'bold' }}>Event </h5>
                    <p class="card-text" style={{ fontSize: '20px', color: '#00004D', fontWeight: 'bold' }}><i class="fa fa-calendar" aria-hidden="true" style={{ color: '#007ACC' }}></i>  21st June </p>
                <p class="card-text" style={{ color: '#00004D' }}>Description: This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><i class="fa fa-clock" aria-hidden="true" style={{ color: '#007ACC' }}></i> 6:30 pm </p>
                <p class="card-text"><i class="fa fa-map-marker" aria-hidden="true" style={{ color: '#007ACC' }}></i> Location </p>
                <p class="card-text"><i class="fa fa-link" aria-hidden="true" style={{ color: '#007ACC' }}></i> Virtual Meetup link </p>
              </div>
            </div>
          </div>
        </div>
        </div>    
        </div>  
        {/* pagination */}
        <nav aria-label="Page navigation example" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: '4em'}}>
        <ul class="pagination justify-content-end">
          <li class="page-item">
            <a class="page-link" href='/community/#events'>Previous</a>
          </li>
          <li class="page-item"><a class="page-link" href="/community/#events">1</a></li>
                <li class="page-item"><a class="page-link" href="/community/eventsa">2</a></li>
                {/* <li class="page-item"><a class="page-link" href="/community/eventsb">3</a></li> */}
          <li class="page-item">
            {/* <a class="page-link" href="/community/eventsb">Next</a> */}
          </li>
        </ul>
        </nav>          
        </div>      
    </div>
  )
}
