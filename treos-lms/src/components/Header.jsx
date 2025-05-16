import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Header.css';
import logoUrl from '../SAGE LOGO ICON WHITE.png';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
      <motion.div 
        className="logo"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <img src={logoUrl || "/placeholder.svg"} alt="Treos Logo" />
      </motion.div>
        
      </div>

      <nav className="nav">
        <motion.ul
          className="nav-list"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.li
            className="nav-item"
            whileHover={{ scale: 1.1, color: '#ff5722' }}
            whileTap={{ scale: 0.95 }}
          >
<Link to="/">Home</Link>
          </motion.li>
          <motion.li
            className="nav-item"
            whileHover={{ scale: 1.1, color: '#ff5722' }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/services">Services</Link>
          </motion.li>
          <motion.li className="nav-item"
            whileHover={{ scale: 1.1, color: '#ff5722' }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/about">About</Link>
          </motion.li>
          <motion.li
            className="nav-item"
            whileHover={{ scale: 1.1, color: '#ff5722' }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/contact">Contact</Link>
          </motion.li>
          <motion.li className="nav-item"
            whileHover={{ scale: 1.1, color: '#ff5722' }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/Blog">Blog</Link>
          </motion.li>
        </motion.ul>
      </nav>

      
         
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
       
      
    </header>
  );
};

export default Header;

