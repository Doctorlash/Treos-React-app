import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const servicesList = [
    {
      title: 'Social Media Management',
      description: 'Transform your social media presence with our comprehensive management solutions. Our expert team handles everything from content planning and creation to community engagement and analytics, ensuring your brand stands out in today\'s digital landscape. We utilize cutting-edge tools and strategies to maximize your reach and engagement across all major platforms.',
      icon: 'social-media-icon.svg'
    },
    {
      title: 'Content Creation',
      description: 'Elevate your brand with compelling, strategic content that resonates with your target audience. Our creative team specializes in producing high-quality written content, visuals, videos, and interactive media that tell your brand\'s story and drive engagement. We focus on creating content that not only looks stunning but also delivers measurable results.',
      icon: 'content-icon.svg'
    },
    {
      title: 'Ad Campaigns',
      description: 'Drive results with data-driven advertising campaigns that reach your ideal customers. Our comprehensive approach combines strategic planning, creative execution, and continuous optimization to ensure maximum ROI. We specialize in PPC, social media advertising, display ads, and remarketing campaigns tailored to your specific business goals.',
      icon: 'campaign-icon.svg'
    },
    {
      title: 'Strategy Development',
      description: 'Build a robust digital foundation with our strategic consulting services. We work closely with your team to develop comprehensive digital strategies that align with your business objectives. Our approach combines market research, competitive analysis, and industry best practices to create actionable roadmaps for success.',
      icon: 'strategy-icon.svg'
    },
    {
      title: 'Account Setup & Optimization',
      description: 'Maximize your digital platforms\' potential with our expert setup and optimization services. We ensure your social media accounts, business profiles, and digital presence are professionally configured and optimized for maximum visibility and engagement. Our team stays updated with the latest platform changes and algorithm updates.',
      icon: 'setup-icon.svg'
    },
    {
      title: 'Email Marketing',
      description: 'Connect with your audience through sophisticated email marketing campaigns that drive engagement and conversions. Our email marketing services include list management, campaign design, automation, A/B testing, and detailed analytics to help you build lasting relationships with your subscribers.',
      icon: 'email-icon.svg'
    },
    {
      title: 'Consultation',
      description: 'Gain valuable insights and guidance from our experienced digital marketing consultants. We offer personalized consultation sessions to help you navigate the complex digital landscape, identify opportunities, and overcome challenges. Our experts provide actionable recommendations tailored to your specific needs.',
      icon: 'consultation-icon.svg'
    },
    {
      title: 'Online Training',
      description: 'Empower your team with comprehensive digital skills training programs. Our customized training sessions cover everything from social media management to content creation and analytics. We provide hands-on learning experiences that ensure your team stays ahead of the digital curve.',
      icon: 'training-icon.svg'
    },
    {
      title: 'Security',
      description: 'Protect your digital assets with our comprehensive security solutions. We implement industry-leading security measures to safeguard your online presence, including data protection, access control, and regular security audits. Stay confident knowing your digital presence is protected by experts.',
      icon: 'security-icon.svg'
    },
  ];

  const portfolioProjects = [
    {
      title: 'Brand Transformation - TechCorp',
      image: 'project1.jpg',
      description: 'Complete digital overhaul resulting in 200% increase in engagement'
    },
    {
      title: 'Social Campaign - FashionBrand',
      image: 'project2.jpg',
      description: 'Viral campaign reaching 1M+ users across platforms'
    },
    {
      title: 'E-commerce Success - HomeGoods',
      image: 'project3.jpg',
      description: 'Digital strategy leading to 150% increase in online sales'
    }
  ];

  const partners = [
    {
      name: 'Google',
      logo: 'google-logo.svg',
      description: 'Certified Partner'
    },
    {
      name: 'Meta',
      logo: 'meta-logo.svg',
      description: 'Business Partner'
    },
    {
      name: 'HubSpot',
      logo: 'hubspot-logo.svg',
      description: 'Solutions Partner'
    },
    {
      name: 'Shopify',
      logo: 'shopify-logo.svg',
      description: 'Plus Partner'
    }
  ];

  return (
    <div className="services">
      <section className="services-hero">
        <div className="services-hero-text">
          <h1>What we Offer</h1>
          <p className="hero-subtitle">Innovative solutions that drive growth and engagement in the digital age</p>
        </div>
      </section>

      <section className="services-list">
        {servicesList.map((service, index) => (
          <div className="service-item" key={index}>
            <img src={service.icon} alt={service.title} className="service-icon" />
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <Link to="/contact" className="cta-button">
              Get Started
            </Link>
          </div>
        ))}
      </section>

      <section className="portfolio-section">
        <h2>Our Success Stories</h2>
        <div className="portfolio-grid">
          {portfolioProjects.map((project, index) => (
            <div className="portfolio-item" key={index}>
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="partners-section">
        <h2>Trusted Partners</h2>
        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div className="partner-item" key={index}>
              <img src={partner.logo} alt={partner.name} />
              <p>{partner.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
