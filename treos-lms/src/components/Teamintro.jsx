import React from 'react';
import './Teamintro.css'

const teamMembers = [
  {
    name: 'Oluwaseto David',
    role: 'Founder',
    image: 'src/seto.jpg',
  },
  {
    name: 'Ikumawoyi Toluwalase',
    role: 'Software Developer',
    image: 'src/my picture.jpg',
  },
  // Add more team members as needed
];

const TeamIntro = () => (
  <section className="team-intro">
    <h2>Meet Our Team</h2>
    <div className="team-grid">
      {teamMembers.map((member, index) => (
        <div key={index} className="team-card">
          <img src={member.image} alt={member.name} />
          <h4>{member.name}</h4>
          <p>{member.role}</p>
        </div>
      ))}
    </div>
  </section>
);

export default TeamIntro;
