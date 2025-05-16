import React from 'react';
import ImageSlider from '../components/Imageslider';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
   <>
   <ImageSlider/>
    <motion.section 
      className="hero"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      
      <div className="hero-content">
      
          <h1 style={{ fontStyle: 'italic', background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4, #45B7D1, #96C93D)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Elevate. Engage. Secure.</h1>
          <p style={{ fontStyle: 'italic', color: '#FF6B6B' }}>Empowering your digital presence with innovative social media solutions,  Your trusted partner in digital transformation.</p>

      <p style={{ fontStyle: 'italic', color: '#45B7D1' }}>
        At Sage Consolidated, we specialize in delivering top-notch digital solutions, including social media management, content creation, cybersecurity, and more.
      </p>

        <button className="cta-btn">Explore</button>
      </div>
    </motion.section>
     </>
  );
}

export default Hero;
