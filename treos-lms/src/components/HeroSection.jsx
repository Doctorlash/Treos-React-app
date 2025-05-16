import React from 'react';
import ImageSlider from '../components/Imageslider';
import { motion } from 'framer-motion';
import './Hero.css';
import heroImage from '../set.jpg';
import logoImage from '../SAGE WHITE.png';

const Hero = () => {
  return (
    <>
      <ImageSlider/>
      <motion.section 
        className="hero"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          backgroundImage: `url(${heroImage || "/placeholder.jpg"})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="hero-content">
          <img 
            src={logoImage || "/placeholder.svg"} 
            alt="Sage Consolidated Logo"
            className="hero-logo"
          />
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{ 
              fontStyle: 'italic',
              background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4, #45B7D1, #96C93D)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: '3.5rem',
              fontWeight: 'bold',
              marginBottom: '1.5rem'
            }}
          >
            Elevate. Engage. Secure.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            style={{ 
              fontStyle: 'italic',
              color: '#FF6B6B',
              fontSize: '1.5rem',
              maxWidth: '800px',
              margin: '0 auto 1.5rem'
            }}
          >
            Empowering your digital presence with innovative social media solutions, 
            Your trusted partner in digital transformation.
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            style={{ 
              fontStyle: 'italic',
              color: '#45B7D1',
              fontSize: '1.2rem',
              maxWidth: '800px',
              margin: '0 auto 2rem'
            }}
          >
            At Sage Consolidated, we specialize in delivering top-notch digital solutions, 
            including social media management, content creation, cybersecurity, and more.
          </motion.p>

          <motion.button 
            className="cta-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            Explore Our Services
          </motion.button>
        </div>
      </motion.section>
    </>
  );
}

export default Hero;
