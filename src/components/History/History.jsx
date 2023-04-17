import React from 'react';
import './History.css';
import HistoryImg from '../../assets/history.png'

function HeroImage() {
  return (
    <div className="hero-image">
    <img src={HistoryImg} alt=''  />
    </div>
  );
}

function ImageAndText(props) {
  return (
    <div className="container-history">
      <div className="text">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
      <div className="image">
        <img src={props.image} alt={props.altText} />
      </div>
    </div>
  );
}

function ImageAndTextReverse(props) {
  return (
    <div className="container-reverse">
      <div className="text">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
      <div className="image">
        <img src={props.image} alt={props.altText} />
      </div>
    </div>
  );
}

function History() {
  return (
    <div>
        <HeroImage
        image=""
        altText="Hero image"
      />
      <ImageAndText
        image="https://media.istockphoto.com/id/1303837116/photo/group-of-five-african-college-students.jpg?s=612x612&w=0&k=20&c=06l5h2EBy6QVdnS6XEiykb-vtMIb3gFfAxrJQy7TdLA="
        altText="Placeholder image"
        title="History"
        description="In 2014, Moringa School launched its maiden Software Development class in Kenya with a cohort of only four (4) students and a vision for “A world in which anyone can create their future”. At that time, there was a growing demand for skilled tech talent as companies increased investment in technology to gain a competitive advantage from their own digital transformation. This demand was not being met by the available local talent due to a lack of skills…Something had to be done!

        Through the introduction of its 5-6 month Software Development and Data Science Bootcamps, Moringa School embarked on a journey that would integrate over 4,000 learners from diverse backgrounds and experiences while channeling their motivation to learn and grow through market-aligned curriculum, a learning approach that simulates practical on-the-job-experience, and a vibrant community of employer partners, higher learning institutions, and other industry stakeholders. This approach ensured that graduating students were prepared to take up their rightful place in the digital economy evidenced by the EdTech leader’s employment rate of 85% for all job-seeking alumni within 12 months."
      />
      <ImageAndTextReverse
        image="https://st3.depositphotos.com/2783505/36786/i/450/depositphotos_367863856-stock-photo-african-american-male-student-computer.jpg"
        altText="Placeholder image"
        title="Today"
        description="Today Moringa School provides a supportive and professional environment where individuals can conduct and be productive, receive career-enhancing, professional development advice, and build their professional network. Moringa has helped thousands of graduates and individuals get back to work. Under the umbrella of the, “Empower the Job Seeker” program, Moringa works with employer partners to develop and execute a plan to find employment (or a better job) needed for greater financial stability and self-sufficiency. An expert group of Human Resources and other business professionals are available for consultation to assist individuals in setting reasonable goals and implementing strategies that meet their specific needs. Perhaps, one of the unique features of the Center is the coaching appointments, which include: general career consultation, brand development, career exploration, interviewing skills, job search strategy, networking, resume writing and, LinkedIn. Programs and services are available without geographic restrictions."
      />
    </div>
  );
}

export default History;