import React from 'react';
import { FaUsers, FaPencilAlt, FaBullseye, FaChartLine, FaCogs, 
         FaEnvelope, FaLightbulb, FaGraduationCap, FaShieldAlt } from 'react-icons/fa';

const services = [
  {
    icon: <FaUsers />,
    title: 'Social Media Management',
    description: 'Professional management of your social media presence across platforms.',
  },
  {
    icon: <FaPencilAlt />,
    title: 'Content Creation', 
    description: 'Engaging and relevant content that resonates with your target audience.',
  },
  {
    icon: <FaBullseye />,
    title: 'Ad Campaigns',
    description: 'Strategic paid advertising campaigns to reach your business goals.',
  },
  {
    icon: <FaChartLine />,
    title: 'Strategy Development',
    description: 'Custom digital strategies aligned with your business objectives.',
  },
  {
    icon: <FaCogs />,
    title: 'Account Setup & Optimization',
    description: 'Professional setup and optimization of your digital platforms.',
  },
  {
    icon: <FaEnvelope />,
    title: 'Email Marketing',
    description: 'Targeted email campaigns to nurture and convert your audience.',
  },
  {
    icon: <FaLightbulb />,
    title: 'Consultation',
    description: 'Expert guidance and advice for your digital marketing needs.',
  },
  {
    icon: <FaGraduationCap />,
    title: 'Online Training',
    description: 'Comprehensive training to help you master digital marketing.',
  },
  {
    icon: <FaShieldAlt />,
    title: 'Security',
    description: 'Protecting your digital assets and ensuring online safety.',
  },
];

const ServicesOverview = () => {
  return (
    <section style={{
      padding: '2rem',
      background: '#2c3e50',
      minHeight: '100vh'
    }}>
      <h2 style={{textAlign: 'center', marginBottom: '2rem', color: '#fff'}}>Our Services</h2>
      <ul style={{
        listStyle: 'none',
        padding: '0 2rem',
        maxWidth: '800px',
        margin: '0'
      }}>
        {services.map((service, index) => (
          <li key={index} style={{
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            fontStyle: 'italic'
          }}>
            <span style={{
              fontSize: '2rem',
              color: '#fff'
            }}>
              {service.icon}
            </span>
            <div>
              <h3 style={{margin: '0', color: '#fff'}}>{service.title}</h3>
              <p style={{color: '#ecf0f1', margin: '0.5rem 0'}}>{service.description}</p>
            </div>
          </li>
        ))}
      </ul>
      <a href="/services" className="cta-button">Learn More</a>
    </section>
  );
};

export default ServicesOverview;
