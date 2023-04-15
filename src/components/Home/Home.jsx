import React from 'react';
import './Home.css';
import Cards from '../Cards';
import Hero from '../Hero/Hero';

export default function Home() {
//   const handleJoinClick = () => {
//     console.log('Join button clicked');
//   };

//   const handleLoginClick = () => {
//     console.log('Login button clicked');
//   };

  return (
    <div>
        <Hero />
      {/* <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className='card-home'>
          <div className='card-image-home'>
            <img
              src='https://uploads.mwp.mprod.getusinfo.com/uploads/sites/30/2021/08/finding_your_brand_identity-300x216.png'
              alt=''
            />
            <div className='card-content'>
              <h3>
                Uniting generations,
                <br />
                strengthening our network:
                <br />
                Proud alumni for life
              </h3>
              <div className='card-buttons'>
                <button className='orange-button' type='button' onClick={handleJoinClick}>
                  Join us
                </button>
                <button className='orange-button' type='button' onClick={handleLoginClick}>
                  Log in
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className='circles-container'>
        <div className='circle circle-1'>
          <div className="circle-text">
            <h4>Our core values</h4>
            <h6>Moringa Connect plays an important role in keeping alumni engaged in their school and a sense of community and lifelong learning</h6>
          </div>
        </div>

        <div className='circle circle-2'>
          <div className="circle-text">
            <h4>Our Mission</h4>
            <h6>Moringa Connect is designed to bring Moringa School graduates together. It serves as a virtual community where alumni can connect with each other, network and share experiences</h6>
          </div>
        </div>

        <div className='circle circle-3'>
          <div className="circle-text">
            <h4>Our Vision</h4>
            <h6>Moringa Connect's purpose is to help alumni stay informed about news and events related to their alma mater, access career resources and job posts, support fundraising efforts and maintaining connections with fellow alumni</h6>
          </div>
        </div>
      </div>

      <h1 className='alumni-stories'>Alumni stories</h1>
      <Cards />
</div>
 )
}