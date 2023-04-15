import React from 'react';
import './Card.css'
import { 
  MDBCard, 
  MDBCardImage, 
  MDBCardBody, 
  MDBCardTitle, 
  MDBRow, 
  MDBCol 
} from 'mdb-react-ui-kit';

export default function Cards() {
  return (
    <MDBRow>
      <MDBCol md='4' className='card'>
        <MDBCard>
          <MDBCardImage 
            src='https://t4.ftcdn.net/jpg/02/70/84/55/360_F_270845576_S1UyruMGdeeZjyQrooSk3F7Kx7eZF02X.jpg' 
            alt=''
            position='top'
            style={{height: '200px'}}
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol md='4' className='card'>
        <MDBCard>
          <MDBCardImage 
            src='https://images.unsplash.com/photo-1623157071775-e8b4ce3c4081?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aGFwcHklMjBibGFjayUyMHdvbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60' 
            alt=''
            position='top'
            style={{height: '200px'}}
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol md='4' className='card'>
        <MDBCard>
          <MDBCardImage 
            src='https://thumbs.dreamstime.com/b/happy-black-woman-gesturing-yes-over-orange-studio-background-panorama-joy-celebrating-something-standing-165471995.jpg' 
            alt=''
            position='top'
            style={{height: '200px'}}
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
}
