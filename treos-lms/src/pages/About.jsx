import React from 'react';
import './About.css';
import setoImage from '../SETO2.jpg';
import toluwaImage from '../my picture.jpg';
import heroImage from '../6.jpg';

const About = () => {
  return (
    <div className="about">
      <section className="about-hero" style={{backgroundImage: `url(${heroImage || "/placeholder.svg"})`}}>
        <div className="about-hero-text">
          <h1>About Us</h1>
          
        </div>
      </section>

      <section className="company-history">
        <h2>Our Story</h2>
        <p>
          Founded by Oluwaseto David, Sage Consolidated has been at the forefront of digital innovation, offering comprehensive solutions in social media management, content creation, and cybersecurity. Our mission is to empower businesses to thrive in the digital landscape.
        </p>
      </section>

      <section className="mission-vision">
        <h2>Mission & Vision</h2>
        <div className="mission-vision-content">
          <div className="mission-box">
            <h3>Our Mission</h3>
            <p>
              To provide top-notch digital services that drive engagement and ensure security.
            </p>
          </div>
          <br/>
          <br/>
          <div className="vision-box">
            <h3>Our Vision</h3>
            <p>
              We envision a world where businesses seamlessly integrate digital strategies to achieve their goals.
            </p>
          </div>
        </div>
      </section>

      <section className="team">
        <h2>Meet the Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src={setoImage || "/placeholder.svg"} alt="Oluwaseto David" />
            <div className="member-info">
              <h3>Oluwaseto David</h3>
              <p>Founder</p>
            </div>
          </div>
          <div className="team-member">
            <img src={toluwaImage || "/placeholder.svg"} alt="Ikumawoyi Toluwa" />
            <div className="member-info">
              <h3>Ikumawoyi Toluwalase</h3>
              <p>Software Developer</p>
            </div>
          </div>
        </div>
      </section>

      <section className="faqs">
        <h2>Frequently Asked Questions</h2>
        <div className="accordion">
          <div className="accordion-item">
            <button className="accordion-button">What services do you offer?</button>
            <div className="accordion-content">
              <p>We offer services including Social Media Management, Content Creation, Ad Campaigns, Strategy Development, Account Setup & Optimization, Email Marketing, Consultation, Online Training, and Security solutions.</p>
            </div>
          </div>
          <div className="accordion-item">
            <button className="accordion-button">How can I get started?</button>
            <div className="accordion-content">
              <p>You can get started by contacting us through our Contact page. We'll schedule a consultation to understand your needs and tailor our services accordingly.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

