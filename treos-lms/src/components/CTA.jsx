import React from 'react';
import { Link } from 'react-router-dom';
import './CTA.css';

const CTASection = () => (
  <section className="cta-section">
    <div className="cta-content">
      <h2 className="cta-title">Transform Your Digital Presence</h2>
      <p className="cta-description">
        Join thousands of successful brands who have elevated their social media game with us.
      </p>
      <div className="cta-button-wrapper">
        <Link 
          to="/contact" 
          className="cta-button"
          aria-label="Get started with our services"
        >
          Let's Begin →
        </Link>
      </div>
    </div>
  </section>
);

export default CTASection;
