import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

// Import icons from react-icons
import { FaUsers, FaPencilAlt, FaAd, FaChartLine, FaCog, FaEnvelope, FaComments, FaGraduationCap, FaShieldAlt } from 'react-icons/fa';

// Import project images
import project1Image from '../1.jpg';
import project2Image from '../2.jpg';
import project3Image from '../3.jpg';

// Import partner logos
const googleLogo = 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png';
const metaLogo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/2560px-Meta_Platforms_Inc._logo.svg.png';
const hubspotLogo = 'https://www.hubspot.com/hubfs/HubSpot_Logos/HubSpot-Inversed.svg';
const shopifyLogo = 'https://cdn.shopify.com/shopifycloud/brochure/assets/brand-assets/shopify-logo-primary-logo-456baa801ee66a0a435671082365958316831c9960c480451dd0330bcdae304f.svg';
const Services = () => {
  const servicesList = [
    {
      title: 'Social Media Management',
      description: 'Transform your social media presence with our comprehensive management solutions. Our expert team handles everything from content planning and creation to community engagement and analytics, ensuring your brand stands out in today\'s digital landscape. We utilize cutting-edge tools and strategies to maximize your reach and engagement across all major platforms.',
      icon: FaUsers
    },
    {
      title: 'Content Creation',
      description: 'Elevate your brand with compelling, strategic content that resonates with your target audience. Our creative team specializes in producing high-quality written content, visuals, videos, and interactive media that tell your brand\'s story and drive engagement. We focus on creating content that not only looks stunning but also delivers measurable results.',
      icon: FaPencilAlt
    },
    {
      title: 'Ad Campaigns',
      description: 'Drive results with data-driven advertising campaigns that reach your ideal customers. Our comprehensive approach combines strategic planning, creative execution, and continuous optimization to ensure maximum ROI. We specialize in PPC, social media advertising, display ads, and remarketing campaigns tailored to your specific business goals.',
      icon: FaAd
    },
    {
      title: 'Strategy Development',
      description: 'Build a robust digital foundation with our strategic consulting services. We work closely with your team to develop comprehensive digital strategies that align with your business objectives. Our approach combines market research, competitive analysis, and industry best practices to create actionable roadmaps for success.',
      icon: FaChartLine
    },
    {
      title: 'Account Setup & Optimization',
      description: 'Maximize your digital platforms\' potential with our expert setup and optimization services. We ensure your social media accounts, business profiles, and digital presence are professionally configured and optimized for maximum visibility and engagement. Our team stays updated with the latest platform changes and algorithm updates.',
      icon: FaCog
    },
    {
      title: 'Email Marketing',
      description: 'Connect with your audience through sophisticated email marketing campaigns that drive engagement and conversions. Our email marketing services include list management, campaign design, automation, A/B testing, and detailed analytics to help you build lasting relationships with your subscribers.',
      icon: FaEnvelope
    },
    {
      title: 'Consultation',
      description: 'Gain valuable insights and guidance from our experienced digital marketing consultants. We offer personalized consultation sessions to help you navigate the complex digital landscape, identify opportunities, and overcome challenges. Our experts provide actionable recommendations tailored to your specific needs.',
      icon: FaComments
    },
    {
      title: 'Online Training',
      description: 'Empower your team with comprehensive digital skills training programs. Our customized training sessions cover everything from social media management to content creation and analytics. We provide hands-on learning experiences that ensure your team stays ahead of the digital curve.',
      icon: FaGraduationCap
    },
    {
      title: 'Security',
      description: 'Protect your digital assets with our comprehensive security solutions. We implement industry-leading security measures to safeguard your online presence, including data protection, access control, and regular security audits. Stay confident knowing your digital presence is protected by experts.',
      icon: FaShieldAlt
    },
  ];

  const portfolioProjects = [
    {
      title: 'Brand Transformation - TechCorp',
      image: project1Image,
      description: 'Complete digital overhaul resulting in 200% increase in engagement'
    },
    {
      title: 'Social Campaign - FashionBrand',
      image: project2Image,
      description: 'Viral campaign reaching 1M+ users across platforms'
    },
    {
      title: 'E-commerce Success - HomeGoods',
      image: project3Image,
      description: 'Digital strategy leading to 150% increase in online sales'
    }
  ];

  const partners = [
    {
      name: 'Google',
      logo: googleLogo,
      description: 'Certified Partner'
    },
    {
      name: 'Meta',
      logo: metaLogo,
      description: 'Business Partner'
    },
    {
      name: 'HubSpot',
      logo: hubspotLogo,
      description: 'Solutions Partner'
    },
    {
      name: 'Shopify',
      logo: shopifyLogo,
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
            <div className="service-icon">
              {React.createElement(service.icon, { size: 40 })}
            </div>
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
              <img src={project.image || "/placeholder.svg"} alt={project.title} />
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
              <img src={partner.logo || "/placeholder.svg"} alt={partner.name} />
              <p>{partner.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

