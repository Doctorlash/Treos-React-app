import React from 'react';
import Hero from '../components/HeroSection';
import ServicesOverview from '../components/ServicesOverview';
import TeamIntro from '../components/Teamintro';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTA';

import { motion } from 'framer-motion';
import BlogPreview from '../components/Blogpreview';



const HomePage = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
       
      <Hero />
       
     <ServicesOverview/>
    <TeamIntro/>
    <Testimonials/>
    <BlogPreview/>
    <CTASection/>
    </motion.div>
  );
};

export default HomePage;

