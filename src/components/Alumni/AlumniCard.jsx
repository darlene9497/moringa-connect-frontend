import React from 'react'
import networkImg from '../../assets/networking.jpeg'
import './Alumni.css'
import communityImg from '../../assets/community.jpeg'
import resourceImg from '../../assets/resource.webp'

export default function AlumniCard() {
  return (
    <div className='text-alumni'>
    <h2>Moringa Alumni</h2>
    <p>The Moringa Alumni are an important part of our institution's community, and their ongoing engagement can benefit both the alumni and the institution. Alumni can provide valuable feedback, mentorship, and support to current students and recent graduates, while the institution can provide resources, networking opportunities and lifelong learning to alumni.</p>
    <div className='row g-3'>
      <div className='col-md-4 col-6'>
        <div className='card-alumni'>
          <img src={resourceImg} className='card-img-top img-fit' alt='networking' />
          <div className='card-body'>
            <h5 className='card-title'>Networking Opportunities</h5>
            <p className='card-text'>Moringa Connect will connect you with other graduates from Moringa school and build relationships that may help alumni find new job opportunities and expand their professional network.</p>
          </div>
        </div>
      </div>
      <div className='col-md-4 col-6'>
        <div className='card-alumni'>
          <img src={networkImg} className='card-img-top img-fit' alt='networking' />
          <div className='card-body'>
            <h5 className='card-title'>Access to resources and support</h5>
            <p className='card-text'>Moringa Connect offers alumni access to career services, job boards, and other resources that can help them continue to grow in their careers. Alumni may also be able to access mentorship programs or other forms of support.</p>
          </div>
        </div>
      </div>
      <div className='col-md-4 col-6'>
        <div className='card-alumni'>
          <img src={communityImg} className='card-img-top img-fit' alt='networking' />
          <div className='card-body'>
            <h5 className='card-title'>Community and belonging</h5>
            <p className='card-text'>Being part of Moringa Connect can give individuals a sense of community and belonging. Alumni may be able to attend events and gatherings with other graduates, share experiences and stories with one another, and feel a sense of pride and connection to their school.</p>
          </div>
        </div>
      </div>
    </div>
 </div>
  )
}

