import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Footer.css';
import logoUrl from '../SAGE LOGO ICON BLUE.png';

const Footer = () => {
  const socialLinks = [
    { Icon: FaFacebook, url: "https://facebook.com", name: "Facebook" },
    { Icon: FaTwitter, url: "https://twitter.com", name: "Twitter" }, 
    { Icon: FaLinkedin, url: "https://linkedin.com", name: "LinkedIn" },
    { Icon: FaInstagram, url: "https://instagram.com", name: "Instagram" }
  ];

  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="footer-content">
        <div className="footer-section brand">
          <motion.div 
            className="brand-identity"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.img 
              src={logoUrl || "/placeholder.svg"}
              alt="SageConsolidated Logo"
              className="footer-logo"
              initial={{ rotate: -10 }}
              whileHover={{ rotate: 0, scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.h3 
              initial={{ backgroundPosition: "0% 50%" }}
              whileHover={{ backgroundPosition: "100% 50%" }}
              className="company-name"
            >
              SageConsolidated
            </motion.h3>
          </motion.div>
          <motion.p 
            className="brand-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Transforming digital presence through innovative social media strategies. 
            Your growth partner in the ever-evolving digital landscape.
          </motion.p>
        </div>

        <motion.div 
          className="footer-section links"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <motion.li whileHover={{ x: 5 }}><a href="/services">Our Services</a></motion.li>
            <motion.li whileHover={{ x: 5 }}><a href="/about">About Us</a></motion.li>
            <motion.li whileHover={{ x: 5 }}><a href="/privacy">Privacy Policy</a></motion.li>
            <motion.li whileHover={{ x: 5 }}><a href="/terms">Terms of Service</a></motion.li>
          </ul>
        </motion.div>

        <motion.div 
          className="footer-section contact"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h4>Contact Us</h4>
          <div className="contact-info">
            <motion.a 
              href="mailto:info@sageconsolidated.com" 
              className="contact-link"
              whileHover={{ color: '#4A90E2', scale: 1.02 }}
            >
              info@sageconsolidated.com
            </motion.a>
            <motion.a 
              href="tel:+11234567890" 
              className="contact-link"
              whileHover={{ color: '#4A90E2', scale: 1.02 }}
            >
              +1 (123) 456-7890
            </motion.a>
          </div>
        </motion.div>

        <motion.div 
          className="footer-section social"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h4>Follow Us</h4>
          <div className="social-icons">
            {socialLinks.map((social, index) => (
              <motion.a 
                key={social.name}
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                <social.Icon size={24} color="#4A90E2" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="footer-bottom"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <motion.div 
          className="footer-divider"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          © {new Date().getFullYear()} SageConsolidated. All rights reserved.
        </motion.p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
