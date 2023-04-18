import React from 'react';
import './Team.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const TeamMember = ({ image, name, description }) => {
  return (
    <div className="team-member">
      <img src={image} alt={name} style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
      <h3>{name}</h3>
      <p>{description}</p>
      <div className="social-icons">
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
        <a href="https://github.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
        <a href="https://www.twitter.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
      </div>
    </div>
  );
};

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Keith Kiama Maina',
      description: 'Keith is a software engineer with 5 years of experience in React development.',
      image: 'https://i.pinimg.com/originals/cf/27/61/cf27610284d7f050b8469e2c4e75541c.jpg',
    },
    {
      id: 2,
      name: 'Susan Githaiga',
      description: 'Susan is a UX designer with 7 years of experience in designing user-friendly interfaces.',
      image: 'https://images.squarespace-cdn.com/content/v1/579e28109de4bb7ff317f695/1534281822201-K6ZGADS6PWU0KMTW2EHC/What+to+wear+for+your+headshot+session+%7C+Professional+women%27s+attire+%7C+dress+casual+attire+%7C+friendly+women%27s+headshots+%7C+approachable+headshots+%7CProfessional+Headshots+for+Women+%7C+Winston+Salem+North+Carolina+Headshot+Photographer+%7C+Corporate+headshots+for+women+%7C+Professional+women+%7C+Female+CEO+%7C+Female+leader+%7C+mujeres+espanolas+profesionales+%7C+African+American+Women+in+Business+%7C+ABWA+%7C+American+Businesswomen%27s+Association+%7C+businesswomen+%7C+what+color+to+wear+with+blue+eyes+%7C+what+color+to+wear+with+brown+eyes+%7C+what+color+to+wear+with+green+eyes+%7C+what+color+to+wear+with+hazel+eyes+%7C+what+color+to+wear+with+olive+skin+%7C+what+color+to+wear+with+cool+skin+tones+%7C+what+color+to+wear+with+warm+skin+tones+%7C+what+color+to+wear+with+neutral+skin+tones+%7C+what+color+to+wear+with+red+hair+%7C+what+color+to+wear+with+blonde+hair+%7C+what+color+to+wear+with+black+hair+%7C+what+color+to+wear+with+auburn+hair+%7C+what+color+to+wear+with+carmel+hair+%7C+what+color+to+wear+with+dirty+blonde+hair+%7C+How+to+dress+professionally+%7C+What+to+wear+for+an+interview+%7C+how+to+dress+like+a+CEO+%7C+How+to+dress+fashionably+and+professionally+for+work+%7C+wsnc+%7C+entrepreneur+lifestyle+and+wardrobe+%7C+dtwsnc+%7C+women+owned+business+%7C+professional+looks+for+a+Blue+blazer+%7C+cobalt+%7C+lapis',
    },
    {
      id: 3,
      name: 'Emmanuel Chacha',
      description: 'Emmanuel is a full-stack developer with expertise in React, Ruby, and Rails .',
      image: 'data:image/jpeg;base64,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',
    },
    {
      id: 4,
      name: 'Justine Limo',
      description: 'Justine is a front-end developer with a passion for creating beautiful and responsive designs.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK7uVvV9hNkJB9CAeIe2770Zb_WZ26UomVew&usqp=CAU',
    },
    {
      id: 5,
      name: 'Darlene Nandabi',
      description: 'Darlene is a back-end developer with a focus on scalable and secure web applications.',
      image: 'https://i.pinimg.com/736x/88/de/cd/88decd346d3d64e1806f9769ff11012c.jpg',
    },
    {
      id: 6,
      name: 'Leonard Mukanda',
      description: 'Leonard is a UI designer with experience in creating engaging and interactive interfaces.',
      image: 'https://p1.pxfuel.com/preview/751/397/246/black-businessman-black-professional-professional-success-young-corporate.jpg',
    },
  ];

  return (
    <div className="team-container">
      <h2>Our Executive Committee</h2>
      <div className="team-members">
        {teamMembers.map((member) => (
          <div className="team-card" key={member.id}>
            <TeamMember
              image={member.image}
              name={member.name}
              description={member.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;